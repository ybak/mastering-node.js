var fs = require('fs');
var path = require('path');

//console.log(path.normalize('.'));
//
//fs.stat(".",function(err, stats){
//    console.log(stats);
//})
//fs.readdir('.', function(err, files) {
//    console.log(files); // list of all files in current directory
//});

//(function(dir) {
//    fs.readdir(dir, function(err, list) {
//        list.forEach(function(file) {
//            fs.stat(dir + "/" + file, function(err, stat) {
//                if(stat.isDirectory()) {
//                    return console.log("Found directory : " + file);
//                }
//                console.log("Found file : " + file);
//            });
//        });
//    });
//})("../");

//var emitter = new (require('events').EventEmitter);
//
//var walk = function (dir, done) {
//    var results = {};
//    fs.readdir(dir, function (err, list) {
//        var pending = list.length;
//        if (err || !pending) {
//            return done(err, results);
//        }
//        list.forEach(function (file) {
//            var dfile = dir + "/" + file;
//            fs.stat(dfile, function (err, stat) {
//                if (stat.isDirectory()) {
//                    emitter.emit('directory', dfile, stat);
//                    return walk(dfile, function (err, res) {
//                        results[file] = res;
//                        !--pending && done(null, results);
//                    });
//                }
//                emitter.emit('file', dfile, stat);
//                results[file] = stat;
//                !--pending && done(null, results);
//            });
//        });
//    });
//};
//
//emitter.on("directory", function (path, stat) {
//    console.log("Directory: " + path + " - " + stat.size);
//}).on("file", function (path, stat) {
//    console.log("File: " + path + " - " + stat.size);
//});
//
//walk(".", function (err, res) {
//    console.log(require('util').inspect(res, {depth: null}));
//})


fs.writeFile('test.txt', 'A string or Buffer of data', function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("file created.");
})