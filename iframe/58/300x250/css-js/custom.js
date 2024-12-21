var banner = document.getElementById('banner');

var mtl = new TimelineMax({paused:true, repeat:2, repeatDelay:2});


  
  // ---- Animation Timelines ------  
  mtl.set(banner, {visibility: "visible"})
    .from(".txt2", .6, {alpha:0, ease:Sine.easeInOut})     
    .from(".txt3", .5, {alpha:0, ease:Sine.easeInOut})
    .to(".red-circle1", 1, {attr:{'stroke-dashoffset': 0}, ease:Expo.easeInOut})
    .to(".red-circle2", 1, {attr:{'stroke-dashoffset': 0}, ease:Expo.easeInOut}, '-=.7')
    .to(".red-circle3", 1, {attr:{'stroke-dashoffset': 0}, ease:Expo.easeInOut}, '-=.7')
    
    .add('objects', "-=.5")
    .from(".object1", .8, {x:-85, ease:Expo.easeOut}, 'objects')
    .from(".object2", .8, {y:150, ease:Expo.easeOut}, 'objects')
    .from(".object3", .8, {x:85, ease:Expo.easeOut}, 'objects')
    .from(".last_frame_bg", .4, {alpha:0, ease:Sine.easeOut})

    .from(".cta", .8, {x:-100, rotation:0.02, ease:Expo.easeOut})
    .from(".logo", .5, {x:200, rotation:0.02, ease:Expo.easeOut}, "-=.8")
    .from(".credit", .5, {alpha:0, rotation:0.02, ease:Power2.easeOut}, "-=.15")

    ;


//----- Marge TimeLines -----
    // mtl.add([tl1, tl2, tl3]);

//----- Window Onload ------
window.onload = function() { 
    mtl.play();
    initEB();
};

function initEB(){
    if (!EB.isInitialized()){
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    }else{
        startAd();
    }

    banner.addEventListener("click", function(event){
        EB.clickthrough();
    });
}

function startAd(){
    banner.style.visibility = "visible";
}

    var currentDuration = mtl.totalDuration();
    console.log(currentDuration); 