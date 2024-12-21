var banner = document.getElementById('banner');
var clicktag = document.getElementById('clicktag');
var ctaAnimation = false;

var mtl = new TimelineMax({paused:true, repeat:1, repeatDelay:4});
  
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
mtl.set(banner, {visibility: "visible"})
   .add(function(){ctaAnimation = false;})

   .addLabel("f1")
   .from(".bg, .border", 1, {scale:1.25, ease:Expo.easeOut}, "f1")
   .from(".overlay", .75, {alpha:0, y:-200, ease:Sine.easeOut}, "f1")
   .from(".bottom-bar img", .5, {alpha:0, y:20, ease:Sine.easeOut}, "f1+=.25")
   .to(".logo img", 1, {y:-1560, ease:SteppedEase.config(26)}, "f1+=.25")
   .from(".txt1", .5, {alpha:0, y:15, ease:Sine.easeOut}, "f1+=1")
   .from(".antlers", .5, {alpha:0, y:-15, ease:Sine.easeOut}, "f1+=1")
   .from(".nose", .5, {alpha:0, ease:Sine.easeOut}, "f1+=1")
   .to(".nose", .5, {scale:1.5, repeat:1, yoyo:true, ease:Sine.easeOut}, "f1+=1.1")

   .from(".box", .25, {alpha:0, y:-200, ease:Linear.easeNone, stagger:0.1}, "f1+=2")
   .to(".box", .25, {scaleY:.7, ease:Linear.easeNone, stagger:0.05}, "f1+=2.16")
   .to(".box", .25, {scaleY:1.1, ease:Linear.easeNone, stagger:0.05}, "f1+=2.4")
   .to(".box", .2, {scaleY:.9, ease:Linear.easeNone, stagger:0.05}, "f1+=2.65")
   .to(".box", .2, {scaleY:1, ease:Linear.easeNone, stagger:0.05}, "f1+=2.8")

   .from(".txt2", .5, {alpha:0, y:15, ease:Sine.easeOut, stagger:0.2}, "f1+=3")
   .from(".cta", .5, {alpha:0, y:10, scaleX:.7, ease:Expo.easeOut}, "f1+=4")
   .from(".cta-txt", .75, {alpha:0, ease:Sine.easeOut, onComplete:hoverInOut}, "f1+=4")
   .to("canvas", .5, {alpha:0, ease:Sine.easeOut}, "f1+=6")               
;



/*-------------------------------------
  Window Onload...
---------------------------------------*/
window.onload = function() {
  mtl.play();
}


var currentDuration = mtl.totalDuration();
// console.log(currentDuration);


/*-------------------------------------
  Hover effect...
---------------------------------------*/
function hoverInOut(){
  ctaAnimation = true;
}

clicktag.addEventListener("mouseenter", function(){
  if(ctaAnimation){    
    TweenMax.to(".cta", .25, {background: "#174f44", ease:Sine.easeOut})
  }
})

clicktag.addEventListener("mouseleave", function(){
  if(ctaAnimation){ 
   TweenMax.to(".cta", .25, {background: "#277567", ease:Sine.easeOut})
  }
})