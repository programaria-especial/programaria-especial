(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"bg1.jpg", id:"bg1"},
		{src:"bg2.jpg", id:"bg2"},
		{src:"carro.png", id:"carro"},
		{src:"expn_01.jpg", id:"expn_01"},
		{src:"expn_010.jpg", id:"expn_010"},
		{src:"expn_012.jpg", id:"expn_012"},
		{src:"expn_02.jpg", id:"expn_02"},
		{src:"expn_03.jpg", id:"expn_03"},
		{src:"expn_04.jpg", id:"expn_04"},
		{src:"expn_05.jpg", id:"expn_05"},
		{src:"expn_06.jpg", id:"expn_06"},
		{src:"expn_08.jpg", id:"expn_08"},
		{src:"farol.png", id:"farol"},
		{src:"img1.jpg", id:"img1"},
		{src:"roda.png", id:"roda"},
		{src:"smk1.png", id:"smk1"},
		{src:"smk2.png", id:"smk2"}
	]
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.carro = function() {
	this.initialize(img.carro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,289,100);


(lib.expn_01 = function() {
	this.initialize(img.expn_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,120);


(lib.expn_010 = function() {
	this.initialize(img.expn_010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,120);


(lib.expn_012 = function() {
	this.initialize(img.expn_012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,120);


(lib.expn_02 = function() {
	this.initialize(img.expn_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,120);


(lib.expn_03 = function() {
	this.initialize(img.expn_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,120);


(lib.expn_04 = function() {
	this.initialize(img.expn_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,120);


(lib.expn_05 = function() {
	this.initialize(img.expn_05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,120);


(lib.expn_06 = function() {
	this.initialize(img.expn_06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,120);


(lib.expn_08 = function() {
	this.initialize(img.expn_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,120);


(lib.farol = function() {
	this.initialize(img.farol);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,77);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,386,90);


(lib.roda = function() {
	this.initialize(img.roda);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,47);


(lib.smk1 = function() {
	this.initialize(img.smk1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.smk2 = function() {
	this.initialize(img.smk2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.txt2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape.setTransform(287.7,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLA0IgKgEIgIgEIgGgIQgEgEgDgNQgCgIAAgLQAAgKACgIIADgJIAEgIIAGgHIAIgFIAKgEIALgBIANABIAKAEIAIAFIAGAHIAEAIIADAJQABAIAAAKQAAALgBAIQgEANgDAEIgGAIIgIAEIgKAEIgNABIgLgBgAgIgXQgDACgBAEQgDADAAAFIgBAJQABAQADAFQABAEADACQAEABAEAAQAFAAAEgBQADgCACgEQACgFABgQIgBgJIgCgIQgCgEgDgCQgEgCgFAAQgEAAgEACg");
	this.shape_1.setTransform(280.5,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASBEIgDgNIgeAAIgDANIgcAAIAhhnIAbAAIAhBngAAIAgIgIggIgIAgIAQAAgAgggwIAFgIIAFgFIAGgEIAIgBQAEAAAEADIAGADIAEgBIAGgGIARAKQgDAFgDADIgFAGIgGADIgHABQgFAAgEgDIgGgDQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABQgDABgCAEg");
	this.shape_2.setTransform(270.5,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBFIgIgDIAFgMQAGADAFAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgGAAIgEgDIACgLIgIgCIgGgEIgGgFIgEgGQgDgHgCgIQgCgHAAgLIACgWIADgJIAFgHIAGgHQADgCAFgCIAKgDIALgBQAIAAAIACQAIACAGAEIgPAXIgHgDIgJgBIgHABQgCABgCACQgCAEgBAFIgBAOIABAOQABAEACACQACADACABIAHACIAJgCIAIgEIAOAWQgHAEgHACQgIACgKAAIAAAFIAGAAIAFACIADAFIABAHIgBAHIgEAGQgCABgEABIgKABIgIgBg");
	this.shape_3.setTransform(261.1,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASA0IgDgNIgeAAIgDANIgcAAIAhhnIAbAAIAhBngAAIAQIgIgeIgIAeIAQAAg");
	this.shape_4.setTransform(251.9,10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZA0IAAg5IgSA5IgQAAIgRg5IAAA5IgZAAIAAhnIAkAAIAPA2IAQg2IAjAAIAABng");
	this.shape_5.setTransform(238.3,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghA0IAAhnIBDAAIAAAaIgoAAIAAANIAmAAIAAAXIgmAAIAAAQIAoAAIAAAZg");
	this.shape_6.setTransform(228.1,10.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMA0IgKgEIgIgEIgFgIQgEgEgDgNQgCgIAAgLQAAgKACgIIACgJIAFgIIAFgHIAIgFIAKgEIAMgBIAMABIALAEIAIAFIAGAHIAEAIIADAJQABAIAAAKQAAALgBAIQgEANgDAEIgGAIIgIAEIgLAEIgMABIgMgBgAgHgXQgEACgCAEQgCADAAAFIAAAJQAAAQACAFQACAEAEACQADABAEAAQAFAAAEgBQADgCACgEQACgFABgQIAAgJIgDgIQgCgEgDgCQgEgCgFAAQgEAAgDACg");
	this.shape_7.setTransform(216.2,10.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASBEIgDgNIgeAAIgDANIgcAAIAhhnIAbAAIAhBngAAIAgIgIggIgIAgIAQAAgAgggwIAFgIIAFgFIAGgEIAIgBQAEAAAEADIAGADIAEgBIAGgGIARAKQgDAFgDADIgFAGIgGADIgHABQgFAAgEgDIgGgDQAAAAgBAAQgBAAAAABQgBAAAAAAQgBAAAAABQgDABgCAEg");
	this.shape_8.setTransform(206.2,8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIBFIgIgDIAFgMQAGADAFAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgGAAIgEgDIACgLIgIgCIgGgEIgGgFIgEgGQgDgHgCgIQgCgHAAgLIACgWIADgJIAFgHIAGgHQADgCAFgCIAKgDIALgBQAIAAAIACQAIACAGAEIgPAXIgHgDIgJgBIgHABQgCABgCACQgCAEgBAFIgBAOIABAOQABAEACACQACADACABIAHACIAJgCIAIgEIAOAWQgHAEgHACQgIACgKAAIAAAFIAGAAIAFACIADAFIABAHIgBAHIgEAGQgCABgEABIgKABIgIgBg");
	this.shape_9.setTransform(196.8,12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AASA0IgDgNIgeAAIgDANIgcAAIAhhnIAbAAIAhBngAAIAQIgIgeIgIAeIAQAAg");
	this.shape_10.setTransform(187.6,10.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQA0Igeg0IAAA0IgaAAIAAhnIAdAAIAaAxIAAgxIAbAAIAABng");
	this.shape_11.setTransform(177.5,10.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMA0IAAhnIAZAAIAABng");
	this.shape_12.setTransform(170,10.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKA0IgJgDIgHgEIgGgHIgEgIIgDgJIgBgVQgBgIADgOIAEgJQABgEADgEIAHgFIAIgEQAEgCAGgBIAKgBQAJABAJACQAIACAGAEIgPAXIgIgEQgEgBgGAAIgGABQgDABgCACQgDADgBAGQgBAFAAAHIAAAPQABAGACADQADADACABQAEACADAAQADAAAEgCQACgBABgCQACgDABgJIAAgCIgQAAIAAgUIApAAIAAARQAAAPgCAFIgCAIIgEAHIgFAEIgHAEIgJABIgMABIgKgBg");
	this.shape_13.setTransform(163,10.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AASA0IgDgNIgeAAIgDANIgcAAIAhhnIAbAAIAhBngAAIAQIgIgeIgIAeIAQAAg");
	this.shape_14.setTransform(153.3,10.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAYA0IAAg5IgRA5IgQAAIgRg5IAAA5IgYAAIAAhnIAjAAIAPA2IAQg2IAjAAIAABng");
	this.shape_15.setTransform(142.3,10.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMA0IAAhnIAZAAIAABng");
	this.shape_16.setTransform(133.8,10.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AASA0IgDgNIgeAAIgDANIgcAAIAhhnIAbAAIAhBngAAIAQIgIgeIgIAeIAQAAg");
	this.shape_17.setTransform(123.8,10.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSAyIgIgDIgFgFIgFgFIgCgHQgDgHAAgKIAAhAIAcAAIAAA9IABAIIACAGQACACADABIAFABIAHgBQADgBACgCIACgFIABgJIAAg9IAbAAIAABAQAAAKgCAHIgDAHIgEAFIgGAFIgIADQgMACgHAAQgNAAgFgCg");
	this.shape_18.setTransform(113.8,10.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVAyIgKgDIgJgEIAPgWQAFAEAGACQAIACAHAAQAHAAADgCQACgBAAgEQAAgFgDgCIgPgFIgNgEQgGgDgDgDQgEgCgCgFQgCgFABgHQgBgIADgHQADgGAFgEQAEgEAIgCQAHgCAHAAQAIAAAMACQAIACAHADIgMAXQgMgEgKAAIgIABQgCABAAAEQgBAEAEACIAJADIAQAFQAIADADADQAFACABAGQACAFAAAIQAAAIgCAFQgCAGgFAEQgEAEgIACQgHADgKAAQgQgBgHgCg");
	this.shape_19.setTransform(104.2,10.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghA0IAAhnIBDAAIAAAaIgoAAIAAANIAmAAIAAAXIgmAAIAAAQIAoAAIAAAZg");
	this.shape_20.setTransform(93.3,10.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAYA0IAAg5IgRA5IgQAAIgRg5IAAA5IgYAAIAAhnIAjAAIAPA2IAQg2IAjAAIAABng");
	this.shape_21.setTransform(82.9,10.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAKA0IgMghIgJAAIAAAhIgbAAIAAhnIApAAQAGABALACQAHACAEAFQAEAEACAHQACAGAAAJIgBAJIgDAHIgFAJIgHAFIAQAlgAgLgBIANAAQAFgBADgDQACgCAAgHQAAgGgCgEQgDgCgFAAIgNAAg");
	this.shape_22.setTransform(72.2,10.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgLA0IgKgEIgIgEIgHgIQgDgEgDgNQgCgIAAgLQAAgKACgIIADgJIADgIIAHgHIAIgFIAKgEIALgBIANABIAKAEIAIAFIAGAHIAEAIIACAJQACAIAAAKQAAALgCAIQgDANgDAEIgGAIIgIAEIgKAEIgNABIgLgBgAgIgXQgDACgBAEQgCADgBAFIgBAJQABAQADAFQABAEADACQAEABAEAAQAGAAADgBQADgCACgEQADgFAAgQIgBgJIgCgIQgCgEgDgCQgDgCgGAAQgEAAgEACg");
	this.shape_23.setTransform(62.3,10.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AghA0IAAhnIBDAAIAAAaIgoAAIAAAQIAmAAIAAAWIgmAAIAAAng");
	this.shape_24.setTransform(53.4,10.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgVAyIgKgDIgJgEIAPgWQAFAEAGACQAIACAGAAQAIAAADgCQACgBAAgEQAAgFgDgCIgQgFIgMgEQgGgDgDgDQgEgCgCgFQgCgFABgHQgBgIADgHQADgGAEgEQAFgEAIgCQAHgCAHAAQAJAAALACQAIACAHADIgMAXQgLgEgLAAIgIABQgCABAAAEQAAAEADACIAJADIAQAFQAHADAFADQAEACABAGQACAFAAAIQAAAIgCAFQgCAGgFAEQgFAEgHACQgHADgLAAQgPgBgHgCg");
	this.shape_25.setTransform(44.5,10.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAQA0Igeg0IAAA0IgbAAIAAhnIAeAAIAaAxIAAgxIAbAAIAABng");
	this.shape_26.setTransform(35.1,10.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AASA0IgDgNIgeAAIgDANIgcAAIAhhnIAbAAIAhBngAAIAQIgIgeIgIAeIAQAAg");
	this.shape_27.setTransform(25,10.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAKA0IgMghIgJAAIAAAhIgbAAIAAhnIApAAQAGABALACQAHACAEAFQAEAEACAHQACAGAAAJIgBAJIgDAHIgFAJIgHAFIAQAlgAgLgBIANAAQAFgBADgDQACgCAAgHQAAgGgCgEQgDgCgFAAIgNAAg");
	this.shape_28.setTransform(15.4,10.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgNA0IAAhNIgbAAIAAgaIBQAAIAAAaIgbAAIAABNg");
	this.shape_29.setTransform(6.2,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,292.2,20.8);


(lib.txt2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9DF4E").s().p("AglCQIAAjYIhMAAIAAhHIDjAAIAABHIhLAAIAADYg");
	this.shape.setTransform(281.5,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9DF4E").s().p("AAcCQIgjhZIgbAAIAABZIhLAAIAAkfIB2AAQASAAAdAHQATAGANANQALAMAGASQAFASAAAWQAAAQgCANQgDAOgGAJQgFAMgIAKQgJAJgMAGIArBmgAgigHIAoAAQAPAAAHgIQAGgIABgSQgBgTgGgIQgHgIgPAAIgoAAg");
	this.shape_1.setTransform(259.2,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9DF4E").s().p("AgjCRQgQgDgNgHQgMgGgJgIQgKgIgHgLQgJgNgJghQgFgYAAggQAAgfAFgXIAHgZQAEgMAHgLQAHgKAKgIQAJgJAMgFQANgGAQgDQARgEASAAQATAAARAEQAQADANAGQAMAFAKAJQAJAIAHAKQAHALAEAMIAIAZQAEAXAAAfQAAAggEAYQgKAhgJANQgHALgJAIQgKAIgMAGQgNAHgQADQgRACgTAAQgSAAgRgCgAgXhDQgLAFgEALQgFAJgCAPIgCAdQABArAIANQAEALALAFQAJAGAOAAQAPAAAKgGQAJgFAGgLQAGgNACgrIgCgdQgCgPgEgJQgGgLgJgFQgKgFgPAAQgOAAgJAFg");
	this.shape_2.setTransform(234.3,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9DF4E").s().p("AhtCQIAAkfIB2AAQATAAAdAHQATAHAMANQAMAMAFATQAFARAAAYQAAAWgFASQgFASgMAOQgGAHgIAFQgIAHgKADQgKAFgMABQgMACgPAAIgpAAIAABWgAgigFIAoAAQAQAAAGgJQAHgHAAgTQAAgTgHgJQgGgIgQAAIgoAAg");
	this.shape_3.setTransform(210.7,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9DF4E").s().p("Ag9COQgPgEgNgFQgNgFgLgIIAng7QAOAJAUAGQAVAGAWAAQAVAAAIgFQAHgFAAgKQAAgOgLgFQgGgEgngKQgWgEgPgIQgPgHgKgKQgKgJgFgOQgFgOAAgTQAAgWAIgSQAHgSAOgLQAOgLAUgFQAUgGAYAAQAXAAAhAGQAVAEAUAKIgiBBQgggNgdgBQgSABgHADQgIAEAAAKQAAALAJAFQAGADAYAHQAdAHARAHQATAHALALQAMAIAFAPQAFAPAAAXQAAAUgGAQQgHAQgNALQgNAMgVAGQgVAGgcAAQgugCgUgEg");
	this.shape_4.setTransform(186.9,25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9DF4E").s().p("AgjCRQgQgDgNgHQgMgGgJgIQgKgIgHgLQgJgNgJghQgFgYAAggQAAgfAFgXIAHgZQAEgMAHgLQAHgKAKgIQAJgJAMgFQANgGAQgDQARgEASAAQATAAARAEQAQADANAGQANAFAJAJQAJAIAHAKQAHALAEAMIAIAZQAEAXAAAfQAAAggEAYQgKAhgJANQgHALgJAIQgKAIgMAGQgNAHgQADQgRACgTAAQgSAAgRgCgAgXhDQgLAFgEALQgFAJgCAPIgCAdQABArAIANQAEALALAFQAJAGAOAAQAPAAAKgGQAJgFAGgLQAGgNACgrIgCgdQgCgPgEgJQgGgLgJgFQgKgFgPAAQgOAAgJAFg");
	this.shape_5.setTransform(163.7,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9DF4E").s().p("AgOCRQgOgDgNgFQgMgFgJgHQgJgHgHgKQgHgKgGgMQgFgLgDgOQgEgSgCgrQAAgUAGgnQACgNAGgMQAEgMAIgJQAHgKAKgIQAKgIAMgEQANgGAPgCQAPgEATAAQAXAAAVAGQAWAFASAMIgqBAQgJgFgLgDQgMgEgNABQgMAAgHACQgIADgGAHQgHAJgDAOQgCAPAAAXQAAAYACAPQADAQAHAIQAGAIAIACQAHADANABQAOgBAKgDQALgDANgIIAmA8QgUAMgUAGQgeAFgUAAQgQABgOgDg");
	this.shape_6.setTransform(140.3,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9DF4E").s().p("AheCQIAAkfIC9AAIAABHIhyAAIAAAmIBuAAIAABCIhuAAIAAArIByAAIAABFg");
	this.shape_7.setTransform(119.5,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9DF4E").s().p("AgiCRQgRgDgNgHQgMgGgKgIQgJgIgHgLQgJgNgKghQgEgYAAggQAAgfAEgXIAIgZQAFgMAGgLQAHgKAJgIQAKgJAMgFQANgGARgDQAQgEASAAQAUAAAQAEQAQADANAGQAMAFAKAJQAKAIAGAKQAHALAEAMIAHAZQAFAXAAAfQAAAggFAYQgJAhgJANQgHALgJAIQgKAIgMAGQgNAHgQADQgQACgUAAQgSAAgQgCgAgXhDQgKAFgGALQgEAJgCAPIgCAdQACArAGANQAGALAKAFQAJAGAOAAQAPAAAKgGQAJgFAFgLQAHgNACgrIgCgdQgCgPgFgJQgFgLgJgFQgKgFgPAAQgOAAgJAFg");
	this.shape_8.setTransform(91.5,25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9DF4E").s().p("AgoCRIhZkhIBQAAIAyCyIAziyIBOAAIhZEhg");
	this.shape_9.setTransform(66.4,25.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9DF4E").s().p("AgjCRQgQgDgNgHQgMgGgJgIQgKgIgHgLQgJgNgJghQgFgYAAggQAAgfAFgXIAHgZQAEgMAHgLQAHgKAKgIQAJgJAMgFQANgGAQgDQARgEASAAQATAAARAEQAQADANAGQAMAFAKAJQAJAIAHAKQAHALAEAMIAIAZQAEAXAAAfQAAAggEAYQgKAhgJANQgHALgJAIQgKAIgMAGQgNAHgQADQgRACgTAAQgSAAgRgCgAgXhDQgLAFgEALQgFAJgCAPIgBAdQAAArAIANQAEALALAFQAJAGAOAAQAPAAAKgGQAJgFAGgLQAGgNACgrIgCgdQgCgPgEgJQgGgLgJgFQgKgFgPAAQgOAAgJAFg");
	this.shape_10.setTransform(41.3,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9DF4E").s().p("AAuCQIhYiUIAACUIhJAAIAAkfIBRAAIBNCGIAAiGIBJAAIAAEfg");
	this.shape_11.setTransform(15.8,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,293.6,50.8);


(lib.txt1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9DF4E").s().p("AgdBaIAAgtIAxAAIAAAtgAgaAjIABgQQABgIACgFQACgGAFgDQAFgFAJgGIAMgKQAEgEAAgGQAAgGgEgDQgFgEgLAAQgJAAgJADIgRAGIgUgmQANgGAPgEQAPgCASAAQARAAAMACQAMAEAHAFQAGAGAEAJQACAIAAAKQAAALgBAHIgFAMIgIAJIgLAGQgOAKgDAGQgCAEAAAOg");
	this.shape.setTransform(367.1,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9DF4E").s().p("Ag5B1IAAiwIB0AAIAAArIhGAAIAAAVIBDAAIAAAqIhDAAIAAAcIBGAAIAAAqgAAIhEIgJgQIgLAQIgjAAIAagvIAnAAIAaAvg");
	this.shape_1.setTransform(354.5,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9DF4E").s().p("AgIBZQgJgCgHgDIgOgIQgFgEgFgGQgEgGgDgHIgFgQQgDgLgBgaQAAgLAEgYIAEgQIAIgNIAKgLIAOgIQAIgDAKgBQAHgCAMAAQAPgBAMAEQAPAEAKAGIgZAoQgGgDgHgDQgHgBgIAAQgIAAgEABQgFACgDAFQgEAFgBAIQgCAKAAANQAAAPABAKQACAIAEAFQADAGAFACQAEABAIAAQAJAAAGgCQAHgCAHgFIAYAlQgMAHgMAEQgTADgMABQgKgBgIgBg");
	this.shape_2.setTransform(341.6,19.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9DF4E").s().p("AgVBZQgKgCgHgEQgJgEgFgFQgGgEgFgHQgFgIgFgVQgDgPgBgTQABgSADgOIAEgQQADgHADgHQAFgHAGgEQAFgFAJgEQAHgDAKgCQAKgCALAAQALAAALACQAKACAIADQAHAEAGAFQAGAEAEAHQAEAHADAHIAEAQQAEAOAAASQAAATgEAPQgGAVgFAIQgEAHgGAEQgGAFgHAEQgIAEgKACQgLACgLAAQgLAAgKgCgAgOgpQgGADgDAHQgDAFgBAKIgBASQABAaAEAIQADAHAGADQAGACAIAAQAJAAAGgCQAGgDADgHQAEgIABgaIgBgSQgBgKgDgFQgDgHgGgDQgGgCgJAAQgIAAgGACg");
	this.shape_3.setTransform(327.7,19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9DF4E").s().p("AgZBZIg2ixIAxAAIAeBtIAfhtIAxAAIg3Cxg");
	this.shape_4.setTransform(312.7,19.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9DF4E").s().p("Ag6BZIAAiwIB0AAIAAArIhFAAIAAAXIBDAAIAAAoIhDAAIAAAcIBFAAIAAAqg");
	this.shape_5.setTransform(296.7,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(287.5,3,87.6,32.8);


(lib.txt1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAZIAAgxIAxAAIAAAxg");
	this.shape.setTransform(498.1,52.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglBXQgJgCgIgEQgIgDgHgFIAYgkQAIAGAMADQAOAEAMAAQANAAAFgDQAFgDAAgGQAAgJgIgDIgagIQgNgDgKgFQgJgEgGgGQgGgFgDgJQgDgIAAgMQAAgOAFgLQAEgKAIgHQAJgHANgEQAMgDAOAAQANAAAVADQANADAMAGIgVAoQgUgIgRAAQgKAAgFACQgFACAAAHQAAAGAGADQAEACANAEQASAFAKAEQANAFAGAGQAHAEAEAKQADAJAAAOQAAAMgEAKQgEAKgIAHQgIAHgNAEQgNAEgSAAQgbgCgMgCg");
	this.shape_1.setTransform(488.4,46.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAgBZIgGgVIg0AAIgHAVIgvAAIA4ixIAxAAIA4CxgAAPAbIgPg0IgQA0IAfAAg");
	this.shape_2.setTransform(474.3,46.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBYIg1haIAABaIgtAAIAAivIAxAAIAvBSIAAhSIAtAAIAACvg");
	this.shape_3.setTransform(458.9,46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVBYQgKgBgHgEQgJgEgFgEQgGgFgFgHQgFgJgGgUQgCgPAAgTQAAgSACgOIAFgQQACgIAEgGQAFgGAGgFQAFgGAJgDQAHgDAKgCQAKgCALgBQAMABAKACQAJACAJADQAHADAGAGQAGAFAEAGQAEAGADAIIAFAQQACAOABASQgBATgCAPQgHAUgFAJQgEAHgGAFQgGAEgHAEQgJAEgJABQgKADgMAAQgLAAgKgDgAgOgoQgGADgDAGQgDAGgCAJIAAASQABAaAEAIQADAGAGAEQAGADAIgBQAJABAGgDQAGgEADgGQAEgIABgaIgBgSQgBgJgDgGQgDgGgGgDQgGgDgJAAQgIAAgGADg");
	this.shape_4.setTransform(443.6,46.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXBYIAAiEIguAAIAAgrICLAAIAAArIguAAIAACEg");
	this.shape_5.setTransform(429.4,46.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAgBZIgGgVIg0AAIgHAVIgvAAIA4ixIAxAAIA4CxgAAPAbIgPg0IgQA0IAfAAg");
	this.shape_6.setTransform(415.3,46.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AARBYIgVg3IgQAAIAAA3IguAAIAAivIBHAAQAMgBARAFQAMAEAHAHQAIAIADAMQADAKABAOQgBAJgBAIQgBAJgEAFQgEAHgFAGQgFAGgHAEIAbA+gAgUgEIAYAAQAJAAAEgFQAEgFAAgKQAAgMgEgFQgEgFgJAAIgYAAg");
	this.shape_7.setTransform(400.7,46.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAgBZIgGgVIg0AAIgHAVIgvAAIA4ixIAxAAIA4CxgAAPAbIgPg0IgQA0IAfAAg");
	this.shape_8.setTransform(385.7,46.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAqBYIAAhhIgeBhIgcAAIgehhIAABhIgqAAIAAivIA9AAIAbBdIAchdIA9AAIAACvg");
	this.shape_9.setTransform(368.6,46.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglBXQgJgCgIgEQgIgDgHgFIAYgkQAIAGAMADQAOAEAMAAQAOAAAEgDQAEgDABgGQgBgJgGgDIgbgIQgNgDgKgFQgJgEgGgGQgGgFgDgJQgDgIAAgMQAAgOAFgLQAEgKAIgHQAJgHAMgEQANgDAOAAQANAAAVADQANADAMAGIgUAoQgUgIgSAAQgKAAgFACQgFACAAAHQAAAGAGADQAEACANAEQASAFAKAEQANAFAGAGQAIAEACAKQAEAJAAAOQAAAMgEAKQgEAKgIAHQgIAHgNAEQgNAEgSAAQgbgCgMgCg");
	this.shape_10.setTransform(349.7,46.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgBZIgGgVIg0AAIgHAVIgvAAIA4ixIAxAAIA4CxgAAPAbIgPg0IgQA0IAfAAg");
	this.shape_11.setTransform(335.6,46.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggBWQgHgCgGgEQgFgDgFgFQgEgEgDgFQgDgFgCgGQgEgMAAgSIAAhvIAwAAIAABqIABAPQABAFADAEQADADAEABQAFACAGAAIAMgBQAFgCADgDQADgDABgGIABgPIAAhqIAvAAIAABvQAAASgEAMQgCAGgDAFQgDAFgEAEQgEAFgGADQgGAEgGACQgVAEgNAAQgXgBgJgDg");
	this.shape_12.setTransform(320.3,46.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhGBYIAAivIA7AAQAMgBAXAEQAIACAGAEQAHACAFAGQAFAFAEAGQAEAHADAJQACAIABAMQACALAAAMIgCAZQgBALgCAJQgDAJgEAGQgDAHgGAFQgFAFgGADIgPAFQgWADgMAAgAgXAwIARAAIAKgBQAGgCAEgFQAEgEACgKQACgKAAgQQAAgPgCgJQgCgKgEgEQgEgEgGgBIgMgBIgPAAg");
	this.shape_13.setTransform(305.7,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(295.3,30.3,207.1,32.8);


(lib.txt1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggBWQgHgCgGgEQgFgDgFgFQgEgEgDgFQgDgFgCgHQgEgLAAgSIAAhvIAwAAIAABqIABAPQABAFADAEQADADAEABQAFACAGAAIAMgBQAFgCADgDQADgDABgGIABgPIAAhqIAvAAIAABvQAAASgEALQgCAHgDAFQgDAFgEAEQgEAFgGADQgGAEgGACQgVAEgNAAQgXgBgJgDg");
	this.shape.setTransform(595.7,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6BZIAAiwIB1AAIAAArIhGAAIAAAXIBCAAIAAApIhCAAIAAAbIBGAAIAAAqg");
	this.shape_1.setTransform(581.9,47.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARBZIgVg4IgQAAIAAA4IgvAAIAAiwIBIAAQALgBATAFQALAEAIAIQAGAHAEAMQAEAKAAAOQAAAKgCAHQgBAJgEAFQgEAIgEAFQgGAGgIAEIAbA/gAgUgEIAXAAQAKAAAEgEQAEgGAAgKQAAgMgEgFQgEgFgKAAIgXAAg");
	this.shape_2.setTransform(568.4,47.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARBZIgVg4IgQAAIAAA4IgvAAIAAiwIBIAAQAMgBASAFQALAEAHAIQAHAHAEAMQAEAKAAAOQAAAKgCAHQgBAJgEAFQgEAIgEAFQgGAGgIAEIAbA/gAgUgEIAXAAQAKAAAEgEQAEgGAAgKQAAgMgEgFQgEgFgKAAIgXAAg");
	this.shape_3.setTransform(554,47.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVBZQgJgCgIgEQgJgEgFgFQgGgEgFgHQgFgIgFgVQgDgPAAgTQAAgSADgOIAEgQQADgHADgHQAFgGAGgFQAFgGAJgDQAIgDAJgCQAKgCALAAQALAAALACQAJACAJADQAHADAGAGQAGAFAEAGQAEAHADAHIAFAQQADAOAAASQAAATgDAPQgHAVgFAIQgEAHgGAEQgGAFgHAEQgJAEgJACQgLACgLAAQgLAAgKgCgAgOgpQgGADgDAHQgDAFgBAKIgBASQAAAaAFAIQADAHAGADQAGACAIAAQAJAAAGgCQAGgDADgHQAEgIABgaIgBgSQgBgKgDgFQgDgHgGgDQgGgCgJAAQgIAAgGACg");
	this.shape_4.setTransform(538.9,47.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBZQgJgCgHgDIgOgIQgFgEgFgGQgEgFgDgIIgFgPQgDgLgBgbQAAgLAEgYIAEgQIAIgNIAKgLIAOgIQAIgDAKgBQAHgCAMAAQAPAAAMADQAOAEALAGIgZAoQgGgDgHgCQgHgCgIAAQgIAAgEACQgFABgDAFQgEAEgBAJQgCAKAAANQAAAPABAKQACAIAEAFQADAFAFADQAEABAJAAQAHAAAHgCQAHgCAHgFIAYAlQgMAHgMAEQgTADgMABQgKgBgIgBg");
	this.shape_5.setTransform(524.7,47.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAgB1IgGgWIg1AAIgFAWIgwAAIA4ixIAxAAIA4CxgAAPA3IgPg2IgQA2IAfAAgAgXhEIAXgvIAyAAIglAvg");
	this.shape_6.setTransform(507.9,45.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoBZIAAgqIASAAQAKAAADgDQAEgEAAgHIAAh4IAuAAIAAB7IgCAOIgDANQgEAJgIAGQgHAGgLACQgHACgNABg");
	this.shape_7.setTransform(495.6,47.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVBZQgJgCgJgEQgHgEgGgFQgGgEgEgHQgGgIgGgVQgDgPAAgTQAAgSADgOIAFgQQADgHAEgHQAEgGAGgFQAGgGAHgDQAJgDAJgCQALgCAKAAQAMAAAKACQAJACAIADQAJADAFAGQAGAFAEAGQAFAHACAHIAEAQQADAOAAASQAAATgDAPQgFAVgGAIQgEAHgGAEQgGAFgIAEQgIAEgJACQgKACgMAAQgKAAgLgCgAgOgpQgGADgDAHQgDAFgBAKIgBASQAAAaAFAIQADAHAGADQAGACAIAAQAJAAAGgCQAGgDADgHQAEgIABgaIgBgSQgBgKgDgFQgDgHgGgDQgGgCgJAAQgIAAgGACg");
	this.shape_8.setTransform(481.3,47.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAgB1IgGgWIg0AAIgGAWIgwAAIA4ixIAxAAIA4CxgAAPA3IgPg2IgPA2IAeAAgAg5hTQAFgIAEgGQAFgGAEgDQAGgEAFgCQAGgCAHAAQAHAAAIAFQAJAGACAAQAEgBAEgCQAEgDAEgGIAdARQgEAIgFAGQgEAFgFAEQgFAEgFACQgGABgHABQgHAAgIgGQgJgFgCAAQgEAAgEACQgDADgGAHg");
	this.shape_9.setTransform(465.9,45.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPB3QgHgCgHgDIAJgVQALAEAIAAQAEAAACgCQACgBABgFQAAgGgFgBQgDAAgIAAIgHgEIAEgTIgNgFIgMgGIgJgJIgHgKQgHgLgCgQQgDgMAAgSQAAgNAEgYIAEgQIAHgNIALgLIAOgIQAIgDAJgBQAJgCALAAQAPAAAMADQAOAEALAGIgaAoQgFgDgHgCQgHgCgIAAQgIAAgEACQgEABgEAFQgEAEgCAJQgCAKABAPQAAAPABAKQACAGAEAFQAEAFAEADQAFABAHAAQAJAAAGgCQAHgCAIgFIAXAlQgMAHgLADQgNAFgSAAIgCAIQAHgBAEABQAGABACACQAEADACAFQABAFABAHQgBAIgBAGQgDAFgDAEQgFADgGABQgHABgKAAQgGAAgJgBg");
	this.shape_10.setTransform(451.7,50.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgBZIgGgVIg0AAIgGAVIgwAAIA4ixIAxAAIA4CxgAAPAbIgPg0IgPA0IAeAAg");
	this.shape_11.setTransform(437.6,47.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcBZIg1hbIAABbIgtAAIAAiwIAxAAIAvBSIAAhSIAtAAIAACwg");
	this.shape_12.setTransform(422.1,47.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWBZIAAiwIAtAAIAACwg");
	this.shape_13.setTransform(411,47.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRBZQgJgBgHgEQgHgDgGgFQgGgFgEgFQgEgGgDgIIgEgPQgCgLgBgaQAAgNAEgaQACgIADgHQAEgIAEgFIALgKQAGgEAIgDIASgEQAJgBAKAAQAQAAAPADQAOAEAKAHIgZAoQgHgFgHgBQgJgCgJAAIgLABQgGACgEAEQgEAFgCAJQgCAKAAANIABAZQACAKADAFQADAFAGADQAFACAHAAQAHAAAEgCQAFgCACgEQAEgFABgPIAAgDIgdAAIAAgkIBIAAIAAAeQgBAZgCAKIgEAOQgDAFgEAFQgEAFgFADQgFADgHACIgQAEIgTABQgJgBgJgBg");
	this.shape_14.setTransform(400.8,47.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAgBZIgGgVIg0AAIgHAVIgvAAIA4ixIAxAAIA4CxgAAPAbIgPg0IgQA0IAfAAg");
	this.shape_15.setTransform(386,47.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAqBZIAAhiIgeBiIgcAAIgehiIAABiIgqAAIAAiwIA9AAIAbBdIAchdIA9AAIAACwg");
	this.shape_16.setTransform(368.8,47.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWBZIAAiwIAtAAIAACwg");
	this.shape_17.setTransform(356,47.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAgBZIgGgVIg1AAIgFAVIgwAAIA4ixIAxAAIA4CxgAAPAbIgPg0IgPA0IAeAAg");
	this.shape_18.setTransform(342.5,47.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AggBWQgHgCgGgEQgFgDgFgFQgEgEgDgFQgDgFgCgHQgEgLAAgSIAAhvIAwAAIAABqIABAPQABAFADAEQADADAEABQAFACAGAAIAMgBQAFgCADgDQADgDABgGIABgPIAAhqIAvAAIAABvQAAASgEALQgCAHgDAFQgDAFgEAEQgEAFgGADQgGAEgGACQgVAEgNAAQgXgBgJgDg");
	this.shape_19.setTransform(327.1,48);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AglBXQgJgCgIgEQgIgDgHgFIAYgkQAJAGAMADQANAEANAAQANAAAFgDQADgDAAgGQAAgJgGgDIgbgIQgNgDgJgFQgKgEgGgGQgHgFgCgJQgDgIAAgMQAAgOAEgLQAFgKAJgHQAIgHAMgEQANgDAOAAQANAAAVADQANADANAGIgVAoQgVgIgRAAQgKAAgFACQgFACAAAHQAAAGAGADQAEACAOAEQARAFALAEQALAFAHAGQAIAEACAKQAEAJAAAOQAAAMgEAKQgEAKgIAHQgIAHgNAEQgNAEgRAAQgbgCgNgCg");
	this.shape_20.setTransform(312.5,47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(303.4,31.7,301.6,32.8);


(lib.txt_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B48B2").s().p("AgQArQgHgCgFgDIAHgLIAJAEQAHACAFAAIAHgBIAFgCIADgEIABgFIgBgGIgEgEIgGgEIgHgDIgKgEIgHgEIgEgHQgCgDAAgGQAAgFACgFQACgFADgDQAEgDAFgBQAFgCAFAAQAIAAAGACQAGAAAFADIgGAMIgIgDIgLgBIgEABIgFACIgCAEIgBAEIABAFQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAQADACAHAFIANAEIAIAEQADADACAFQABADAAAHQAAAFgCAFQgBAFgEADQgEACgFACQgGACgHAAIgQgCg");
	this.shape.setTransform(64.7,9.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B48B2").s().p("AgGAsIAAhXIANAAIAABXg");
	this.shape_1.setTransform(59.2,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6B48B2").s().p("AAUAsIgFgRIgdAAIgGARIgNAAIAbhXIANAAIAcBXgAAMAPIgMgnIgLAnIAXAAg");
	this.shape_2.setTransform(53.3,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6B48B2").s().p("AAYAsIAAg9IgUA9IgIAAIgUg9IAAA9IgNAAIAAhXIASAAIATA/IAUg/IASAAIAABXg");
	this.shape_3.setTransform(44.3,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6B48B2").s().p("AAUAsIgFgRIgdAAIgGARIgNAAIAbhXIANAAIAcBXgAAMAPIgMgnIgLAnIAXAAg");
	this.shape_4.setTransform(32.6,9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6B48B2").s().p("AgcAsIAAhXIAcAAQAHAAAFACQAGABADACQADADABAEQACAFAAAFIgBAIIgCAGIgDAEIgFACIAGABIADAEIADAHIABAJQgBAGgBAFQgCAFgDADQgEACgFABQgFACgHAAgAgOAgIAPAAIAFgBIAFgBQACgCAAgDIABgGIgBgHQAAgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAgBIgFgCIgFgBIgPAAgAgOgFIAOAAIAFgBIAFgDQAAAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAIABgHIgBgFQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIgFgCIgFgBIgOAAg");
	this.shape_5.setTransform(24.8,9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6B48B2").s().p("AgFAsIAAhXIALAAIAABXg");
	this.shape_6.setTransform(19,9.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6B48B2").s().p("AAUAsIgFgRIgdAAIgGARIgNAAIAbhXIANAAIAbBXgAAMAPIgMgnIgLAnIAXAAg");
	this.shape_7.setTransform(13,9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B48B2").s().p("AgQArQgHgCgFgDIAHgLIAJAEQAHACAFAAIAHgBIAFgCIADgEIABgFIgBgGIgEgEIgGgEIgHgDIgKgEIgHgEIgEgHQgCgDAAgGQAAgFACgFQACgFADgDQAEgDAFgBQAFgCAFAAQAIAAAGACQAGAAAFADIgGAMIgIgDIgLgBIgEABIgFACIgCAEIgBAEIABAFQAAAAAAAAQAAABABAAQAAABAAAAQABABAAAAQADACAHAFIANAEIAIAEQADADACAFQABADAAAHQAAAFgCAFQgBAFgEADQgEACgFACQgGACgHAAIgQgCg");
	this.shape_8.setTransform(5.3,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.9,18.4);


(lib.smoke2_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.smk2();
	this.instance.parent = this;
	this.instance.setTransform(-31,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,0,728,90);


(lib.smoke1_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.smk1();
	this.instance.parent = this;
	this.instance.setTransform(-51,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,0,728,90);


(lib.shape_effect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9DF4E").s().p("AnDB8IAAj3IOHAAIAAD3g");
	this.shape.setTransform(119.4,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74.1,32.1,90.6,24.8);


(lib.roda_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.roda();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,47);


(lib.img1_mc_interno = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-336,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-336,0,386,90);


(lib.fordescrevendo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AkFEVQgPgDgGgHQgHgGgDgSQgNhKgCglQgEg/AYgiQALgOAWgRQASgMAbgSQAWgNANgFQAegMAiADQAhADAfAQIAOAHQAIADAHABQANABACACQAEAEgBAOQgBAugVBJQgQA2gQAcQgaAsgkARQgRAJgaAFQghAHgdAAQgWAAgTgEgAAkgaQgQgCgNgIQgMgJgFgNQgLgaAUgnQAKgWAMgOQASgSAkgOIA7gZQAMgHAUgOIAfgWQAogYAgADQARABALAKQAMANgBAWQAAAIgCALIgEATIgFAYQgEAOgFAJIgQAYQgHASgFAIQgJAPgTAKQgOAIgXAHQguAOg1ANQgdAHgUAAIgLgBg");
	var mask_graphics_2 = new cjs.Graphics().p("Ai0GTQgPgHgVgVQgRgRgIgMQgHgKgHgTQgLgggCgjQgJgDgFgFQgHgGgDgSQgNhKgCglQgEg/AYgiQALgMAWgRQASgOAbgSQAWgNANgFQAegMAiADQAhADAfAQIAOAHQAIADAHABQANABACACQAEAEgBAOQgBAugVBJIgEAKIAYAIIArAUIAVAHQAMAEAHAEQAOAIARAUQAZAcAKAVQAJAUADAWQAEAYgEASQgIApgpAcQggAWgxAHQgXAEguABIhQACIgIAAQgjAAgSgIgAAkgzQgQgCgNgIIgDgCQgJADgHAAQgPABgXgJQgmgLgRgPQgfgbgHg+QgHg7AOgwQASg6AqgeQAngdA5gCQAjgCAbAKQAcALATAbQASAbABAeQAAATAFAGQAEAEAHADIAMAEIAVgOQAogYAgADQARABALAKQAMANgBAWQAAAIgCALIgEATIgFAYQgEAOgFAJIgQAYQgHASgFAIQgJAPgTAKQgOAIgXAHQguAOg1ANQgdAHgUAAIgLgBg");
	var mask_graphics_3 = new cjs.Graphics().p("AjRGaQgOgHgVgVQgSgQgIgMQgGgLgIgTQgLgfgCgjQgJgDgFgFQgGgHgDgRQgNhKgCglQgEhAAYghQAKgPAWgOQASgOAcgSQAVgOAOgFQAdgMAjAEQAgADAfAPIAOAHQAJAEAGAAQANABADACQAGAFgBANQgDAvgWBJIgDAKIAYAIIAiAPQBGgnA5g4QAUgTAJgHQARgMAQgDQAQgDARAEQAQADAMAMQAMALAFAQQAGAQgDARQgBARgOAYQgXAqgiAkQgVAVgHAIIgLAOQgHAJgGAFQgIAHgNAHIACAIQADAYgEATQgIAogoAdQggAVgxAIQgWADgvABIhQACIgJAAQgjAAgSgIgAAHgrQgOgCgMgIIgEgDQgLAEgGAAQgPAAgXgIQgmgMgRgPQgfgagIg/QgGg6AOgxQARg5AqgfQAngcA7gDQAhgBAbAJIANAHQBKghBoADQArACAXAHQARAFAFAHQAHAIgCAOQgEAQgNAJQgFAEgKADIgRAFIgVAKQgOAIgIACIgiAHQgLADgOAIQgaANgUAVIAIADIAVgOQAngZAgADQASACAKAKQANAMgBAXQAAAIgDALIgEASIgFAYQgDAOgFAJIgRAYQgHASgFAJQgJAPgTAKQgNAHgYAHQguAOg1ANQgcAIgUAAIgMgBg");
	var mask_graphics_4 = new cjs.Graphics().p("AlBGbQgOgHgVgVQgSgRgIgMQgGgKgIgTQgLgggCgjQgJgDgFgFQgGgGgDgSQgNhKgCglQgEg/AYgiQAKgOAWgPQASgOAcgSQAVgNAOgFQAdgMAjADQAgADAfAQIAOAHQAJADAGABQANABADACQAGAEgBAOQgDAugWBJIgDAKIAYAIIAkAQQBGgoA3g3QAUgTAJgHQARgNAQgCIAGgBIAGgPIAGgIIAOgPIAFgFIANgRIASgSIALgPIAOgRQALgNAHgGQATgOAcABQAOABAEAHQAFAHgEAJIgJAOQgJAMgOAVIgFAJQADAEAAAGQgBAGgGAJIgLARQgHAKgDAIQgDAHgEASQgEALgHAMQgFAJgHAGIgDACIgBANQgBARgOAZQgXAqgiAjQgVAVgHAIIgLAPQgHAJgGAFQgHAGgNAHIABAJQADAYgEASQgIApgmAcQggAWgxAHQgYAEgvABIhQACIgIAAQgkAAgSgIgAhngrQgQgCgMgIIgEgCQgLADgGAAQgPABgXgJQgmgLgRgPQgfgbgIg+QgGg7AOgwQARg6AqgeQAngdA7gCQAjgCAbAKIANAGQBJghBnADIAdACIAJgBQAcgEApAJIBEARQAQADAiADQAhADARADQAPADAHAHQAEAEAEAMIAIAVQAHAVgIAIQgGAHgPgBQgLgBgWgFQgVgFgLgBQgJgBgPABIgZAAIgjgFIhKgOQgVgDgIAAIgCAAIgOAIQgOAHgIADIgiAHQgLACgOAIQgaANgTAVIAHADIAVgOQAngYAgADQASABAKAKQANANgBAWQAAAIgDALIgEATIgFAYQgDAOgFAJIgRAYQgHASgFAIQgJAPgTAKQgNAIgYAHQguAOgzANQgcAHgUAAIgMgBg");
	var mask_graphics_5 = new cjs.Graphics().p("AnDGbQgPgHgVgVQgRgRgIgMQgHgKgHgTQgLgggCgjQgKgDgEgFQgHgGgDgSQgNhKgCglQgEg/AYgiQALgOAWgPQASgOAbgSQAWgNANgFQAegMAiADQAhADAfAQIAOAHQAIADAHABQANABACACQAGAEgBAOQgCAugWBJIgEAKIAYAIIAkAQQBHgoA5g3QATgTAJgHQARgNARgCIAGgBIAGgPIAFgIIAPgPIAFgFIALgRIASgSIALgPIAMgQQAAgIAIgIIAagbQAPgQAHgNIAJgQQAJgRAbgcQAJgJAGgDQALgFAOAFIAWAMQAJAFADAFQAFAIgFAOQgKAegYATIgQAMQgJAHgFAGQgGAMgEAFQgIAKgOAAIgDAFQgJAMgNAVIgGAJQADAEAAAGQAAAGgGAJIgMARQgHAKgDAIQgDAHgEASQgDALgIAMQgFAJgGAGIgEACIAAANQgCARgNAZQgVAqgjAjQgVAVgGAIIgMAPQgHAJgGAFQgHAGgNAHIABAJQAEAYgEASQgIApgpAcQggAWgxAHQgXAEgwABIhQACIgIAAQgjAAgSgIgAjpgrQgQgCgNgIIgDgCQgLADgHAAQgPABgXgJQgmgLgRgPQgfgbgHg+QgHg7AOgwQASg6AqgeQAngdA7gCQAjgCAbAKIAMAGQBLghBlADIAeACIAJgBQAcgEAoAJIBEARQARADAhADQAiADAQADIAIACIALgBQARAAAiAFIAvAHIBFAOQApAIAdACQAYABAKAIQAHAHAEAQQAIAngPAgQgGALgHAEQgGADgNAAQgmgBgtgNQgZgIg3gVQgUgIgLgBQgUAAgKgEQgHgDgFgIQgDgEgCgFIgFAAQgLgBgVgFQgWgFgKgBQgKgBgPABIgYAAIgkgFIhJgOQgWgDgIAAIgCAAIgOAIQgNAHgJADIgfAHQgMACgOAIQgZANgUAVIAHADIAVgOQAogYAgADQAPABALAKQAMANgBAWQAAAIgCALIgEATIgFAYQgEAOgFAJIgQAYQgFASgFAIQgJAPgTAKQgOAIgXAHQguAOg1ANQgdAHgUAAIgLgBg");
	var mask_graphics_6 = new cjs.Graphics().p("AoqGbQgPgHgVgVQgRgRgIgMQgHgKgHgTQgLgggCgjQgJgDgFgFQgHgGgDgSQgNhKgCglQgEg/AYgiQALgOAWgPQASgOAbgSQAWgNANgFQAegMAiADQAhADAfAQIAOAHQAIADAHABQANABACACQAGAEgBAOQgCAugWBJIgDAKIAXAIIAkAQQBHgoA5g3QATgTAJgHQARgNARgCIAGgBIAGgPIAFgIIAPgPIAFgFIANgRIASgSIALgPIAMgQQABgIAHgIIABgBIABgJQACgKAHgLIANgVIANgTQAHgJAQgLIATgNIAMgNIAGgGIABgBQAIgKAFgFQAHgFAQgIQAQgHAGgGIASgQIADgDIgCAAQgKgBgPABIgYAAIgkgFIhHgOQgWgDgIAAIgBAAIgPAIQgNAHgJADIghAHQgMACgOAIQgZANgUAVIAIADIAUgOQAogYAgADQARABALAKQAMANgBAWQAAAIgCALIgEATIgFAYQgEAOgFAJIgQAYQgHASgFAIQgJAPgTAKQgOAIgXAHQguAOg1ANQgmAJgWgDQgQgCgNgIIgDgCQgLADgHAAQgPABgXgJQgmgLgRgPQgfgbgHg+QgHg7AOgwQASg6AqgeQAngdA7gCQAjgCAbAKIANAGQBKghBnADIAeACIAJgBQAcgEAmAJIBEARQARADAhADQAiADAQADIAIACIALgBQARAAAiAFIAvAHIBFAOQApAIAdACQAPAAAJADQAEgDAJgBQAbgEAqADIBFAFQARAAAIAEQAKAFANAWIAVAnQAKAUgBAKQgCATgVAIQgNAFgYAAQgyABhAgBQghAAgVgDQgLgCgFgEIgGgFQgkgBgsgNQgZgIg3gVQgUgIgLgBQgQAAgKgDQgGAIgQAKIhKAuIgDABIgBABQgKAegYATIgQAMQgJAHgFAGQgGAMgEAFQgIAKgOAAIgDAFQgJAMgLAVIgFAJQACAEAAAGQAAAGgGAJIgMARQgHAKgDAIQgDAHgEASQgDALgIAMQgFAJgGAGIgDACIgBANQgCARgNAZQgXAqgjAjQgVAVgGAIIgMAPQgHAJgGAFQgHAGgNAHIABAJQAEAYgEASQgIApgpAcQggAWgxAHQgXAEgwABIhQACIgIAAQgjAAgSgIg");
	var mask_graphics_7 = new cjs.Graphics().p("ApaGbQgPgHgVgVQgRgRgIgMQgHgKgHgTQgLgggCgjQgJgDgFgFQgHgGgDgSQgNhKgCglQgEg/AYgiQALgOAWgPQASgOAbgSQAWgNANgFQAegMAiADQAhADAfAQIAOAHQAIADAHABQANABACACQAGAEgBAOQgCAugWBJIgDAKIAXAIIAkAQQBHgoA5g3QATgTAJgHQARgNARgCIAGgBIAGgPIAFgIQgTACgJAEIgPAJQgIADgDACIgHAGQgFAEgIABQgMADgLgDQgIgCgFgDQgJgIACgPQAEgUAUgRIAFgEIg4APQgmAJgWgDQgQgCgNgIIgDgCQgLADgHAAQgPABgXgJQgmgLgRgPQgfgbgHg+QgHg7AOgwQASg6AqgeQAngdA7gCQAjgCAbAKIANAGQBKghBnADIAeACIAJgBQAcgEAoAJIBCARQARADAhADQAiADAQADIAIACIALgBQARAAAiAFIAvAHIBFAOQApAIAdACQAPAAAJADQAEgDAJgBQAbgEAqADIBFAFIANABQAFgDAJAAIA5gFQAXgCAKAEQAKAEALAKIARASIALALQAJALgBAOQgCAPgLAIQgEAEgMAFIg9AaQgOAHgIgFIgHAEQgNAFgYAAQgyABhAgBQghAAgVgDQgLgCgFgEIgGgFQgkgBgsgNQgZgIg3gVQgUgIgLgBQgQAAgKgDQgGAIgQAKIhKAuIgDABIgBABQgKAegYATIgQAMQgJAHgFAGQgEAMgEAFQgIAKgOAAIgDAFQgJAMgNAVIgFAJQACAEAAAGQAAAGgGAJIgMARQgHAKgDAIQgDAHgEASQgDALgIAMQgFAJgGAGIgDACIgBANQgCARgNAZQgXAqgjAjQgVAVgGAIIgMAPQgHAJgGAFQgHAGgNAHIABAJQAEAYgEASQgIApgpAcQggAWgxAHQgXAEgwABIhQACIgIAAQgjAAgSgIgAiXkpQARABALAKQAMANgBAWQAAAIgCALIgEATIgFAYQgEAOgFAJIgQAYQgHASgFAIQgGALgMAIIAQgEQATgFAIgBIARgEQAIgDAEABQABgHAHgIIABgBIABgJQACgKAHgLIANgVIANgTQAHgJASgLIATgNIAMgNIAFgGIAAgBQAIgKAFgFQAHgFAQgIQAQgHAGgGIASgQIADgDIgCAAQgKgBgPABIgYAAIgigFIhJgOQgWgDgIAAIgBAAIgPAIQgNAHgJADIghAHQgMACgOAIQgZANgUAVIAIADIAUgOQAkgWAdAAIAHABg");
	var mask_graphics_8 = new cjs.Graphics().p("ApsGbQgPgHgVgVQgRgRgIgMQgHgKgHgTQgLgggCgjQgKgDgEgFQgHgGgDgSQgNhKgCglQgEg/AYgiQALgOAWgPQASgOAbgSQAWgNANgFQAegMAiADQAhADAfAQIAOAHQAIADAHABQANABACACQAGAEgBAOQgCAugWBJIgEAKIAYAIIAkAQQBHgoA5g3QATgTAJgHQARgNARgCIAGgBIAGgPIAFgIQgTACgJAEIgPAJQgIADgDACIgHAGQgFAEgIABQgMADgLgDQgIgCgFgDQgJgIACgPQAEgUAUgRIAFgEIg4APQgmAJgWgDQgQgCgNgIIgDgCQgLADgHAAQgPABgXgJQgmgLgRgPQgfgbgHg+QgHg7AOgwQASg6AqgeQAngdA7gCQAjgCAbAKIAMAGQBLghBnADIAeACIAJgBQAcgEAoAJIBCARQARADAhADQAiADAQADIAIACIALgBQARAAAiAFIAvAHIBFAOQApAIAdACQAOAAAJADQAFgDAJgBQAbgEAqADIBFAFIANABQAEgDAKAAIA5gFQAXgCAKAEIABAAIAJgDIAZgJIAKgDIALgEQAMgFAIAIQAFAEABAJIAAAOQAGABADAFQADAFgBAGQgCAMgMAFIgDACIAAACQACAPgLAPQgGAKgHABQgEAAgEgBIgCACQgEAEgMAFIg9AaQgPAHgIgFIgGAEQgNAFgYAAQgyABhAgBQghAAgVgDQgLgCgFgEIgGgFQgkgBgsgNQgZgIg3gVQgUgIgLgBQgQAAgKgDQgGAIgQAKIhKAuIgEABIAAABQgKAegYATIgPAMQgIAHgFAGIgGALIASABIApAFQAIABAEABQAGADADAFIACAOIACAOQgCAMgNAFQgIAEgQABIgzACQgXABgKAEIgNAEIgDABIgFAKIgMARQgHAKgDAIQgDAHgEASQgDALgIAMQgFAJgGAGIgEACIAAANQgCARgNAZQgXAqgjAjQgVAVgGAIIgMAPQgHAJgGAFQgHAGgNAHIABAJQAEAYgEASQgIApgpAcQggAWgxAHQgXAEgwABIhQACIgIAAQgjAAgSgIgAipkpQARABALAKQAMANgBAWQAAAIgCALIgEATIgFAYQgEAOgFAJIgQAYQgHASgFAIQgHALgLAIIAQgEQATgFAIgBIARgEQAIgDAEABQABgHAHgIIABgBIABgJQACgKAHgLIANgVIANgTQAHgJASgLIASgNIANgNIAGgGIABgBQAIgKAFgFQAFgFAQgIQAQgHAGgGIASgQIADgDIgCAAQgKgBgPABIgYAAIgigFIhJgOQgWgDgIAAIgCAAIgOAIQgNAHgJADIghAHQgMACgOAIQgZANgUAVIAHADIAVgOQAjgWAeAAIAHABg");
	var mask_graphics_9 = new cjs.Graphics().p("ApsGbQgPgHgVgVQgRgRgIgMQgHgKgHgTQgLgggCgjQgKgDgEgFQgHgGgDgSQgNhKgCglQgEg/AYgiQALgOAWgPQASgOAbgSQAWgNANgFQAegMAiADQAhADAfAQIAOAHQAIADAHABQANABACACQAGAEgBAOQgCAugWBJIgEAKIAYAIIAkAQQBHgoA5g3QATgTAJgHQARgNARgCIAGgBIAGgPIAFgIQgTACgJAEIgPAJQgIADgDACIgHAGQgFAEgIABQgMADgLgDQgIgCgFgDQgJgIACgPQAEgUAUgRIAFgEIg4APQgmAJgWgDQgQgCgNgIIgDgCQgLADgHAAQgPABgXgJQgmgLgRgPQgfgbgHg+QgHg7AOgwQASg6AqgeQAngdA7gCQAjgCAbAKIAMAGQBLghBnADIAeACIAJgBQAcgEAoAJIBCARQARADAhADQAiADAQADIAIACIALgBQARAAAiAFIAvAHIBFAOQApAIAdACQAOAAAJADQAFgDAJgBQAbgEAqADIBFAFIANABQAEgDAKAAIA5gFQAXgCAKAEIABAAIAJgDIAZgJIAKgDIALgEQAMgFAIAIQAFAEABAJIAAAOQAGABADAFQADAFgBAGQgCAMgMAFIgDACIAAACQACAPgLAPQgGAKgHABQgEAAgEgBIgCACQgEAEgMAFIg9AaQgPAHgIgFIgGAEQgNAFgYAAQgyABhAgBQghAAgVgDQgLgCgFgEIgGgFQgkgBgsgNQgZgIg3gVQgUgIgLgBQgQAAgKgDQgGAIgQAKIhKAuIgEABIAAABQgKAegYATIgPAMQgIAHgFAGIgGALIASABIApAFQAIABAEABIAFADIAFAAQAPgCARgEIAUgFIAJgIQAEgCAEAAQAEAAAHADQAPAGACAIQACAGgEAGQgFAJgIgBQgBADgGAFIgMAIQgJAGgJABIgPACIgOABIgSABQgDAEgHADQgIAEgQABIgzACQgXABgKAEIgNAEIgDABIgFAKIgMARQgHAKgDAIQgDAHgEASQgDALgIAMQgFAJgGAGIgEACIAAANQgCARgNAZQgXAqgjAjQgVAVgGAIIgMAPQgHAJgGAFQgHAGgNAHIABAJQAEAYgEASQgIApgpAcQggAWgxAHQgXAEgwABIhQACIgIAAQgjAAgSgIgAipkpQARABALAKQAMANgBAWQAAAIgCALIgEATIgFAYQgEAOgFAJIgQAYQgHASgFAIQgHALgLAIIAQgEQATgFAIgBIARgEQAIgDAEABQABgHAHgIIABgBIABgJQACgKAHgLIANgVIANgTQAHgJASgLIASgNIANgNIAGgGIABgBQAIgKAFgFQAFgFAQgIQAQgHAGgGIASgQIADgDIgCAAQgKgBgPABIgYAAIgigFIhJgOQgWgDgIAAIgCAAIgOAIQgNAHgJADIghAHQgMACgOAIQgZANgUAVIAHADIAVgOQAjgWAeAAIAHABgAi1FGQgHAAgFgHQgNgRAMggQAHgRAJgOQALgQATgUIAWgWQANgMANgFQAKgEAQgCIAbgDIAegFQARgDALACQAKABAFAFQAGAGgCAKQgBAIgGAHQgHAHgUAJQggALggATQgMAGgHAHQgLAJgQAXQgQASgfAXQgLAIgHAAIgCAAg");
	var mask_graphics_10 = new cjs.Graphics().p("ApsGbQgPgHgVgVQgRgRgIgMQgHgKgHgTQgLgggCgjQgKgDgEgFQgHgGgDgSQgNhKgCglQgEg/AYgiQALgOAWgPQASgOAbgSQAWgNANgFQAegMAiADQAhADAfAQIAOAHQAIADAHABQANABACACQAGAEgBAOQgCAugWBJIgEAKIAYAIIAkAQQBHgoA5g3QATgTAJgHQARgNARgCIAGgBIAGgPIAFgIQgTACgJAEIgPAJQgIADgDACIgHAGQgFAEgIABQgMADgLgDQgIgCgFgDQgJgIACgPQAEgUAUgRIAFgEIg4APQgmAJgWgDQgQgCgNgIIgDgCQgLADgHAAQgPABgXgJQgmgLgRgPQgfgbgHg+QgHg7AOgwQASg6AqgeQAngdA7gCQAjgCAbAKIAMAGQBLghBnADIAeACIAJgBQAcgEAoAJIBCARQARADAhADQAiADAQADIAIACIALgBQARAAAiAFIAvAHIBFAOQApAIAdACQAOAAAJADQAFgDAJgBQAbgEAqADIBFAFIANABQAEgDAKAAIA5gFQAXgCAKAEIABAAIAJgDIAZgJIAKgDIALgEQAMgFAIAIQAFAEABAJIAAAOQAGABADAFQADAFgBAGQgCAMgMAFIgDACIAAACQACAPgLAPQgGAKgHABQgEAAgEgBIgCACQgEAEgMAFIg9AaQgPAHgIgFIgGAEQgNAFgYAAQgyABhAgBQghAAgVgDQgLgCgFgEIgGgFQgkgBgsgNQgZgIg3gVQgUgIgLgBQgQAAgKgDQgGAIgQAKIhKAuIgEABIAAABQgKAegYATIgPAMQgIAHgFAGIgGALIASABIApAFQAIABAEABIAFADIAFAAQAPgCARgEIAUgFIABAAIAAgBQgCgFACgFQACgEAIgHQAEgFAAgEIABgDIgDgGQgJgKAAgWQAAgIADgFQAGgLANACQAKAAAKAIQAHAFADAFIAHAMIAHAQQAGAOgBAQIgCAKIgEAJIgLAPQgKAJgJAAIgBAAQgDACgFAAQgBADgGAFIgMAIQgJAGgJABIgPACIgOABIgSABQgDAEgHADQgIAEgQABIgzACQgXABgKAEIgNAEIgDABIgFAKIgMARQgHAKgDAIQgDAHgEASQgDALgIAMQgFAJgGAGIgEACIAAANQgCARgNAZQgXAqgjAjQgVAVgGAIIgMAPQgHAJgGAFQgHAGgNAHIABAJQAEAYgEASQgIApgpAcQggAWgxAHQgXAEgwABIhQACIgIAAQgjAAgSgIgAipkpQARABALAKQAMANgBAWQAAAIgCALIgEATIgFAYQgEAOgFAJIgQAYQgHASgFAIQgHALgLAIIAQgEQATgFAIgBIARgEQAIgDAEABQABgHAHgIIABgBIABgJQACgKAHgLIANgVIANgTQAHgJASgLIASgNIANgNIAGgGIABgBQAIgKAFgFQAFgFAQgIQAQgHAGgGIASgQIADgDIgCAAQgKgBgPABIgYAAIgigFIhJgOQgWgDgIAAIgCAAIgOAIQgNAHgJADIghAHQgMACgOAIQgZANgUAVIAHADIAVgOQAjgWAeAAIAHABgAi1FGQgHAAgFgHQgNgRAMggQAHgRAJgOQALgQATgUIAWgWIAKgIIAAgFQAAgSABgEQAEgUARgSIAeggIAfgnQALgLAIgEQANgFAJAFIAOAKQAGAFAPAJQAOAIADAKQAEAMgIAOQgDAHgNAPQgSATgFAQIgBADQAGABAEAEQAGAGgCAKQgBAIgGAHQgHAHgUAJQggALggATQgMAGgHAHQgLAJgQAXQgQASgfAXQgLAIgHAAIgCAAg");
	var mask_graphics_11 = new cjs.Graphics().p("ApsGbQgPgHgVgVQgRgRgIgMQgHgKgHgTQgLgggCgjQgKgDgEgFQgHgGgDgSQgNhKgCglQgEg/AYgiQALgOAWgPQASgOAbgSQAWgNANgFQAegMAiADQAhADAfAQIAOAHQAIADAHABQANABACACQAGAEgBAOQgCAugWBJIgEAKIAYAIIAkAQQBHgoA5g3QATgTAJgHQARgNARgCIAGgBIAGgPIAFgIQgTACgJAEIgPAJQgIADgDACIgHAGQgFAEgIABQgMADgLgDQgIgCgFgDQgJgIACgPQAEgUAUgRIAFgEIg4APQgmAJgWgDQgQgCgNgIIgDgCQgLADgHAAQgPABgXgJQgmgLgRgPQgfgbgHg+QgHg7AOgwQASg6AqgeQAngdA7gCQAjgCAbAKIAMAGQBLghBnADIAeACIAJgBQAcgEAoAJIBCARQARADAhADQAiADAQADIAIACIALgBQARAAAiAFIAvAHIBFAOQApAIAdACQAOAAAJADQAFgDAJgBQAbgEAqADIBFAFIANABQAEgDAKAAIA5gFQAXgCAKAEIABAAIAJgDIAZgJIAKgDIALgEQAMgFAIAIQAFAEABAJIAAAOQAGABADAFQADAFgBAGQgCAMgMAFIgDACIAAACQACAPgLAPQgGAKgHABQgEAAgEgBIgCACQgEAEgMAFIg9AaQgPAHgIgFIgGAEQgNAFgYAAQgyABhAgBQghAAgVgDQgLgCgFgEIgGgFQgkgBgsgNQgZgIg3gVQgUgIgLgBQgQAAgKgDQgGAIgQAKIhKAuIgEABIAAABQgKAegYATIgPAMQgIAHgFAGIgGALIASABIApAFIAGABQAAgVAIgVQAFgOAGgGIAKgKQAPgNAVgOQAHgFAFgBQAGgBAFACIADACIADABQAKAAAKAIQAHAFADAFIAHAMIAHAQQAGAOgBAQIgCAKIgEAJIgLAPQgKAJgJAAIgBAAQgDACgFAAQgBADgGAFIgMAIQgJAGgJABIgPACIgOABIgSABQgDAEgHADQgIAEgQABIgzACQgXABgKAEIgNAEIgDABIgFAKIgMARQgHAKgDAIQgDAHgEASQgDALgIAMQgFAJgGAGIgEACIAAANQgCARgNAZQgXAqgjAjQgVAVgGAIIgMAPQgHAJgGAFQgHAGgNAHIABAJQAEAYgEASQgIApgpAcQggAWgxAHQgXAEgwABIhQACIgIAAQgjAAgSgIgAipkpQARABALAKQAMANgBAWQAAAIgCALIgEATIgFAYQgEAOgFAJIgQAYQgHASgFAIQgHALgLAIIAQgEQATgFAIgBIARgEQAIgDAEABQABgHAHgIIABgBIABgJQACgKAHgLIANgVIANgTQAHgJASgLIASgNIANgNIAGgGIABgBQAIgKAFgFQAFgFAQgIQAQgHAGgGIASgQIADgDIgCAAQgKgBgPABIgYAAIgigFIhJgOQgWgDgIAAIgCAAIgOAIQgNAHgJADIghAHQgMACgOAIQgZANgUAVIAHADIAVgOQAjgWAeAAIAHABgAB6iiQgEAHgBANIAIgIQAEgFAAgEIABgDIgDgGIgBgBIgEAHgAi1FGQgHAAgFgHQgNgRAMggQAHgRAJgOQALgQATgUIAWgWIAKgIIAAgFQAAgSABgEQAEgUARgSIAeggIAfgnQALgLAIgEQAGgDAGAAIAGgIIAKgJQAWgOAzgIQAUgDAKAAQAKAAAGACQAJAEADAHQADAFABAJIAFANQAEAMgLALQgGAGgQAHIglAMQgJAEgDACIgIALQgEAEgGABIgCADQgDAHgNAPQgSATgFAQIgBADQAGABAEAEQAGAGgCAKQgBAIgGAHQgHAHgUAJQggALggATQgMAGgHAHQgLAJgQAXQgQASgfAXQgLAIgHAAIgCAAg");
	var mask_graphics_12 = new cjs.Graphics().p("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");
	var mask_graphics_13 = new cjs.Graphics().p("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");
	var mask_graphics_14 = new cjs.Graphics().p("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");
	var mask_graphics_15 = new cjs.Graphics().p("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");
	var mask_graphics_16 = new cjs.Graphics().p("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");
	var mask_graphics_17 = new cjs.Graphics().p("ApsGbQgPgHgVgVQgRgRgIgMQgHgKgHgTQgLgggCgjQgKgDgEgFQgHgGgDgSQgNhKgCglQgEg/AYgiQALgOAWgPQASgOAbgSQAWgNANgFQAegMAiADQAhADAfAQIAOAHQAIADAHABQANABACACQAGAEgBAOQgCAugWBJIgEAKIAYAIIAkAQQBHgoA5g3QATgTAJgHQARgNARgCIAGgBIAGgPIAFgIQgTACgJAEIgPAJQgIADgDACIgHAGQgFAEgIABQgMADgLgDQgIgCgFgDQgJgIACgPQAEgUAUgRIAFgEIg4APQgmAJgWgDQgQgCgNgIIgDgCQgLADgHAAQgPABgXgJQgmgLgRgPQgfgbgHg+QgHg7AOgwQASg6AqgeQAngdA7gCQAjgCAbAKIAMAGQBLghBnADIAeACIAJgBQAcgEAoAJIBCARQARADAhADQAiADAQADIAIACIALgBQARAAAiAFIAvAHIBFAOQApAIAdACQAOAAAJADQAFgDAJgBQAbgEAqADIBFAFIANABQAEgDAKAAIA5gFQAXgCAKAEIABAAIAJgDIAZgJIAKgDIALgEQAMgFAIAIQAFAEABAJIAAAOQAGABADAFQADAFgBAGQgCAMgMAFIgDACIAAACQACAPgLAPQgGAKgHABQgEAAgEgBIgCACQgEAEgMAFIg9AaQgPAHgIgFIgGAEQgNAFgYAAQgyABhAgBQghAAgVgDQgLgCgFgEIgGgFQgkgBgsgNQgZgIg3gVQgUgIgLgBQgQAAgKgDQgGAIgQAKIhKAuIgEABIAAABQgKAegYATIgPAMQgIAHgFAGIgGALIASABIApAFIAGABQAAgVAIgVQAFgOAGgGIAKgKQAPgNAVgOQAHgFAFgBQAGgBAFACIADACIADABQAKAAAKAIQAHAFADAFIAHAMIAHAQQAGAOgBAQIgCAKIgEAJIgLAPQgKAJgJAAIgBAAQgDACgFAAQgBADgGAFIgJAGQAMAJADAKIADAIIAAAJQgBAGgHAIIgGAFIgJACQgIAAgDgBQgJgIgFgCIgHgCQgFgCgEgFIgGgGIgHgDIgKgFIgHgEIgCABQgIAEgQABIgzACQgXABgKAEIgNAEIgDABIgFAKIgMARQgHAKgDAIQgDAHgEASQgDALgIAMQgFAJgGAGIgEACIAAANQgCARgNAZQgXAqgjAjQgVAVgGAIIgMAPQgHAJgGAFQgHAGgNAHIABAJQAEAYgEASQgIApgpAcQggAWgxAHQgXAEgwABIhQACIgIAAQgjAAgSgIgAipkpQARABALAKQAMANgBAWQAAAIgCALIgEATIgFAYQgEAOgFAJIgQAYQgHASgFAIQgHALgLAIIAQgEQATgFAIgBIARgEQAIgDAEABQABgHAHgIIABgBIABgJQACgKAHgLIANgVIANgTQAHgJASgLIASgNIANgNIAGgGIABgBQAIgKAFgFQAFgFAQgIQAQgHAGgGIASgQIADgDIgCAAQgKgBgPABIgYAAIgigFIhJgOQgWgDgIAAIgCAAIgOAIQgNAHgJADIghAHQgMACgOAIQgZANgUAVIAHADIAVgOQAjgWAeAAIAHABgAB6iiQgEAHgBANIAIgIQAEgFAAgEIABgDIgDgGIgBgBIgEAHgAgEFiQgogEgdgdQgZgZgFgiIgLAPQgQASgfAXQgNAKgHgCQgHAAgFgHQgNgRAMggQAHgRAJgOQALgQATgUIAWgWIAKgIIAAgFQAAgSABgEQAEgUARgSIAeggIAfgnQALgLAIgEQAGgDAGAAIAGgIIAKgJQAWgOAzgIQAUgDAKAAQAKAAAGACQAJAEADAHQADAFABAJIAFANIAAABQAEgKAGgHQAEgDAJgHIAUgMQAQgHAJAEQAHADAEAJQAGAJADAJIAFAaQACALAGAPIACAFQAXgMAOgSIAPgVQATgXAdgOQAdgOAfAAQAIABAEACQAEgCAEAAQAJAAALAOQAMAQACAGQAHANgDALIgDAMIABAKQAAADgCALQgDAMgBAXIgCAPIACAQQABAKgDAGQgCAEgFADQABAGgDAJQgSAsgWAdQgHAIgGAEQgLAGgVgCIg7gDQgKAAgGgCQgJgEgBgIQAAgFAGgKIAUgXQAMgOAGgKQALgQALgbQAEgKAEgEQADgDAFgBIABgEIAKgZQAEgLABgHIABgIIgRAJQgTAJgIAFQgNAJgPASQgQAUgJAKQgIAIgEABIgFAAIgFANIAAAEQgCAGgGAKIgMAWQgYApgPASQgLANgHAFQgFAFgKAEIgPAHQgUALgWATQgJAIgGACIAAAAIgFAEQgIAHgSAEQgWAEgaACIgRABIgKgBgACTAoQgGAGgQAHIglAMQgJAEgDACIgIALQgEAEgGABIgCADQgDAHgNAPQgSATgFAQIgBADQAGABAEAEQAGAGgCAKQgBAIgGAHQgFAFgOAHQAFAHARAPQAUARAMACIAHAAIANgIQAkgSAagzIARggIAAAAIABgIIACgIQABgHgCgKQgGgggCgRIAAgNIgEAFg");
	var mask_graphics_18 = new cjs.Graphics().p("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");
	var mask_graphics_19 = new cjs.Graphics().p("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");
	var mask_graphics_20 = new cjs.Graphics().p("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");
	var mask_graphics_21 = new cjs.Graphics().p("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");
	var mask_graphics_22 = new cjs.Graphics().p("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");
	var mask_graphics_23 = new cjs.Graphics().p("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");
	var mask_graphics_24 = new cjs.Graphics().p("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ACgPgBQgbgDgVgPQgWgQgIgXIgBgDQgPAggRAXQgHAIgGAEIgBAAQAAAGgFALIgRAgIgIAOQgFAJgLAKQgLAJgJACQgHADgQAAIg4AAQgKAAgFgEQgHgEgBgLQAAgKAGgMIANgTIAPgaQAKgPAIgJIAAgBQABgFAFgIIAUgXQAMgOAGgKQALgQALgbQAEgKAEgEQADgDAFgBIABgEIAKgZQAEgLABgHIABgIIgRAJQgTAJgIAFQgNAJgPASQgQAUgJAKQgIAIgEABIgFAAIgFANIAAAEQgCAGgGAKIgMAWQgYApgPASQgLANgHAFQgFAFgKAEIgPAHQgUALgWATQgJAIgEACIAAAAIgFAEQgIAHgSAEQgWAEgaACIgRABIgMgBgAAnAoQgGAGgQAHIgjAMQgJAEgDACIgIALQgEAEgGABIgCADQgDAHgNAPQgSATgFAQIgBADQAGABAEAEQAGAGgCAKQgBAIgGAHQgFAFgOAHQAGAHAQAPQAUARAMACIAHAAIANgIQAigSAagzIARggIAAAAIABgIIACgIQABgHgCgKQgGgggCgRIAAgNIgEAFgAGdBgIgFAGIACAFIAHASQAHAOASAEQAQADARgFQAbgIALgQIAAgCIgHACQgXAGgSgCQgLgBgJgFQgHgDgGgHQgJgJgEgIg");
	var mask_graphics_25 = new cjs.Graphics().p("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ACgPgBQgagDgVgPQgXgQgIgXIgBgDQgPAggRAXQgGAIgGAEIgCAAQAAAGgFALIgQAgIgJAOQgFAJgKAKQgLAJgJACQgIADgPAAIg4AAQgLAAgEgEQgHgEgBgLQAAgKAGgMIAMgTIAQgaQAJgPAIgJIABgBQAAgFAGgIIATgXQAMgOAHgKQALgQAKgbQAEgKAEgEQAEgDAEgBIACgEIAJgZQAFgLABgHIAAgIIgQAJQgUAJgIAFQgNAJgPASQgQAUgJAKQgHAIgEABIgGAAIgEANIgBAEQgBAGgGAKIgNAWQgWApgOASQgLANgHAFQgGAFgJAEIgQAHQgUALgVATQgJAIgGACIgBAAIgFAEQgIAHgSAEQgWAEgaACIgRABIgLgBgAhPAoQgHAGgQAHIglAMQgJAEgCACIgIALQgFAEgGABIgBADQgEAHgNAPQgRATgGAQIgBADQAHABAEAEQAFAGgBAKQgBAIgGAHQgGAFgOAHQAGAHARAPQATARANACIAHAAIANgIQAkgSAZgzIARggIABAAIAAgIIACgIQACgHgCgKQgHgggBgRIAAgNIgEAFgAEkBgIgFAGIADAFIAGASQAIAOASAEQAPADARgFQAbgIAMgQIgBgCIgHACQgXAGgRgCQgMgBgJgFQgGgDgGgHQgJgJgFgIgAMjAaQgPAAgXgJQgMgEgFgFQgJgIACgSQACgSAIgTQAFgLAJgNQAagpAXgVIAbgVQAagSAOgHQAhgPAmAGQALACAGADQAIAGAAAJQAAAGgIAJQgUAaggA0QggA3gSAXQgNAQgMAHQgPAIgSAAIgGAAg");
	var mask_graphics_26 = new cjs.Graphics().p("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AFAEQAMAMAYgMQAPgHAPgNQAJgJAGgDQAMgGAHAGQAHAGgCASIgEAmQgCARgCAIQgHATgUAPQgOAKgYAJQgmAPgdAAQgRABgNgFQgIgEgOgLQgVgRgMgRQgIgNgGgTQgJgcgBgXIgCABIgaAMQgOAGgHACQgMACgPgBQgagDgVgPQgXgQgIgXIgBgDQgPAggRAXQgGAIgGAEIgCAAQAAAGgFALIgQAgIgJAOQgFAJgKAKQgLAJgJACQgIADgPAAIg4AAQgLAAgEgEQgHgEgBgLQAAgKAGgMIAMgTIAQgaQAJgPAIgJIABgBQAAgFAGgIIATgXQAMgOAHgKQALgQAKgbQAEgKAEgEQAEgDAEgBIACgEIAJgZQAFgLABgHIAAgIIgQAJQgUAJgIAFQgNAJgPASQgQAUgJAKQgHAIgEABIgGAAIgEANIgBAEQgBAGgGAKIgNAWQgWApgOASQgLANgHAFQgGAFgJAEIgQAHQgUALgVATQgJAIgGACIgBAAIgFAEQgIAHgSAEQgWAEgaACIgRABIgLgBgAhPAoQgHAGgQAHIglAMQgJAEgCACIgIALQgFAEgGABIgBADQgEAHgNAPQgRATgGAQIgBADQAHABAEAEQAFAGgBAKQgBAIgGAHQgGAFgOAHQAGAHARAPQATARANACIAHAAIANgIQAkgSAZgzIARggIABAAIAAgIIACgIQACgHgCgKQgHgggBgRIAAgNIgEAFgAEkBgIgFAGIADAFIAGASQAIAOASAEQAPADARgFQAbgIAMgQIgBgCIgHACQgXAGgRgCQgMgBgJgFQgGgDgGgHQgJgJgFgIg");
	var mask_graphics_27 = new cjs.Graphics().p("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");
	var mask_graphics_28 = new cjs.Graphics().p("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AJIAFAaQADALAGAPIACAFQAXgMAOgSIAPgVQASgXAdgOQAegOAfAAQAHABAFACQADgCAEAAQAJAAAMAOQALAQADAGQAFAKgBALIAfgbQAIgIAHgFQAQgLAhgCIAEgCQAEgDAJAAQAYgBAMAGQAFADAIAHQAGAEAFAGQAOAOACAXQAbgfApgUQAYgMAUgCIAOABQANgJAUgFQA5gRArARQAUAHAJAMQAIAKADAPIAAADIABgBIAGgLQACgRAIgSQAFgLAJgNQAagpAXgVIAbgVQAagSAOgHQAhgPAmAGQALACAGADQAIAGAAAJQAAAGgIAJQgUAaggA0QggA3gSAXIgNANIAAAGQgCATgPAZQgUAagJANIgTAgQgJAQgLAOQgMASgOAKIgDAIQgJARgPAVQgIAKACAFQACAEAFADIAKACIAJAEIABgBIASgRQASgTApgYQANgIAHAAQAKAAAOAKQAOAKADAIQAGANgJAOQgEAIgPAOIgOANQgnAigUALQgQAIgMADIgFABQgJAIgRAHQgWAIgRAAIgGAAQgSAAgPgJgAhPAoQgHAGgQAHIglAMQgJAEgCACIgIALQgFAEgGABIgBADQgEAHgNAPQgRATgGAQIgBADQAHABAEAEQAFAGgBAKQgBAIgGAHQgGAFgOAHQAGAHARAPQATARANACIAHAAIANgIQAkgSAZgzIARggIABAAIAAgIIACgIQACgHgCgKQgHgggBgRIAAgNIgEAFgAEkBgIgFAGIADAFIAGASQAIAOASAEQAPADARgFQAbgIAMgQIgBgCIgHACQgXAGgRgCQgMgBgJgFQgGgDgGgHQgJgJgFgIg");
	var mask_graphics_29 = new cjs.Graphics().p("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AJIAFAaQADALAGAPIACAFQAXgMAOgSIAPgVQASgXAdgOQAegOAfAAQAHABAFACQADgCAEAAQAJAAAMAOQALAQADAGQAFAKgBALIAfgbQAIgIAHgFQAQgLAhgCIAEgCQAEgDAJAAQAYgBAMAGQAFADAIAHQAGAEAFAGQAOAOACAXQAbgfApgUQAYgMAUgCIAOABQANgJAUgFQA5gRArARQAUAHAJAMQAIAKADAPIAAADIABgBIAGgLQACgRAIgSQAFgLAJgNQAagpAXgVIAbgVQAagSAOgHQAhgPAmAGQALACAGADQAIAGAAAJQAAAGgIAJQgUAaggA0QggA3gSAXIgNANIAAAGQgCATgPAZQgUAagJANIgTAgQgJAQgLAOQgMASgOAKIgDAIQgJARgPAVQgIAKACAFQACAEAFADIAKACIAJAEIABgBIASgRQARgSAngYIABgBQABgDAFgFIAZgbQAVgUAWgHQALgFAHADQAFACAHAJQAGAJAAAHIAAANIAAAQQgBAEgGAGIgbAdIgMAMIgDADIgBABQgEAIgPAOIgOANQgnAigUALQgQAIgMADIgFABQgJAIgRAHQgWAIgRAAIgGAAQgSAAgPgJgAhPAoQgHAGgQAHIglAMQgJAEgCACIgIALQgFAEgGABIgBADQgEAHgNAPQgRATgGAQIgBADQAHABAEAEQAFAGgBAKQgBAIgGAHQgGAFgOAHQAGAHARAPQATARANACIAHAAIANgIQAkgSAZgzIARggIABAAIAAgIIACgIQACgHgCgKQgHgggBgRIAAgNIgEAFgAEkBgIgFAGIADAFIAGASQAIAOASAEQAPADARgFQAbgIAMgQIgBgCIgHACQgXAGgRgCQgMgBgJgFQgGgDgGgHQgJgJgFgIg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:24.8,y:38.2}).wait(1).to({graphics:mask_graphics_2,x:24.8,y:40.7}).wait(1).to({graphics:mask_graphics_3,x:27.6,y:40}).wait(1).to({graphics:mask_graphics_4,x:38.8,y:39.9}).wait(1).to({graphics:mask_graphics_5,x:51.9,y:39.9}).wait(1).to({graphics:mask_graphics_6,x:62.2,y:39.9}).wait(1).to({graphics:mask_graphics_7,x:67,y:39.9}).wait(1).to({graphics:mask_graphics_8,x:68.8,y:39.9}).wait(1).to({graphics:mask_graphics_9,x:68.8,y:39.9}).wait(1).to({graphics:mask_graphics_10,x:68.8,y:39.9}).wait(1).to({graphics:mask_graphics_11,x:68.8,y:39.9}).wait(1).to({graphics:mask_graphics_12,x:68.8,y:39.9}).wait(1).to({graphics:mask_graphics_13,x:68.8,y:39.9}).wait(1).to({graphics:mask_graphics_14,x:68.8,y:39.9}).wait(1).to({graphics:mask_graphics_15,x:68.8,y:39.9}).wait(1).to({graphics:mask_graphics_16,x:68.8,y:39.9}).wait(1).to({graphics:mask_graphics_17,x:68.8,y:39.9}).wait(1).to({graphics:mask_graphics_18,x:68.8,y:39.9}).wait(1).to({graphics:mask_graphics_19,x:68.8,y:39.9}).wait(1).to({graphics:mask_graphics_20,x:68.8,y:39.9}).wait(1).to({graphics:mask_graphics_21,x:68.8,y:39.9}).wait(1).to({graphics:mask_graphics_22,x:73.1,y:39.9}).wait(1).to({graphics:mask_graphics_23,x:79.6,y:39.9}).wait(1).to({graphics:mask_graphics_24,x:79.6,y:39.9}).wait(1).to({graphics:mask_graphics_25,x:91.6,y:39.9}).wait(1).to({graphics:mask_graphics_26,x:91.6,y:39.9}).wait(1).to({graphics:mask_graphics_27,x:91.6,y:39.9}).wait(1).to({graphics:mask_graphics_28,x:91.6,y:39.9}).wait(1).to({graphics:mask_graphics_29,x:91.6,y:39.9}).wait(1));

	// ford-vetor
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJdFgQgQgQgDgbQAAgLgHAHQghAigmAOQgxATgngTQgjgRgMgnQgLgiAHgpQAAgHgHACQgWARgRAGQgdAKgUAAQglAAgYgiQgLgVAAgYQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgDABIh0C1IgIAGIhMAAQgLAAAGgJQBXiJA0hdQASgjgQgLQgNgIgmAaQgeAYglArIgtA5QgZAnghAjQgnAsgxATQgzATgwgOQg5gSgQg8QgDgNgGAJQgYAcgaARQgJAFgDgCQgJgDgMgXQgBgGAEgGQAigcARgVQAOgPAKgcQAthuBPgrQArgZAsgEQAWgDAGANIAHAUQABAGgFAFQhOAdgmAzQgYAhgGAlQgGAmAQAXQAaAgArgOQA6gSAfhGQAdhIgWhFQgDgMAJgGQAKgIARgJQAPgIAKAOQAWAkAAAtQACAJAGgGQA+hEALgJQAsghApAAQA6ADgDBEQAAABAAABQABABAAAAQAAABABAAQABAAAAAAIAEgDQAOgTASgQQAoggAqADQAbADAPATQASAWgEAaQgFAmggAQQgeAPgYgVQgTgQAGgaQAAgDgDgCQAAAAgBAAQgBAAAAAAQgBABAAAAQgBABAAAAQgZAagDAdQgEAdARARQAfAcA5gnQAbgRApgkIA/g2QA1gpAtgGQAhgFAcAMQAqAQADAkQAAALAJgJQAUgiB7i4QAEgGAHAAIBRAAQAKAAgGAGQgBADh/DFQh7C+gJAWQgHATAGAHQASAWAngaQAegWAlgjIA6g4QAEgFADAFIAVARQAEAEgEADQg9BMg7AtQguAlgsAHQgMACgKAAQgbAAgRgPgAI4BRQgdAPgeAjQgvA4gDA9QAAAcASAIQAfARA0grQAagUAPgXIAfg1QAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgIAAAAgGQgBgBABgFQAeg5glgQQgHgEgJAAQgPAAgSAMgAtsE8QgzgogGhEQgEhQAsg5QATgYAegTQAegTAbgGQAbgDAIAKQAIALgCAJQgBAIgIADQg6AegUAtQgZAvAdAtQAcAqA/gGQBEgGBAg8QA1g0AKgMQAyg6A4hMIAAgDIgDgBQg0ADgsAcQgQAOgKgQQgFgFADgIQADgJAIgEQAfgWAsgMIBPgQIAIgDIA9hSQAXgcA4gxQAUgSA2gfQAEgBgDgEIgDgBQiDgagxgDQhogJhNAdQg7AXgdArQgaAnANAkQAJAVAaAFQAbAEAdgNQAzgbAeguQALgPAKALQALAIgJAXQgbBAgtAnQgzAsg7ABQgxACggghQgfggAAgwQAAhXBWg+QBQg6BygJQBqgICVAVID8AoQDWAaCvgpQAagEAAAcQgDAjg7AhQhCAjhaAAQhPABhwgdQh6gjg/gOQAAAOgEACQiBBeguBUQgDACAGAAIBngFQAGAAAAgGQgGgvAggcQAmghAgAZQAfAZgWAtQgSAeghALIgEAEQABAGAcATQAFAGgIAHQgGAGgGAAQgEAAgJgFQgTgKgRgTQgDgEgLAAIiGANQgKACgBAEQiCDUhJBKQg4A5g3AYQgtAUg5ACQhEAAgxgngAiTiUQgXAVAGAaQAAAGAFAAQAUgFANgTQAQgWgNgKQgEgDgFAAQgHAAgIAGg");
	this.shape.setTransform(94.7,37.3);
	this.shape._off = true;

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.FAROL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.farol();
	this.instance.parent = this;
	this.instance.setTransform(-147,136,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,136,88.2,46.2);


(lib.exp_012 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.expn_012();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2.333,2.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.exp_010 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.expn_010();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2.333,2.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.exp_08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.expn_08();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2.333,2.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.exp_06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.expn_06();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2.333,2.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.exp_05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.expn_05();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2.333,2.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.exp_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.expn_04();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2.333,2.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.exp_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.expn_03();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2.333,2.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.exp_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.expn_02();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2.333,2.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.exp_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.expn_01();
	this.instance.parent = this;
	this.instance.setTransform(0,0,2.333,2.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.ecosporttexto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEAoIAAhFIgIAAIAAgKIAZAAIAAAKIgJAAIAABFg");
	this.shape.setTransform(32.5,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AADAoIgDgeIgDAAIAAAeIgKAAIAAhPIANAAQAFAAACABQADACABADIACAIIABAKIgBAPIgCAEIgEADIAGAhgAgDAAIADAAQACAAABgCQABgCAAgKQAAgKgBgCQgBgEgCAAIgDAAg");
	this.shape_1.setTransform(28.4,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAoQgDgBgCgCIgDgFIgBgHIAAgZIAAgYIABgHIACgEQACgDAEgBIAFgBIAGABQAEABABACIACAFIABAHIABAYIgBAaIgBAHIgCAEQgBACgEABIgGABIgFgBgAgCgdIgBAEIgBAZIABAaIABAEIACABIACgBIACgEIAAgaIAAgZIgCgEIgCgBIgCABg");
	this.shape_2.setTransform(24,9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAoIAAhPIANAAQAFAAADABQACACABADIACAIIABALQgBAOgCAEQgBADgCACQgDACgFAAIgDAAIAAAdgAgDABIADAAQACAAABgCIAAgMIAAgNQgBgEgCAAIgDAAg");
	this.shape_3.setTransform(19.7,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAoIACgKIAIABQACAAABgCQABgCgCgGIgKgmIgBgIQgBgEACgEQABgDADgCQAEgCADAAIAJABIgDAKIgFgBQgDAAAAADIAAAHIAKAlIACAIQAAAFgBADQgBAEgDACQgEACgEAAIgKgBg");
	this.shape_4.setTransform(15.5,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgFAoQgDgBgCgCIgDgFIgBgHIAAgZIAAgYIABgHIACgEQACgDAEgBIAFgBIAGABQAEABABACIACAFIABAHIABAYIgBAaIgBAHIgCAEQgBACgEABIgGABIgFgBgAgCgdIgBAEIgBAZIABAaIABAEIACABIACgBIACgEIAAgaIAAgZIgCgEIgCgBIgCABg");
	this.shape_5.setTransform(11.4,9.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCAoQgDgBgCgCIgCgFIgBgHIgBgZIABgXIABgIIACgEQACgDADgBIAFgBIAJABIgCAKIgGgBIgEABQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAIAAAZIAAAaIAAAEIAEABIAGgBIACAJIgJACIgFgBg");
	this.shape_6.setTransform(7.4,9.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAoIAAhPIAVAAIAAAKIgLAAIAAAZIALAAIAAAIIgLAAIAAAbIALAAIAAAJg");
	this.shape_7.setTransform(3.7,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0.8,36.9,17.2);


(lib.bg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.bg_final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.bg2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib._base_quadrado_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt2_2
	this.instance = new lib.txt2_2();
	this.instance.parent = this;
	this.instance.setTransform(147.1,-18.1,1,1,0,0,0,146.1,10.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:51.9,alpha:1},19,cjs.Ease.get(1)).wait(16));

	// txt2_1
	this.instance_1 = new lib.txt2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(146.8,-44.6,1,1,0,0,0,146.8,25.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:25.4,alpha:1},19,cjs.Ease.get(1)).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-28.5,292.2,20.8);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt1_6
	this.instance = new lib.txt1_6();
	this.instance.parent = this;
	this.instance.setTransform(66.6,62.3,1,1,0,0,0,51.6,18.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({y:32.3,alpha:1},16,cjs.Ease.get(1)).to({_off:true},6).wait(2).to({_off:false},0).wait(3).to({y:62.3,alpha:0},14,cjs.Ease.get(-1)).to({_off:true},1).wait(8));

	// txt1_2
	this.instance_1 = new lib.txt1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18.1,11.1,1,1,0,0,0,82.1,18.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({y:-18.9,alpha:1},16,cjs.Ease.get(1)).to({_off:true},52).wait(2).to({_off:false},0).wait(9).to({y:11.1,alpha:0},14,cjs.Ease.get(-1)).to({_off:true},1).wait(2));

	// txt1_1
	this.instance_2 = new lib.txt1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-115.1,-21,1,1,0,0,0,21.4,12.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-51,alpha:1},16,cjs.Ease.get(1)).to({_off:true},55).wait(2).to({_off:false},0).wait(11).to({y:-21,alpha:0},14,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(166.9,-1.8,301.6,32.8);


(lib.shape_up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// farol
	this.instance = new lib.FAROL();
	this.instance.parent = this;
	this.instance.setTransform(48.6,-72.5,0.88,0.88,0,0,0,73.5,38.5);
	this.instance.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},10).wait(1));

	// txt
	this.instance_1 = new lib.txt_cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(118.6,44.2,1,1,0,0,0,35.5,9.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},10).wait(1));

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B48B2").s().p("AgQArQgHgCgFgEIAHgKIAJAEQAHACAFAAIAHgBIAFgCIADgEIABgFIgBgGIgEgEIgGgDIgHgEIgKgEIgHgEIgEgGQgCgFAAgEQAAgHACgEQACgEADgDQAEgEAFgBQAFgCAFAAQAIAAAGABQAGACAFACIgGAMIgIgDIgLgBIgEABIgFACIgCADIgBAFIABAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQADADAHADIANAGIAIADQADAEACADQABAEAAAGQAAAHgCAEQgBAEgEADQgEADgFADQgGABgHAAIgQgCg");
	this.shape.setTransform(147.7,44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B48B2").s().p("AgFAsIAAhXIALAAIAABXg");
	this.shape_1.setTransform(142.3,44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6B48B2").s().p("AAUAsIgFgRIgdAAIgGARIgNAAIAbhXIANAAIAbBXgAAMAPIgMgnIgLAnIAXAAg");
	this.shape_2.setTransform(136.3,44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6B48B2").s().p("AAYAsIAAg9IgUA9IgIAAIgUg9IAAA9IgNAAIAAhXIASAAIATA/IAUg/IASAAIAABXg");
	this.shape_3.setTransform(127.4,44);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6B48B2").s().p("AAUAsIgFgRIgdAAIgGARIgNAAIAbhXIANAAIAbBXgAAMAPIgMgnIgLAnIAXAAg");
	this.shape_4.setTransform(115.6,44);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6B48B2").s().p("AgcAsIAAhXIAcAAQAHAAAFABQAFACAEADQADADABADQACAFAAAFIgBAIIgCAGIgDAEIgFADIAGAAIADAEIADAHIABAIQAAAHgCAFQgCAEgDADQgEADgFACQgGABgGAAgAgOAgIAOAAIAGgBIAFgCQACgCABgCIAAgHIAAgHQgBAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgFgCIgGgCIgOAAgAgOgGIAOAAIAFAAIAEgCQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAgBIABgFIgBgHQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAIgEgCIgFgBIgOAAg");
	this.shape_5.setTransform(107.9,44);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6B48B2").s().p("AgFAsIAAhXIALAAIAABXg");
	this.shape_6.setTransform(102,44);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6B48B2").s().p("AAUAsIgFgRIgeAAIgEARIgPAAIAchXIANAAIAbBXgAAMAPIgMgnIgLAnIAXAAg");
	this.shape_7.setTransform(96.1,44);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B48B2").s().p("AgQArQgHgCgFgEIAHgKIAJAEQAHACAFAAIAHgBIAFgCIADgEIABgFIgBgGIgEgEIgGgDIgHgEIgKgEIgHgEIgEgGQgCgFAAgEQAAgHACgEQACgEADgDQAEgEAFgBQAFgCAFAAQAIAAAGABQAGACAFACIgGAMIgIgDIgLgBIgEABIgFACIgCADIgBAFIABAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQADADAHADIANAGIAIADQADAEACADQABAEAAAGQAAAHgCAEQgBAEgEADQgEADgFADQgGABgHAAIgQgCg");
	this.shape_8.setTransform(88.3,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(11));

	// shape_effect
	this.instance_2 = new lib.shape_effect();
	this.instance_2.parent = this;
	this.instance_2.setTransform(75,12.2,1,1,0,0,0,75,12.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},10).wait(1));

	// shape
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AnDB8IAAj3IOHAAIAAD3g");
	this.shape_9.setTransform(119.4,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.5,13.3,310.2,43.6);


(lib.shape = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// Layer 3
	this.instance = new lib.FAROL();
	this.instance.parent = this;
	this.instance.setTransform(48.6,-72.5,0.88,0.88,0,0,0,73.5,38.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},10).wait(1));

	// txt
	this.instance_1 = new lib.txt_cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(118.6,44.2,1,1,0,0,0,35.5,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},10).wait(1));

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6B48B2").s().p("AgQArQgHgCgFgEIAHgKIAJAEQAHACAFAAIAHgBIAFgCIADgEIABgFIgBgGIgEgEIgGgDIgHgEIgKgEIgHgEIgEgGQgCgFAAgEQAAgHACgEQACgEADgDQAEgEAFgBQAFgCAFAAQAIAAAGABQAGACAFACIgGAMIgIgDIgLgBIgEABIgFACIgCADIgBAFIABAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQADADAHADIANAGIAIADQADAEACADQABAEAAAGQAAAHgCAEQgBAEgEADQgEADgFADQgGABgHAAIgQgCg");
	this.shape.setTransform(147.7,44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B48B2").s().p("AgFAsIAAhXIALAAIAABXg");
	this.shape_1.setTransform(142.3,44);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6B48B2").s().p("AAUAsIgFgRIgdAAIgGARIgNAAIAbhXIANAAIAbBXgAAMAPIgMgnIgLAnIAXAAg");
	this.shape_2.setTransform(136.3,44);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6B48B2").s().p("AAYAsIAAg9IgUA9IgIAAIgUg9IAAA9IgNAAIAAhXIASAAIATA/IAUg/IASAAIAABXg");
	this.shape_3.setTransform(127.4,44);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6B48B2").s().p("AAUAsIgFgRIgdAAIgGARIgNAAIAbhXIANAAIAbBXgAAMAPIgMgnIgLAnIAXAAg");
	this.shape_4.setTransform(115.6,44);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6B48B2").s().p("AgcAsIAAhXIAcAAQAHAAAFABQAFACAEADQADADABADQACAFAAAFIgBAIIgCAGIgDAEIgFADIAGAAIADAEIADAHIABAIQAAAHgCAFQgCAEgDADQgEADgFACQgGABgGAAgAgOAgIAOAAIAGgBIAFgCQACgCABgCIAAgHIAAgHQgBAAAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAIgFgCIgGgCIgOAAgAgOgGIAOAAIAFAAIAEgCQABgBAAAAQABgBAAAAQAAgBABAAQAAgBAAgBIABgFIgBgHQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBgBAAIgEgCIgFgBIgOAAg");
	this.shape_5.setTransform(107.9,44);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6B48B2").s().p("AgFAsIAAhXIALAAIAABXg");
	this.shape_6.setTransform(102,44);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6B48B2").s().p("AAUAsIgFgRIgeAAIgEARIgPAAIAchXIANAAIAbBXgAAMAPIgMgnIgLAnIAXAAg");
	this.shape_7.setTransform(96.1,44);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B48B2").s().p("AgQArQgHgCgFgEIAHgKIAJAEQAHACAFAAIAHgBIAFgCIADgEIABgFIgBgGIgEgEIgGgDIgHgEIgKgEIgHgEIgEgGQgCgFAAgEQAAgHACgEQACgEADgDQAEgEAFgBQAFgCAFAAQAIAAAGABQAGACAFACIgGAMIgIgDIgLgBIgEABIgFACIgCADIgBAFIABAEQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQADADAHADIANAGIAIADQADAEACADQABAEAAAGQAAAHgCAEQgBAEgEADQgEADgFADQgGABgHAAIgQgCg");
	this.shape_8.setTransform(88.3,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(11));

	// shape_effect
	this.instance_2 = new lib.shape_effect();
	this.instance_2.parent = this;
	this.instance_2.setTransform(75,12.2,1,1,0,0,0,75,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:0},10).wait(1));

	// shape
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AnDB8IAAj3IOHAAIAAD3g");
	this.shape_9.setTransform(119.4,44.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.5,13.3,310.2,43.6);


(lib.roda_gira = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.roda_1();
	this.instance.parent = this;
	this.instance.setTransform(23.5,23.5,1,1,0,0,0,23.5,23.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:23.5,rotation:-1080},49,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,47,47);


(lib.logo_ford = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ECOSPORT
	this.instance = new lib.ecosporttexto();
	this.instance.parent = this;
	this.instance.setTransform(120.6,26.8,1,1,0,0,0,20.9,8.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(1).to({regX:18.2,regY:9.3,x:114.9,y:27.5,alpha:0.297},0).wait(1).to({x:113.2,alpha:0.469},0).wait(1).to({x:112,alpha:0.591},0).wait(1).to({x:111.1,alpha:0.683},0).wait(1).to({x:110.4,alpha:0.755},0).wait(1).to({x:109.8,alpha:0.813},0).wait(1).to({x:109.3,alpha:0.859},0).wait(1).to({x:108.9,alpha:0.896},0).wait(1).to({x:108.6,alpha:0.926},0).wait(1).to({x:108.4,alpha:0.949},0).wait(1).to({x:108.2,alpha:0.967},0).wait(1).to({x:108.1,alpha:0.98},0).wait(1).to({x:108,alpha:0.99},0).wait(1).to({x:107.9,alpha:0.996},0).wait(1).to({alpha:0.999},0).wait(1).to({regX:20.9,regY:8.6,x:110.6,y:26.8,alpha:1},0).wait(15));

	// logo.png
	this.instance_1 = new lib.fordescrevendo("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(94.1,35.7,0.87,0.87,0,0,0,94.9,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.img1_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img1_mc_interno();
	this.instance.parent = this;
	this.instance.setTransform(168,140,1,1,0,0,0,168,140);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,x:175.5,y:146},199,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-336,0,386,90);


(lib.EXPLOSAO_FINAL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// exp_012
	this.instance = new lib.exp_012();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.98,0.98,0,0,0,168,140);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(145).to({_off:false},0).to({scaleX:1,scaleY:1,x:1,y:3,alpha:1},26).wait(30));

	// exp_010
	this.instance_1 = new lib.exp_010();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.1,1,0.97,0.97,0,0,0,168.1,140);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(125).to({_off:false},0).to({regX:168,scaleX:1,scaleY:1,x:1,alpha:1},20).to({regX:168.1,scaleX:1.02,scaleY:1.02,x:1.1},26).to({_off:true},1).wait(29));

	// exp_08
	this.instance_2 = new lib.exp_08();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.97,0.97,0,0,0,168,140);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(106).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},19).to({scaleX:1.03,scaleY:1.03},20).to({_off:true},1).wait(55));

	// exp_06
	this.instance_3 = new lib.exp_06();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0,0.97,0.97,0,0,0,168,140);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(87).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},19).to({scaleX:1.03,scaleY:1.03},19).to({_off:true},1).wait(75));

	// exp_05
	this.instance_4 = new lib.exp_05();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.1,0,0.97,0.97,0,0,0,168.1,140);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(68).to({_off:false},0).to({regX:168,scaleX:1,scaleY:1,x:0,alpha:1},19).to({scaleX:1.03,scaleY:1.03},19).to({_off:true},1).wait(94));

	// exp_04
	this.instance_5 = new lib.exp_04();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,0.94,0.94,0,0,0,168,140);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(49).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},19).to({scaleX:1.03,scaleY:1.03},19).to({_off:true},1).wait(113));

	// exp_03
	this.instance_6 = new lib.exp_03();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0,0.93,0.93,0,0,0,168.2,140);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({regX:168,scaleX:1,scaleY:1,alpha:1},21).to({scaleX:1.04,scaleY:1.04},19).to({_off:true},1).wait(132));

	// exp_02
	this.instance_7 = new lib.exp_02();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.8,0.8,0,0,0,168,140);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},18).to({scaleX:1.08,scaleY:1.08},21).to({_off:true},1).wait(151));

	// exp_01
	this.instance_8 = new lib.exp_01();
	this.instance_8.parent = this;
	this.instance_8.setTransform(4.1,2,0.8,0.8,0,0,0,168.7,140.2);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:168,regY:140,scaleX:1,scaleY:1,x:0,y:0,alpha:1},10,cjs.Ease.get(-1)).to({scaleX:1.17,scaleY:1.17,x:-5},18).to({_off:true},1).wait(172));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.9,-110.2,268.8,224);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shape_effect_farol
	this.instance = new lib.shape_up();
	this.instance.parent = this;
	this.instance.setTransform(75,12.2,1,1,0,0,0,75,12.2);

	this.instance_1 = new lib.shape();
	this.instance_1.parent = this;
	this.instance_1.setTransform(75,12.2,1,1,0,0,0,75,12.2);

	this.instance_2 = new lib._base_quadrado_();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-183.8,-22.9,3.112,1.418,0,0,0,150,124.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.5,13.3,310.2,43.6);


(lib.carro_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// roda frente
	this.instance = new lib.roda_gira("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(231.1,106.7,0.565,0.857,0,0,0,23.7,23.8);
	this.instance.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({startPosition:44},0).to({alpha:0,startPosition:49},5,cjs.Ease.get(1)).wait(1));

	// roda tras
	this.instance_1 = new lib.roda_gira("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(310,96.8,0.251,0.637,0,0,0,23.9,23.9);
	this.instance_1.alpha = 0.699;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({startPosition:44},0).to({alpha:0,startPosition:49},5,cjs.Ease.get(1)).wait(1));

	// carro.png
	this.instance_2 = new lib.carro();
	this.instance_2.parent = this;
	this.instance_2.setTransform(8,6,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,6,404.6,140);


(lib.Anima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_429 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(429).call(this.frame_429).wait(1));

	// CTA
	this.instance = new lib.CTA();
	this.instance.parent = this;
	this.instance.setTransform(728.5,40.7,0.882,0.882,0,0,0,75.1,12.2);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.CTA(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(231).to({_off:false},0).wait(15).to({regX:75,x:648.6,alpha:1},18,cjs.Ease.get(1)).wait(166));

	// carro
	this.instance_1 = new lib.carro_1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(795.1,33.2,0.48,0.48,0,0,0,175.1,76.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(192).to({_off:false},0).to({regX:175,x:498.9,y:63.1,startPosition:49},50,cjs.Ease.get(1)).wait(188));

	// txt2
	this.instance_2 = new lib.txt2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(225.8,32.9,1.21,1.21,0,0,0,146.8,25.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(226).to({_off:false},0).wait(204));

	// LOGO-FORD
	this.instance_3 = new lib.logo_ford("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(536.9,18.3,0.47,0.47,0,0,0,95.2,37.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(226).to({_off:false},0).wait(204));

	// EXPLOSAO_FINAL
	this.instance_4 = new lib.EXPLOSAO_FINAL("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(514.1,41.6,0.5,0.4,0,0,0,-3.5,1.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(233).to({_off:false},0).wait(197));

	// txt1
	this.instance_5 = new lib.txt1("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(169.5,51.3,1,1,0,0,0,21.4,12.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).wait(70).to({mode:"single",startPosition:70},0).wait(62).to({mode:"synched",startPosition:73,loop:false},0).to({_off:true},30).wait(249));

	// bg_Final
	this.instance_6 = new lib.bg_final();
	this.instance_6.parent = this;
	this.instance_6.setTransform(168,140,1,1,0,0,0,168,140);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(191).to({_off:false},0).to({alpha:1},20).wait(219));

	// smoke2_
	this.instance_7 = new lib.smoke2_();
	this.instance_7.parent = this;
	this.instance_7.setTransform(142.9,86.8,0.88,0.88,0,0,0,161.8,86.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:162.6,regY:86.2,scaleX:1.05,scaleY:1.05,x:172.7,y:86},206,cjs.Ease.get(1)).wait(224));

	// smoke1_
	this.instance_8 = new lib.smoke1_();
	this.instance_8.parent = this;
	this.instance_8.setTransform(222.1,61.2,0.88,0.88,0,0,0,150.7,69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:150.6,scaleX:1.05,scaleY:1.05,x:207.1,y:73},206,cjs.Ease.get(1)).wait(224));

	// img1
	this.instance_9 = new lib.img1_("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(505,140,1,1,0,0,0,168,140);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({alpha:1,startPosition:39},39).wait(382));

	// bg1
	this.instance_10 = new lib.bg1_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(168,140,1,1,0,0,0,168,140);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(430));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,0,754.9,90);


// stage content:
(lib.Launch_Eco_FT1_Awa_Esportes_728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,1,1).p("Eg43gHBMBxvAAAIAAODMhxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Anima
	this.instance = new lib.Anima();
	this.instance.parent = this;
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(337.1,44,755.9,92);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;