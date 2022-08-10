If we have multiple test scenarios to run, we can group them inside the describe block.

Inside the describe (), we can create multiple it() for each scenario. We can use the .only() and .skip() on the it() to run only a test scenario or skip a certain test scenario e.g it.only(' invalid login', ()=>{test script})


we can use the beforeEach(), the beforeEach () doesnt need a title,we just have to provide an annonymous function and then write the actions we want to carryout before every other events runs.

We can create a beforeEach() inside the e2e.js file of the support folder. Doing this will ensure that the scripts we write inside the beforeEach() gets executed before all spec files in that project unlike using the beforeEach() inside a specific spec file.