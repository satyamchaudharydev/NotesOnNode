This content is from [express official doc](https://expressjs.com/en/guide/using-middleware.html)

## Middlewares in Express
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

1. Execute any code.
2. Make changes to the request and the response objects.
3. End the request-response cycle.
4. Call the next middleware function in the stack.
5. If the current middleware function does not end the request-response cycle, it must 6 call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

### Application-level middleware
Bind application-level middleware to an instance of the app object by using the app.use() and app.METHOD() functions, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

This example shows a middleware function with no mount path. The function is executed every time the app receives a request.

``` javascript
const express = require('express')
const app = express()

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
```
This example shows a middleware function mounted on the /user/:id path. The function is executed for any type of HTTP request on the /user/:id path.

``` javascript app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})
```
### Router-level middleware
Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of express.Router().

``` javascript
const router = express.Router()
```
Load router-level middleware by using the router.use() and router.METHOD() functions.

The following example code replicates the middleware system that is shown above for application-level middleware, by using router-level middleware:

``` javascript
const express = require('express')
const app = express()
const router = express.Router()

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})
```

