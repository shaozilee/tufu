var tufu = require("../index");

tufu("./bg.jpg").cut(0,100,200,300).compress(100).save("./bg2.jpg");
