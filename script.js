var crsr =document.querySelector("#cursor")
var blur =document.querySelector("#cursor-blur")



gsap.registerPlugin(ScrollTrigger);


document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+10 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200 + "px"

})

// var crsr = document.querySelector("#cursor");
// document.addEventListener("mousemove", function(event) {
//   crsr.style.left = event.clientX + "px";
//   crsr.style.top = event.clientY + "px";
// });

gsap.to("#nav",{
    backgroundColor :"black",
    duration :0.5,
    height :"110px",
    scrollTrigger :{
        Trigger:"#nav",
        scroller:"body",
        markers :true,
        start :"top -10%",
        end :"top -11%",
        scrub:1
    }

})

gsap.to("#main",{
    backgroundColor :"#000",
    scrollTrigger :{
        Trigger :"#main",
        scroller :"body",
        markers : true,
        srart : "top -25%",
        end :"top -70%",
        scrub :2

    }
})

// var h4all = document.querySelectorAll("#nav h4")
// h4all.forEach(function(elem){
//     elem.addEventListener("mouseenter" , function(){
//         crsr.style.scale = 2
//         crsr.style.border = "1px solid #fff"
//         crsr.style.backgroundColor = "transparent"
//     })

//     elem.addEventListener("mouseleave" , function(){
//         crsr.style.scale = 1
//         crsr.style.border = "0px solid #95C11E"
//         crsr.style.backgroundColor = "#95C11E"
//     })
// });



var h4all = document.querySelectorAll("#nav h4");

// Corrected forEach method and applying scale using transform
h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        crsr.style.transform = "scale(2)";  // Correct way to scale the element
        crsr.style.border = "1px solid #fff";  // Apply border
           crsr.style.backgroundColor = "transparent"
    });

    elem.addEventListener("mouseleave", function() {
        crsr.style.transform = "scale(1)";  // Reset scale on mouse leave
        crsr.style.border = "";  // Reset border on mouse leave
           crsr.style.backgroundColor = "#95C11E"
    });
});


gsap.from("about-us img #about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        Trigger:about-using,
        scroller:"body",
        markers:true,
        start: "top 60%",
        end: "top 55%",
        scrub:3

    }

})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        markers: true,
        start: "top 55%",
        end: "top 55%",
        scrub: 4
    }
});


gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        markers: true,
        start: "top 55%",
        end: "top 55%",
        scrub: 4
    }
});

