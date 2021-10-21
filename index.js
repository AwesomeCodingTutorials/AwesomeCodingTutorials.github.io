const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown')
const layouts = require('metalsmith-layouts')

Metalsmith(__dirname)
    .source('./src')
    .use(markdown())
    .use(
        layouts({
            default: 'master.hbs',
            engine: 'handlebars'
        })
    )
    .destination('./docs')  
    .clean(true)             
    .build(function (err) {  
        if (err) {
            throw err;
        }
    });