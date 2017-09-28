//*******************************************
// Custom Icon Animation .JS Fragment File
//-------------------------------------------
// This is loaded by main.js based on the dynamic feed. 
// Sample values for local testing are at the bottom of index.html
// See main.js for other vars/functions, but do not modify main.js
//*****************************************************************
var iconAnimationName = "shake"; // Replace this with the icon/animation name
var iconAnimationVersion = 0.2; // Replace this with your version name
var spriteSheetName = "spritesheet_shops.png";
var spriteSheet = new Image();

// For rescaling the sprite animations on other unit sizes 
// like 160x600, 300x600, 728x90 & 336x280
var iconUnitScale = 1; // We compute scale = 1 based on 300x250
var iconRegistrationX =0; // Null registration point of animation. Adjust as needed on other unit sizes (728x90, 160x600 etc)
var iconRegistrationY =0; // 0, 0 is based on the 300x250

// From Dynamic API
// Is 1 by default. Change accordingly
var iconAnimationStartTime = parseFloat(dynamicContent.Q315_Google_Tangram_Feed_Brazil_Feed[0].Start_Time_Icon_Animation); //Start_Time_Icon_Animation
var copyBatch2StartTime = parseFloat(dynamicContent.Q315_Google_Tangram_Feed_Brazil_Feed[0].Start_Time_Text_2); //Start_Time_Icon_Animation

var hand, invis; // SVG groups

var handParts = [];
var handPartCount = 9;
var handPartStartX = [-100,-40,20,53,35,-10,-13,10,50];
var handPartStartY = [20,7,12,12,17,20,6,9,10];
var handPartEndX =  [0,0,0,0,0,0,0,0,0];
var handPartEndY =  [0,0,0,0,0,0,0,0,0];

var invisParts = [];
var coinPartCount = 1;
var coinPartStartX = [0];
var coinPartStartY = [0];
var coinPartDockX =  [0];
var coinPartDockY =  [0];

var iconSVG; // reference to main SVG document. Don't forget to add [id="iconSVG"] to SVG document root
var iconSVGCode = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 250" enable-background="new 0 0 300 250" id="iconSVG"><g id="invis"><polygon id="invis0" fill="none" points="180.73962,169.1386 180.73962,155.13748 180.73962,141.13643 180.73958,141.13638 166.73848,155.13748 	"/></g><g id="hand"><polygon id="hand0" fill="#F5C861" points="214.72046,172.11238 162.79196,120.18389 162.79196,172.11238 	"/><polygon id="hand1" fill="#F4BC48" points="162.79196,120.18391 214.72046,172.1124 214.72046,120.18391 	"/><polygon id="hand2" fill="#F0B23B" points="214.72046,130.05035 214.72046,162.2459 246.916,162.2459 246.916,162.24594 246.916,130.0504 214.72054,130.0504 	"/><polygon id="hand3" fill="#F4BC48" points="162.79196,159.92447 162.79196,144.55972 155.10959,152.2421 	"/><polygon id="hand4" fill="#F4BC48" points="162.79196,172.11238 162.79196,159.92447 156.69801,166.01843 	"/><polygon id="hand5" fill="#F4BC48" points="162.79196,144.55972 162.79196,132.37181 156.69801,138.46576 	"/><polygon id="hand6" fill="#F4BC48" points="162.79196,132.37181 162.79196,120.18389 156.69801,126.27785 	"/><polygon id="hand7" fill="#F5C861" points="214.72043,200.11459 214.72043,186.11349 214.72043,172.11243 214.72038,172.11238 200.71927,186.11349 	"/><polygon id="hand8" fill="#F4BC48" points="200.71927,172.11243 200.71927,186.11349 214.72038,172.11238 200.71927,172.11238 	"/></g></svg>';

function createIconParts()
{
	console.log("TRACE 0");
	var i = 0;
	var tempX = 0;
	var tempY = 0;
	var rndRange = 50;
	var iconHolder = $("#iconHolder");

	TweenLite.to(iconHolder, 0, {opacity:0}); // hide icon holder before attaching SVG
	
	iconHolder.innerHTML = "" + iconSVGCode;
	iconSVG = $("#iconSVG");
	TweenLite.to(iconSVG, 0, {x:365, y:-75, width:"239.7px", height:"194.8px"});

	// Piggybank
	hand = $("#hand");
	for (i = 0; i < handPartCount; i++)
	{
		handParts[i] = $("#hand" + i);
		tempX = handPartStartX[i] * iconUnitScale + iconRegistrationX;
		tempY = handPartStartY[i] * iconUnitScale + iconRegistrationY;
		TweenLite.to(handParts[i], 0, {opacity:0, x:tempX, y:tempY});
	}

	TweenLite.to(iconHolder, 0, {opacity:1}); // show icon holder again after attaching SVG	

}

function initIconAnimations()
{

	// Timeline Markers Definitions	
	tlIcon.addLabel("dockParts", iconAnimationStartTime);
	tlIcon.addLabel("handTurn", (copyBatch2StartTime + 1));

	// Animation Definitions
	dockParts();
	handTurn();
	
	// End Animation
}

function dockParts()
{
	var i = 0;
	// Hand
	for (i = 0; i < handPartCount; i ++)
	{
		tlIcon.to(handParts[i], 0.3, {opacity:1}, "dockParts");
		tlIcon.to(handParts[i], 1, {x:(handPartEndX[i] * iconUnitScale + iconRegistrationX), y:(handPartEndY[i] * iconUnitScale + iconRegistrationY), ease:Expo.easeInOut, onCompleteParams:[handParts[i]], onComplete:onTweenComplete}, "dockParts");
	}
}

function handTurn()
{
	tlIcon.to([$("#hand")], 0.8, {rotation:-180, transformOrigin:"45% 45%"}, "handTurn");
		
}

function onTweenComplete(e)
{
	e.style.transform = "initial";
}
// Create and initialize icon parts + animation
createIconParts();
initIconAnimations();

//-----------------------------------------------------------------
//**************************
// DO NOT TOUCH CODE BELOW
//*************************
console.log("Animation: " + iconAnimationName + " ver " + iconAnimationVersion);
console.log("-----");

// play animation once spritesheet is confirmed to have loaded
function onSpriteSheetLoad(e)
{
	// startAnimations is called from main.js
	// it will play the main timeline (tl)
	// + your icon timeline (tlIcon) at the same time
	startAnimations(); // STARTS THE ENTIRE UNIT ANIMATION when SpriteSheet is loaded
}

spriteSheet.addEventListener("load", onSpriteSheetLoad, false);
spriteSheet.src = spriteSheetName;
