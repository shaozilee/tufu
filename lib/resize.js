/**
 * [resize image]
 * @param  {[Number]} width  [desImage's width]
 * @param  {[Number]} height [desImage's height]
 * @return {[tufu]}
 */
module.exports = resize = function(width,height){
	var scalex = width/this.imageData.width;
	var scaley = height/this.imageData.height;
	this.scale(scalex,scaley);
	return this;
};