var fs = require("fs");

/**
 * [adaptCodec]
 * @param  {[Buffer]} buffer [image file's binary]
 * @return {[Object]}        [Adapter of codec]
 * 
 */
Tufu.adaptCodec = function(buffer){
	return require("jpeg-js");
};

Tufu.plugin = function(pname,fun){
	Tufu.prototype[pname] = fun;
};


/**
 * start of Tufu
 * @param  {[String]} filePath
 * @return {[Tufu]} new instance Tufu
 */
function Tufu(src){
	if(!(this instanceof Tufu)){
		return new Tufu(src);
	}
	this.src = src;
	var jpegData = fs.readFileSync(this.src);
	this.codec = Tufu.adaptCodec(jpegData);
	this.imageData = this.codec.decode(jpegData);
	//set image quality 100%
	this.quality = 100;
}
/**
 * [save file]
 * @param  {[String]} desPath [file destination]
 * @return {[Tufu]}         [description]
 */
Tufu.prototype.save = function(desPath){
	var jpegImageData = this.codec.encode(this.imageData, this.quality);
	fs.open(desPath?desPath:this.src,'w+',function(err,fd){
		fs.writeSync(fd, jpegImageData.data, 0, jpegImageData.data.length);
	});
	//reset quality
	this.quality = 100;
	return this;
};

module.exports = Tufu;








