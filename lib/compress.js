/**
 * [compress image]
 * @param  {[Number]} percent [0<percent<=100]
 * @return {[tufu]}
 */
module.exports = compress = function(percent){
	if(percent>0){
		this.quality = percent;
	}
	return this;
};