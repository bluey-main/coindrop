
anime({
    targets: '.innertxt-div p',
    translateX: 250,
    delay: anime.stagger(100, {direction: 'reverse'}),
    direction: 'alternate',
    loop: true,
    easing: 'cubicBezier(.5, .05, .1, .3)'
})

anime({
    targets: '.headtext-div h1',
    width: '70%', // -> from '28px' to '100%',
    easing: 'easeInOutQuad',
    direction: 'alternate',
    loop: true
});
anime({
    targets: '.image-div',
    translateY:20, // -> from '28px' to '100%',
    easing: 'easeInOutQuad',
    delay:  anime.stagger(200, {start: 900}),
    direction: 'alternate',
    scale:1.01211,
    loop: true
});
anime({
    targets: '.textbox p',
    translateX: 270,
    delay: anime.stagger(100, {start: 500}), // delay starts at 500ms then increase by 100ms for each elements.
    direction: 'alternate',
    loop:true
})

anime({
    targets: '.bganimation .shape',
    translateX:700,
    translateY:120,
    scale: function(el, i, l) {
      return (l - i) + .1;
    },
    rotate: function() { return anime.random(-560, 960); },
    borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
    // duration: function() { return anime.random(1200, 1800); },
    delay: anime.stagger(1200, {start: 1200}),
    direction: 'alternate',
    easing: 'easeInOutQuad',
    loop: true
});


var btn = document.querySelector('.headtext-div a')

btn.addEventListener(onmouseover, function(){
    anime({
        targets: '.headtext-div a',
        translateX: 270,
        delay: anime.stagger(100, {from: 'center'})
    });
})

let imageDiv = document.querySelectorAll('.image-content .image-div')
let image = document.querySelectorAll('.image-content .image-div .img-box img')


imageDiv.forEach(e => {
    e.addEventListener(onclick, () =>{
        
    })
});

function myFunction() {
    image.forEach(p => {
        console.log(p)
    });
}