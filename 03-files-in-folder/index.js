var fs = require('fs');

var path = "03-files-in-folder/secret-folder";


fs.readdir(path,{withFileTypes: true}, function(err, items) {
    for (var i=0; i<items.length; i++) {
        if(items[i].isDirectory() == false){
        var file = path + '/' + items[i]['name'];
        fs.stat(file, generate_callback(file));
    }
    }
});
 
function generate_callback(file) {
    return function(err, stats) {
            console.log(file.split('/').pop().replace('.', ' - ') + ' - ' + stats['size']);
            // console.log(stats);
        }
};




// ```example - txt - 128.369kb```