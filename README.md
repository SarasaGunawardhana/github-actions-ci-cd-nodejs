
[![codecov](https://codecov.io/gh/SarasaGunawardhana/github-actions-ci-cd-nodejs/branch/main/graph/badge.svg?token=H5LANOBRH6)](https://codecov.io/gh/SarasaGunawardhana/github-actions-ci-cd-nodejs)

# github-actions-ci-cd-nodejs


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



--------------------------------

# Run Software

###### install dependencies
> npm install

###### run locally
> npm run start

###### run tests
> npm run test

###### run code coverage
> npm run coverage

###### if you want to run in docker
make sure that you have installed docker and docker-compose
then just run 
> docker-compose up (build and start the service)

> docker-compose down (stop the service)

> docker-compose up --force-recreate --build -d (if you have changed the code and if you want to re-run the service without stopping, you can run this command)

