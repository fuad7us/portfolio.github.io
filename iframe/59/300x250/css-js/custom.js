var banner = document.getElementById('banner');

var masterTimeline = new TimelineMax({paused:true}),
               tl1 = new TimelineMax(),
               tl2 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"})  
   .from(".more_than_words", 1.5, {scale:0, transformOrigin:"35% 35%", ease:Elastic.easeOut.config(1,.75)})
   .from(".baby-fair", 1.5, {scale:0, transformOrigin:"40% 45%", ease:Elastic.easeOut.config(1,.75)}, "-=1.25")
   .from(".upto", 1.5, {scale:0, transformOrigin:"50% 20%", ease:Elastic.easeOut.config(1,.75)}, "-=1.5")
   .to(".left", .4, {x:-150, ease:Sine.easeInOut}, "line-=.65")
   .to(".right", .4, {x:150, ease:Sine.easeInOut}, "line-=.65")
   .from(".date", .5, {alpha:0, transformOrigin:"50% 50%", ease:Sine.easeOut}, "-=.25")
   .to(".baby-fair", .3, {y:3, repeat:1, yoyo:true, ease:Sine.easeOut})
   .to("#frame_one", .4, {alpha:0, ease:Expo.easeIn, delay:.8})

   .from(".baby-left", .4, {alpha:0, ease:Expo.easeIn})   
   .from(".red-bubble", 1, {scale:0, transformOrigin:"50% 50%", ease:Elastic.easeOut.config(1,.75)})
   .from(".bubble-text", 1, {scale:0, transformOrigin:"50% 50%", ease:Elastic.easeOut.config(1,1)}, "-=.5")
   .to(".bubble-text", .5, {alpha:0, ease:Expo.easeIn, delay:2})
   .from(".promo-code", .5, {alpha:0, ease:Sine.easeInOut})
   .from(".cta", .3, {alpha:0, ease:Sine.easeInOut})
   .to(".baby-left", .2, {alpha:0, ease:Expo.easeIn})
   .from(".baby", .2, {alpha:0, ease:Expo.easeIn}, "-=.4")
;

tl2.add(swingCarousel(".hanging-carousel"))


function swingCarousel(obj) {
  var tl = new TimelineMax()
  tl.from(obj, .2, {alpha:0, ease:Power0.easeNone})
    .to(obj, .5, {x:5, rotation:-5, transformOrigin:"top", ease:Sine.easeInOut}, "-=.2") 
    .to(obj, .5, {x:-5, rotation:5, repeat:17, yoyo:true, transformOrigin:"top", ease:Sine.easeInOut})
    .to(obj, .5, {x:0, rotation:0, transformOrigin:"top", ease:Sine.easeInOut});
  return tl;
} 


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


/*-----------------------------------------
  Count animation duration of a timeline...
-----------------------------------------*/
var currentDuration = masterTimeline.totalDuration();
console.log(currentDuration); 