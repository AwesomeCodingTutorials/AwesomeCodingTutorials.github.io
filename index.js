const Metalsmith = require('metalsmith');

Metalsmith(__dirname)
    .source('./src')
    .destination('./build')  
    .clean(true)             
    .build(function (err) {  
        if (err) {
            throw err;
        }
    });