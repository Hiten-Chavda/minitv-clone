var tl = gsap.timeline();
tl.from("nav",{
    y:-100,
    duration:1,
    delay:0.7,
})
tl.from(".arrange",{
    x:-1500,
    duration:0.7,
})
tl.from(".first",{
    y:1000,
    duration:0.7,
})
tl.from(".second",{
    y:1000,
    duration:0.7,
    delay:0.1,
})
   