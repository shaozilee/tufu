var jpeg = require("jpeg-js");
var fs = require("fs");

/**
 * start of tufu
 * @param  {[String]} filePath
 * @return {[tufu]} new instance of tufu
 */
function tufu(filePath){
	if(!(this instanceof tufu)){
		return new tufu(filePath);
	}
	this.filePath = filePath;
	var jpegData = fs.readFileSync(this.filePath);
	this.imageData = jpeg.decode(jpegData);
	this.quality = 100;
}

tufu.plugin = function(pname,fun){
	tufu.prototype[pname] = fun;
};

tufu.prototype.save = function(filePath){
	var jpegImageData = jpeg.encode(this.imageData, this.quality);
	fs.open(filePath,'w+',function(err,fd){
		fs.writeSync(fd, jpegImageData.data, 0, jpegImageData.data.length);
	});
	//reset quality
	this.quality = 100;
	return this;
};

module.exports = tufu;








