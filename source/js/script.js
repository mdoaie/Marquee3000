const FontFaceObserver = require('fontfaceobserver');
const fontLeague = new FontFaceObserver('LeagueGothic');
const fontRoboto = new FontFaceObserver('RobotoBlackItalic');
const Marquee3k = require('marquee3000');

Promise.all([fontRoboto.load()]).then(() => {
  Marquee3k.init();
});