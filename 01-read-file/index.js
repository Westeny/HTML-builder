var fs = require('fs')
var stream = new fs.ReadStream("01-read-file/text.txt");

stream.on('readable', function(){
    var data = stream.read();
    if(data != null)console.log(String(data));
});
 
stream.on('end', function(){
    console.log();
});