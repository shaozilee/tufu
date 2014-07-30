/**
 * this module is image processing tool
 *
 * @author shaozilee
 */


var tufu = require("./lib/tufu");
//add plugins
tufu.plugin("cut",require("./lib/cut"));
tufu.plugin("compress",require("./lib/compress"));
tufu.plugin("resize",require("./lib/resize"));
tufu.plugin("scale",require("./lib/scale"));
tufu.plugin("thumbnail",require("./lib/thumbnail"));

module.exports = tufu;








