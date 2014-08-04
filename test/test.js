var tufu = require("../index");

tufu("./bg.jpg").compress(50).save("./bg1.jpg");

tufu("./bg.jpg").cut(0,100,200,300).save("./bg2.jpg");

tufu("./bg.jpg").scale(0.5,1).save("./bg3.jpg");

tufu("./bg.jpg").resize(100,200).save("./bg4.jpg");

tufu("./bg.jpg").resize(500,500).save("./bg5.jpg");

tufu("./bg.jpg").thumbnail("80x80% center").save("./bg6.jpg");
