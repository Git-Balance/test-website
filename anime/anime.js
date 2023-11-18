import anime from '../node_modules/animejs/lib/anime.es.js';

/*anime({
  targets: "div.box",
  translateY: [
    { value: 200, duration: 500 },
    { value: 0, duration: 800 },
  ],
  rotate: {
    value: "1turn",
    easing: "easeInOutSine",
  },
  delay: function (el, i, l) {
    return i * 1000;
  },
  loop: true,
}); */

document.getElementById('output').innerHTML = "From JS";
anime({
    targets: 'div',
    translateX: 250,
    rotate: '1turn',
    /*backgroundColor: '#FFF',*/
    duration: 2000,
    loop: true
});
