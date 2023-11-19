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

document.getElementById('move_output').innerHTML = "Moving blocks";
var animation = anime({
    targets: '.test_move',
    translateX: 100,
    rotate: '1turn',
    /*backgroundColor: '#FFF',*/
    duration: function(el, i) { return i+1 * 1000; },
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine'
});
document.querySelector('#move_restart').onclick = function(){document.querySelector('#move_restart').innerHTML = "Test" /*animation.restart();*/}

