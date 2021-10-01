"use strict";
var device_1 = require("./lib/device");
module.exports = function supportsInputFormatting() {
    // Digits get dropped in samsung browser
    return !device_1.isSamsungBrowser();
};
