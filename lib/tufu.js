var fs = require("fs");

/**
 * [adaptCodec]
 * @param  {[Buffer]} buffer [image file's binary]
 * @return {[Object]}        [Adapter of codec]
 * 
 */
Tufu.adaptCodec = function(buffer){
	var flag = buffer.toString('hex', 0, 2).toUpperCase();
	switch(flag){
		case"FFD8":
		return require("jpeg-js");
		case"424D":
		return require("bmp-js");
		case"4749":
		return require("gif-js");
		case"8950":
		return require("png-js");
	}
	
	throw new Error("no codec to use");
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
	var bufferData = fs.readFileSync(this.src);
	this.codec = Tufu.adaptCodec(bufferData);
	this.imageData = this.codec.decode(bufferData);
	//set image quality 100%
	this.quality = 100;
}
/**
 * [save file]
 * @param  {[String]} desPath [file destination]
 * @return {[Tufu]}         [description]
 */
Tufu.prototype.save = function(desPath){
	var encodeData = this.codec.encode(this.imageData, this.quality);
	fs.open(desPath?desPath:this.src,'w+',function(err,fd){
		fs.writeSync(fd, encodeData.data, 0, encodeData.data.length);
	});
	//reset quality
	this.quality = 100;
	return this;
};

module.exports = Tufu;








