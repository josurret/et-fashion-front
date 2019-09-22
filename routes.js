const routes = module.exports = require('next-routes')()

routes
    .add('index', '/')
    .add('about', '/about', 'about')
    .add('login', '/login', 'login')
    .add('contactus', '/contactus', 'contactus')