# Async Workshop

You will learn on this workshop:

- Why javascript is working asynchron way. How does it affects the browser.
- How the promises are working?
- Error handling with promises.
- Async await syntax.
- How can you handle multiple promises.
- how can you create one of them.

## Setting up the repo

- 
- Download the live server.

## Async Demo

Why we need async Javascript?

- Start the live server.
- Open the `http://localhost:5500/demo`
- Check the responseiveness of the page:
  - Try out the on/off button.
  - Scroll the text.
  - Hover the buttons. 
- Click on the blocking button
  - check the responsivness again.
  - after the browser's unresponsive alert is shown, click to reload.
- Click the non blocking button
  - check the responsiveness again

## Creating Promises

- Open the `http://localhost:5500/waiting`
- Follow the live coding.

## Task1: Handle a success promise

- Open the `http://localhost:5500/task1`
- Work in the `task1/task1.js`
- Fill the click handler for `waitButton`.

Requirements:

- [ ] After about a 2 secs waiting the `The promise is successfully resolved: ${promiseValue}` message should be shown.
- [ ] `then` syntax is used.

## Task2: Chain promises

- Open the `http://localhost:5500/task1`
- Work in the `task1/task1.js`
- Fill the click handler for `waitButton2`.

Requirements:

- [ ] After about a 2 secs waiting the `The 1st promise is resolved: ${promiseValue}.` message should be shown.
- [ ] After about a 4 secs later the `The 2nd promise is resolved: ${promiseValue}.` message should be shown.
- [ ] `then` syntax is used.

## Task3: Chaining non promise values

- Open the `http://localhost:5500/task1`
- Work in the `task1/task1.js`
- Modify the click handler for `waitButton2`.

Requirements:

- [ ] After about a 2 secs waiting the `The 1st promise resolved: ${promiseValue}.` message should be shown.
- [ ] A string value (`I'm just a string.`) should be returned from a `then`'s callback.
- [ ] Right after the `Constant: ${resolvedValue}` message should be shown.
- [ ] `then` syntax is used.

## Task4: Handle errors

- Open the `http://localhost:5500/task1`
- Work in the `task1/task1.js`
- Modify the click handler for `waitButton3`.

Requirements:

- [ ] The `waitForUncertainty` promise is used.
- [ ] If the promise is resolved as a success, the `Promise is resolved as a success: ${promiseValue}` should be shown as a normal message.
- [ ] If the promise is resolved as a failure, the `Promise is resolved as a failure: ${promiseValue}` should be shown as an error message (colored red).

## Task5: Use the async await syntax

- Open the `http://localhost:5500/task1`
- Work in the `task1/task1.js`

Requirements:
  - [ ] Modify the `waitButton` click event handler function to use async, await syntax.
  - [ ] Modify the `waitButton2` click event handler function to use async, await syntax, original 2 promises version. (2 secs, 4 secs)

## Task6: Handle errors with the async await syntax

- Open the `http://localhost:5500/task1`
- Work in the `task1/task1.js`

Requirements:
  - [ ] Modify the `waitButton3` click event handler function to use async, await syntax with error handling.
