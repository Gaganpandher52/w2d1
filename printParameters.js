var https = require('https');   
function getAndPrintHTML (options) {

    /* Add your code here */
    var body = " ";
    https.get(requestOptions, function (options) {

        // set encoding of received data to UTF-8
        options.setEncoding('utf8');
        if(options.statusCode !== 200 ){
            console.log("Request failed with status code" + options.statusCode);
        }
      
        // the callback is invoked when a `data` chunk is received
        console.log("I am runnning")
        options.on('data', function (data) {
            
            body += data;
            console.log(body );
          
        });
      
        // the callback is invoked when all of the data has been received
        // (the `end` of the stream)
        options.on('end', function() {
          console.log('Response stream complete.');
        });
      });
  }
  
 
  
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

  getAndPrintHTML(requestOptions);