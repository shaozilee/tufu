/**
 * [cut image]
 * @param  {[Number]} x      x coordinate of source image
 * @param  {[Number]} y      y coordinate of source image
 * @param  {[Number]} width  desimage width
 * @param  {[Number]} height desimage height
 * @return {[tufu]} current tufu
 */
module.exports = cut = function(x,y,width,height) {
	var row = y+height,
		sourceWidth = this.imageData.width,
		sourceData = this.imageData.data,
		tempData = [],
		start=0,
		offset=0;

	for (var i = y; i < row; i++) {
		start = (i*sourceWidth+x)*4;
		offset = width*4;
		tempData = tempData.concat(sourceData.slice(start,start+offset));
	}

	tempData = Buffer.concat(tempData);

	this.imageData = {
		data:tempData,
		width:width,
		height:height
	};

	return this;
};