var https = require('https');   
function getHTML (options, callback) {

    /* Add your code here */
    var body = " ";
    https.get(requestOptions, function (options) {

        // set encoding of received data to UTF-8
        options.setEncoding('utf8');
        if(options.statusCode !== 200 ){
            callback("Request failed with status code" + options.statusCode);
        }
      
        // the callback is invoked when a `data` chunk is received
        callback("I am runnning");
        options.on('data', function (data) {
            
            body += data;
            callback(body);
          
        });
      
        // the callback is invoked when all of the data has been received
        // (the `end` of the stream)
        options.on('end', function() {
          callback('Response stream complete.');
        });
      });
    
  
  }
  
  function printHTML (html) {
    console.log(html);
    
  }
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

  getHTML(requestOptions,printHTML);