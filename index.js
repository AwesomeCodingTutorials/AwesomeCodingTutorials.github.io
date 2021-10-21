const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown')
const layouts = require('metalsmith-layouts')
const partials = require('metalsmith-discover-partials')
const permalinks = require('metalsmith-permalinks')
const assets = require('metalsmith-assets-improved')

Metalsmith(__dirname)
    .source('./src')
    .use(assets({
        src: 'assets',
        dest: 'assets',
        replace: 'all'
    }))
    .use(partials())
    .use(markdown())
    .use(
        permalinks({
            pattern: ':title'
        })
    )
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