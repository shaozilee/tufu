A pure js image processing tool
===
tufu is an image processing tool that likes gm,but it is lightweight without installing other software.
U just run 'npm install tufu',then use it.

So far,it supports image format:**jpg**、**bmp**

Install
---

	npm install tufu


How to use ?
---

``` js
var tufu = require("tufu");

//cut image and save as path
tufu("./bg.jpg").cut(0,100,200,300).save("./bg2.jpg");

OR 
//cut image,compress quality 60%,save as path
tufu("./bg.jpg").cut(0,100,200,300).compress(60).save("./bg2.jpg");

```
Interface
---
cut

resize

compress

scale

thumbnail(will be coming)

License
---
U can use on free with [MIT License](https://github.com/shaozilee/tufu/blob/master/LICENSE)






