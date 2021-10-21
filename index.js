const Metalsmith = require('metalsmith');

Metalsmith(__dirname)
    .source('./src')
    .destination('./docs')  
    .clean(true)             
    .build(function (err) {  
        if (err) {
            throw err;
        }
    });