/**
 * encode.js
 * This file contains a function that
 * converts special symbols to
 * HTML encoded values
 * For exmaple:
 *   Special symbol: ♠
 *   will be converted to &#9824
 * For another example:
 *   Special symbol sequence: ☉☇☉
 *   will be converted to &#9737&#9735&#9737
 */
module.exports = function(originalSmiley) {
    var length = originalSmiley.length;
    var encodedSmiley = "";
    for (var i = 0; i < length; i++) {
        encodedSmiley += "&#" + originalSmiley.charCodeAt(i);
    }
    return encodedSmiley;
}
