/**
 * [scale]
 * @param  {[Number]} factor [0<factor,0.5 is half width&height of image,2 is double size of image. etc]
 * @return {[tufu]}
 */
module.exports = scale = function(scalex,scaley){
	var data = this.imageData.data;
	var width = this.imageData.width;
	var height = this.imageData.height;

	var desWidth = Math.floor(width*scalex);
	var desHeight = Math.floor(height*scaley);

	var offsetx = 1/scalex;
	var offsety = 1/scaley;

	var newData = [];
	for (var row = 0; row < desHeight; row++) {
		for(var col = 0; col < desWidth; col++){
			var i = Math.floor(row*offsety)*width+Math.floor(col*offsetx);
			i *= 4;
			newData.push(data[i]);
			newData.push(data[i+1]);
			newData.push(data[i+2]);
			newData.push(data[i+3]);
		}
	}
	this.imageData.data = newData;
	this.imageData.width = desWidth;
	this.imageData.height = desHeight;

	return this;
};