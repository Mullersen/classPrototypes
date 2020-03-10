$(document).ready(function() {
    console.log("loaded");
    $(".animsition").animsition({
        inClass: 'rotate-in',
        outClass: 'rotate-out',
        inDuration: 1500,
        outDuration: 800,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function(url) { window.location.href = url; }
    });
});



class kanyeQuote {
    constructor(quote) {
        this.kanyeQuote = quote;
    }
    shoutingkanye() {
        var upperCase = this.kanyeQuote.toUpperCase();
        $('#quoteContainer').append(upperCase);
    }
    replace() {
        var string = this.kanyeQuote.replace('I', 'Dumbass');
        $('#quoteContainer').append(string);
    }

}


$.ajax({
    'url': 'https://api.kanye.rest/',
    'data': {},
    'type': 'GET',
    'dataType': "json",
}).done(
    function(resultJson) {
        var myKanyeQuote = new kanyeQuote(resultJson.quote);
        myKanyeQuote.shoutingkanye();
        myKanyeQuote.replace();
    }).fail(
    function(xhr, status, error) {
        console.log("there was an error" + error);
    }).always(
    function(whr, request) {
        console.log("request complete");
    })