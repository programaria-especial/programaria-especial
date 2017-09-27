// LAZY LOAD
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

function setLazyLoad(){
    imgs = document.querySelectorAll('img[data-src]');
}

function cleanLazyLoad(){
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

    cleanLazyLoad();
}

registerListener('load', setLazyLoad);
registerListener('scroll', lazyLoad);



// RANGE
function onChangeRange() {
    var value = this.value;   
    
    this.style.left = value + "px";
    
    var rangePorcentagem = this.parentElement.querySelector(".range__porcentagem");

    rangePorcentagem.innerHTML = value + '%';
    var porcentagem = (value / 100) * this.offsetWidth;
    
    if (value < 51) {
        rangePorcentagem.style.left = (porcentagem + 53) + 'px';
        rangePorcentagem.style.textAlign = 'right';
    } else {
        rangePorcentagem.style.left = (porcentagem - 53 - rangePorcentagem.offsetWidth) + 'px';
        rangePorcentagem.style.textAlign = 'left';
    }
}

document.querySelectorAll(".range__input").forEach(function(range) {
    range.addEventListener("change", onChangeRange, true);
});

function onRespostaSubmit(e) {
    e.preventDefault();
    this.querySelector(".teste__pergunta__explicacao").classList.add("show");
    this.querySelector(".teste__pergunta__botao").setAttribute("disabled", true); 
    this.querySelector(".range__resposta-certa").classList.add("show");
    
    var isAllFormsSubmitted = document.querySelectorAll(".teste__pergunta__botao[disabled='true']").length > 1;
    if (isAllFormsSubmitted) {
       document.querySelector(".painel").classList.add("show"); 
    }
}

document.querySelectorAll(".teste__pergunta").forEach(function(teste) {
    teste.addEventListener("submit", onRespostaSubmit, true);
});

var menuLinks = $('a[href^="#"]');
menuLinks.on('click', function(event) {
    menuLinks.removeClass('active');
    var menuLink = $(this);
    menuLink.addClass('active');
    var target = $(menuLink.attr('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
