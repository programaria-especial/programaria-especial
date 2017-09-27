function registerListener(event, func) {
    if (window.addEventListener) {
        window.addEventListener(event, func)
    } else {
        window.attachEvent('on' + event, func)
    }
}

function isInViewport(el){
    var rect = el.getBoundingClientRect();

    return (
        rect.bottom >= 0 && 
        rect.right >= 0 && 
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

var imgs = [];

function setLazy(){
    imgs = document.querySelectorAll('img[data-src]');
}

function cleanLazy(){
    imgs = Array.prototype.filter.call(imgs, function(img){ 
        return img.getAttribute('data-src');
    });
}

function lazyLoad(){
    for(var i = 0; i < imgs.length; i++) {
        if(isInViewport(imgs[i])){
            imgs[i].src = imgs[i].getAttribute('data-src');
            imgs[i].removeAttribute('data-src');
        }
    }

    cleanLazy();
}

registerListener('load', setLazy);
registerListener('scroll', lazyLoad);



function onRangeMouseDown(cursor) {
	cursor.addEventListener('mouseup', function() {
        onRangeMouseUp(cursor);
    }, true);
	cursor.addEventListener('mousemove', function(e) {
        onRangeMouseMove(e, cursor);
    }, true);
}

function onRangeMouseUp(cursor) {
    cursor.removeEventListener('mouseup', function() {
        onRangeMouseUp(cursor);
    }, true);
	cursor.removeEventListener('mousemove', function(e) {
        onRangeMouseMove(e, cursor);
    }, true);
}

function onRangeMouseMove(e, cursor) {
    var rangeBarra = cursor.parentElement;
    var rangeBarraLargura = rangeBarra.offsetWidth;
    var posicao = e.clientX - rangeBarra.offsetLeft - (cursor.offsetWidth / 2);
    var limiteSuperior = rangeBarraLargura - cursor.offsetWidth;
    
    if (posicao < 0) {
        posicao = 0;
    } else if (posicao > limiteSuperior) {
        posicao = limiteSuperior;
	}
    
    cursor.style.left = posicao + "px";
    
    var porcentagem = Math.trunc(100 * (posicao + 2) / rangeBarraLargura);
    var className;
    
    if (porcentagem < 50) {
        className = "range__cursor right";
    } else if (porcentagem > 50) {
        className = "range__cursor left";
    } else {
        className = "range__cursor center"
    }
    
    cursor.className = className;
    cursor.setAttribute("data-porcentagem", porcentagem + "%");
    // document.getElementById(cursor.getAttribute("data-input-id")).value = porcentagem;
}

var cursor1 = document.querySelector("#range1 .range__cursor");
cursor1.addEventListener("drag", function(e) {
    onRangeMouseMove(e, cursor1);
}, true);
cursor1.parentElement.addEventListener("drop", function(e) {
    console.log("drop");
}, true);

var cursor2 = document.querySelector("#range2 .range__cursor");
cursor2.addEventListener("mousedown", function() {
    onRangeMouseDown(cursor2);
}, true);
