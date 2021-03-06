define(['Modernizr', 'createElement', 'prefixes'], function( Modernizr, createElement, prefixes ) {
// cubic-bezier values can't be > 1 for Webkit until bug #45761 (https://bugs.webkit.org/show_bug.cgi?id=45761) is fixed
// By @calvein

Modernizr.addTest('cubicbezierrange', function() {
    var el = createElement('div');
    el.style.cssText = prefixes.join('transition-timing-function' + ':cubic-bezier(1,0,0,1.1); ');
    return !!el.style.length;
});

});
