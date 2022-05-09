
(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '../references/gears_ai_svg/gear_both_l.svg';
    document.getElementsByTagName('head')[0].appendChild(link);
})();

var favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));