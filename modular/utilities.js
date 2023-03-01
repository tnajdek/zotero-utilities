/**
 * Performs a deep copy of a JavaScript object
 * @param {Object} obj
 * @return {Object}
 */
function deepCopy(obj) {
    var obj2 = (Array.isArray(obj) ? [] : {});
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;

        if (typeof obj[i] === "object" && obj[i] !== null) {
            obj2[i] = deepCopy(obj[i]);
        } else {
            obj2[i] = obj[i];
        }
    }
    return obj2;
}

/**
 * Removes leading and trailing whitespace from a string
 * @type String
 */
function trim(/**String*/ s) {
    if (typeof (s) != "string") {
        throw new Error("trim: argument must be a string");
    }

    s = s.replace(/^\s+/, "");
    return s.replace(/\s+$/, "");
}

/**
 * Cleans whitespace off a string and replaces multiple spaces with one
 * @type String
 */
function trimInternal(/**String*/ s) {
    if (typeof (s) != "string") {
        throw new Error("trimInternal: argument must be a string");
    }

    s = s.replace(/[\xA0\r\n\s]+/g, " ");
    return trim(s);
}

/**
 * Pads a number or other string with a given string on the left
 *
 * @param {String} string String to pad
 * @param {String} pad String to use as padding
 * @length {Integer} length Length of new padded string
 * @type String
 */
function lpad(string, pad, length) {
    string = string ? string + '' : '';
    while (string.length < length) {
        string = pad + string;
    }
    return string;
}

module.exports = {
	deepCopy,
	trim,
	trimInternal,
	lpad
}
