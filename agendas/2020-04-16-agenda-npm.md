# Thu, 14 Apr 2020

- node.js: JavaScript on the server
- Pretty fast (as fast as v8 engine / Chrome)
- synchronous vs asynchronous!
  - by default, things are asynchronous
  - means: lots of callbacks and Promises
- npm: node package manager
  - package.json: file in your project, with data about your project
                   list of dependencies
     - please commit to git
  - node_modules/
    - do NOT commit to git
    - this is CREATED from package.json `npm install`
  - package-lock.json
    - please commit to git
    - do not edit by hand - this is controlled by npm directly
  - yarn - alternative to npm
- https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/
- exercises
