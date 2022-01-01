# github-actions-ci-cd-nodejs

# install dependencies
npm install



# Explain Packages installed

* cross-env - 
an operating system agnostic package for setting environment variables. We used it to set the NODE_ENV to test so that our test can use the test database. Run the command below to install cross-env.

`npm i -D cross-env`

* Jest - 
Jest is a JavaScript testing framework developed by Facebook. It works out of the box with minimal configuration and has in-built test runner, assertion library and mocking support.

* Supertest - 
A library for testing Node.js HTTP servers. It enables us to programmatically send HTTP requests such as GET, POST, PATCH, PUT, DELETE to HTTP servers and get results.

`npm install --save-dev jest supertest`


-----------------------------------------------

https://jestjs.io/docs/configuration