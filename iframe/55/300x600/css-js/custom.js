var banner = document.getElementById('banner');
var clicktag = document.getElementById('clicktag');
var ctaAnimation = false;


var mt = new TimelineMax({paused:true, repeat:0, repeatDelay:3}),
    tl1 = new TimelineMax(),
    tl2 = new TimelineMax();

  
// ---- Animation Timelines ------  
tl1.set(banner, {visibility: "visible"})
   .set(".cta", {backgroundColor: "#c22127"}) 
   .add(function(){ctaAnimation = false;})

   // Frame1 animation
   .addLabel("f1")
   .from(".logo", .25, {alpha:0, ease: Expo.easeOut}, "f1")
   .from(".bg", .5, {alpha:0, ease: Expo.easeOut}, "f1")
   .staggerFrom(".txt1", .5, {alpha:0, y:15, rotation:0.02, ease: Sine.easeOut}, 0.1, "f1+=.65")
   .from(".txt1c", .5, {alpha:0, ease: Sine.easeOut}, "f1+=1.15")
   // Circle animation 
   .to(".circle1 img", 1, {y:-6786, ease:SteppedEase.config(29)}, "f1")
   .from(".circle2", 1, {rotation:90, ease: Sine.easeOut}, "f1")
   .from(".semi-circle", 1.5, {alpha:0, ease: Sine.easeOut}, "f1")
   .to(".semi-circle .circle-bg1", 1.5, {x:-20, rotation:0.2, ease: Sine.easeOut}, "f1")
   .from(".camera1, .camera1_shadow", 1, {alpha:0, x:-30, rotation:0.4, ease: Sine.easeOut}, "f1+=.35")
   // Birds animation
   .from(".birds1", 4, {alpha:0, x:20, rotation:0.4, ease: Sine.easeOut}, "f1")
   .from(".birds2", 4, {alpha:0, x:-20, rotation:0.4, ease: Sine.easeOut}, "f1")
   .from(".birds3", 4, {alpha:0, y:-20, rotation:0.4, ease: Sine.easeOut}, "f1")
   .from(".birds4", 4, {alpha:0, y:20, rotation:0.4, ease: Sine.easeOut}, "f1")
   .from(".birds5", 4, {alpha:0, x:20, y:20, rotation:0.4, ease: Sine.easeOut}, "f1")
   .from(".camera1-name", .5, {alpha:0, ease: Sine.easeOut}, "f1+=.5")
   .from(".white-bar", .75, {width:0, rotation:0.02, ease: Expo.easeOut}, "f1+=1")
   .from(".red-bar", .75, {width:0, rotation:0.02, ease: Sine.easeOut}, "f1+=1.15")

   .staggerTo(".txt1, .txt1c", .5, {alpha:0, y:-15, rotation:0.02, ease: Sine.easeIn}, 0.1, "f1+=3.15")
   .to(".camera1, .camera1_shadow", 1, {alpha:0, rotation:0.02, ease: Expo.easeOut}, "f1+=3.15")
   .to(".birds, .camera1-name", .5, {alpha:0, ease: Sine.easeOut}, "f1+=3.15")
   .to(".semi-circle .circle-bg1", 1.5, {x:-200, rotation:0.02, ease: Expo.easeOut}, "f1+=3.5")
   .from(".semi-circle .circle-bg2", 1.5, {x:220, rotation:0.2, ease: Expo.easeOut}, "f1+=3.5")


   // Frame2 animation
   .addLabel("f2", "f1+=3.5")   
   .to(".semi-circle .circle-bg2", 1.5, {x:"-=20", rotation:0.02, ease: Sine.easeOut}, "f2+=.75")
   .from(".plane", 3, {alpha:0, scale:1.3, rotation:0.02, ease: Sine.easeOut}, "f2+=.75")
   .staggerFrom(".txt2", .5, {alpha:0, y:15, rotation:0.02, ease: Sine.easeOut}, 0.1, "f2+=.5")
   .from(".txt2b", .5, {alpha:0, ease: Sine.easeOut}, "f2+=1")
   .from(".camera2, .camera2_shadow", 1, {alpha:0, x:-30, rotation:0.4, ease: Sine.easeOut}, "f2+=.35")
   .from(".camera2-name", .5, {alpha:0, ease: Sine.easeOut}, "f2+=.5")
   .to(".white-bar", .5, {width:100,x:-14,  rotation:0.02, ease: Sine.easeOut}, "f2+=.5")
   .to(".red-bar", .5, {width:63, x:-14, rotation:0.02, ease: Sine.easeOut}, "f2+=.5")

   .to(".plane", .5, {alpha:0, ease: Sine.easeOut}, "f2+=3.25")
   .staggerTo(".txt2, .txt2b", .5, {alpha:0, y:-15, rotation:0.02, ease: Sine.easeIn}, 0.1, "f2+=3.25")   
   .to(".camera2, .camera2_shadow", 1, {alpha:0, rotation:0.02, ease: Expo.easeOut}, "f2+=3.25")
   .to(".camera2-name", .5, {alpha:0, ease: Sine.easeOut}, "f2+=3.25")   
   .to(".semi-circle .circle-bg2", 1.5, {x:-220, rotation:0.2, ease: Expo.easeOut}, "f2+=3.25")
   .from(".semi-circle .circle-bg3", 1.5, {x:220, rotation:0.2, ease: Expo.easeOut}, "f2+=3.25")

   .from(".hand, .camera3", .25, {alpha:0, ease: Sine.easeOut}, "f2+=3.25")
   .from(".hand", 2.5, {x:220, rotation:0.02, ease: Expo.easeOut}, "f2+=3.25")
   

   // Frame3 animation
   .addLabel("f3", "f2+=3.25")   
   .to(".semi-circle .circle-bg3", 1.5, {x:"-=10", rotation:0.2, ease: Sine.easeOut}, "f3+=.75")

   .staggerFrom(".txt3", .5, {alpha:0, y:15, rotation:0.2, ease: Sine.easeOut}, 0.1, "f3+=.5")
   .from(".txt3c, .txt3d", .5, {alpha:0, rotation:0.2, ease: Sine.easeOut}, "f3+=1")
   .from(".camera3", 1, {x:-30, rotation:0.4, ease: Sine.easeOut}, "f3")
   .from(".camera3-name", .5, {alpha:0, ease: Sine.easeOut}, "f3+=.25")
   .to(".red-bar", .5, {width:68, rotation:0.02, ease: Sine.easeOut}, "f3+=.75")
   

   // Frame4 animation
   .addLabel("f4", "f3+=3.75")
   .staggerTo(".txt3, .txt3c, .txt3d", .5, {alpha:0, y:-15, rotation:0.02, ease: Sine.easeIn}, 0.1, "f4")
   .to(".semi-circle, .hand, .camera3-name, .red-bar, .white-bar, .clouds, .circle1, .circle2", .25, {alpha:0, ease: Sine.easeOut}, "f4+=.25")
   .to(".camera3", .5, {alpha:0, ease: Sine.easeOut}, "f4+=.35")
   
   .from(".circle3, .circle4, .circle-shadow", .25, {alpha:0, ease: Sine.easeOut}, "f4+=.75")
   .to(".bg", .75, {y:-100, rotation:0.02, ease: Sine.easeOut}, "f4+=1")
   .to(".circle3 img", 1, {y:-6786, ease:SteppedEase.config(29)}, "f4+=1")
   .from(".circle4", 1, {rotation:90, ease: Sine.easeOut}, "f4+=1")
   .from(".camera-sm3", 1, {alpha:0, scale:0.5, rotation:0.2, ease: Expo.easeOut}, "f4+=1")
   .from(".camera-sm1, .camera-sm1-shadow", 1, {alpha:0, scale:0.5, x:-40, rotation:0.2, ease: Expo.easeOut}, "f4+=1.2")
   .from(".camera-sm2, .camera-sm2-shadow", 1, {alpha:0, scale:0.5, x: 20, rotation:0.2, ease: Expo.easeOut}, "f4+=1.3")
   .staggerFrom(".txt4", .5, {alpha:0, y:30, rotation:0.02, ease: Sine.easeOut}, 0.15, "f4+=1")
   .from(".cta", .5, {height:0, rotation:0.02, ease: Expo.easeOut}, "f4+=1.5")
   .from(".cta_txt", .5, {alpha:0, ease: Sine.easeOut}, "f4+=1.75")
   .add(function(){hoverInOut()})
;

tl2.from(".clouds", .5, {alpha:0, ease: Sine.easeOut}, "f1")
   .to(".cloud1", 12, {x:80, rotation:0.2, ease: Sine.easeOut}, "f1")
   .to(".cloud2", 10, {x:140, rotation:0.2, ease: Sine.easeOut}, "f1+=.25")
;


function stopAnimation(){
  mt.pause();
}

//----- Add timeline ------
mt.add([tl1, tl2]);


//----- Window Onload ------
window.onload = function() { 
  mt.play();
};


var currentDuration = mt.totalDuration();
console.log(currentDuration);



/*-------------------------------------
---------------------------------------*/
function hoverInOut(){
  ctaAnimation = true;
}

clicktag.addEventListener("mouseover", function(){
  if(ctaAnimation){    
   TweenMax.to(".cta", .5, {backgroundColor: "#e13a40",rotation:0.02, ease: Expo.easeOut})
  }
})

clicktag.addEventListener("mouseout", function(){
  if(ctaAnimation){    
   TweenMax.to(".cta", .5, {backgroundColor: "#c22127", rotation:0.02, ease: Expo.easeOut}) 
  }
})