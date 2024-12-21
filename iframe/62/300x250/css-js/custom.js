var banner = document.getElementById('banner');
var ctaAnimation = false;

var masterTimeline = new TimelineMax({paused:true}),
               tl1 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"})
   .add(function(){ctaAnimation = false;})
   .from(".logo", .5, {alpha:0, y:10, rotation:0.02, ease:Sine.easeOut})
   .from(".girl", .8, {alpha:0, ease:Sine.easeInOut}, "-=.25")
   .staggerFrom(".txt", 1, {alpha:0, x:-40, rotation:0.02, ease:Sine.easeOut}, .2) 
   .from(".border", .75, {alpha:0, ease:Sine.easeOut}, "-=.7")
   .to(".girl_suite", .5, {clip:"rect(0px 300px 250px 0px)", rotation:0.02, ease:Sine.easeInOut}, "-=.15")
   .from(".cta", .5, {alpha:0, ease:Sine.easeInOut, onComplete:hoverInOut})
;


/*-------------------------------------
  Add all timelines to master timeline...
---------------------------------------*/
masterTimeline.add([tl1]);


/*-------------------------------------
  After window load...
---------------------------------------*/   
window.onload = function()
{
  masterTimeline.play();
}


/*-------------------------------------
  Hover effect...
---------------------------------------*/
function hoverInOut(){
  ctaAnimation = true;
}

banner.addEventListener("mouseover", function(){
  if(ctaAnimation)
  TweenMax.to(".cta", .4, {scale:1.1, rotation:0.02, ease:Sine.easeInOut});
})

banner.addEventListener("mouseout", function(){
  if(ctaAnimation)
  TweenMax.to(".cta", .4, {scale:1, rotation:0.02, ease:Sine.easeInOut});
})


/*-----------------------------------------
  Count animation duration of a timeline...
-----------------------------------------*/
var currentDuration = masterTimeline.totalDuration();
console.log(currentDuration); 