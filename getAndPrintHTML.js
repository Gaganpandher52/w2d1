
var https = require('https');    

function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };

    /* Add your code here */
    var body = " ";
    https.get(requestOptions, function (response) {

        // set encoding of received data to UTF-8
        response.setEncoding('utf8');
        if(response.statusCode !== 200 ){
            console.log("Request failed with status code" + response.statusCode);
        }
      
        // the callback is invoked when a `data` chunk is received
        console.log("I am runnning")
        response.on('data', function (data) {
            
            body += data;
            console.log(body + '\n');
          
        });
      
        // the callback is invoked when all of the data has been received
        // (the `end` of the stream)
        response.on('end', function() {
          console.log('Response stream complete.');
        });
      });
  }
  console.log(getAndPrintHTML())