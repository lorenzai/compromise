var test = require('tape');
var nlp = require('./lib/nlp');
var str_test = require('./lib/fns').str_test;


test('keyword emojis', function (t) {
  [
    ['he is so nice :heart:', ':heart:'],
    [':cool: :wine_glass: yeah party', ':cool: :wine_glass:'],
    ['to be or not to be: this is a question :cookie:', ':cookie:'],
  ].forEach(function (a) {
    var have = nlp(a[0]).match('#Emoji').plaintext()
    var msg = 'have: \'' + have + '\'  want: \'' + a[1] + '\''
    t.equal(have, a[1], msg);
  });
  t.end();
});

test('unicode emojis', function (t) {
  [
    ['nice job 💯 ❤️', '💯 ❤️'],
    ['💚 good job 🎇', '💚 🎇'],
    ['visit Brunei', ''],
    ['visit Brunei 🇧🇳', '🇧🇳'],
    ['visit Brunei 🇧🇳🇧🇳🇧🇳', '🇧🇳🇧🇳🇧🇳'],
  ].forEach(function (a) {
    var have = nlp(a[0]).match('#Emoji').plaintext()
    var msg = 'have: \'' + have + '\'  want: \'' + a[1] + '\''
    t.equal(have, a[1], msg);
  });
  t.end();
});

test('emoticon emojis', function (t) {
  [
    ['nice job :)', ':)'],
    [';) good work', ';)'],
    [';( oh no :(', ';( :('],
    ['to be: that is th3 question', ''],
    ['</3 </3 </3 sad', '</3 </3 </3'],
    // ['</3</3', '</3</3'],
  ].forEach(function (a) {
    var have = nlp(a[0]).match('#Emoji').plaintext()
    var msg = 'have: \'' + have + '\'  want: \'' + a[1] + '\''
    t.equal(have, a[1], msg);
  });
  t.end();
});
