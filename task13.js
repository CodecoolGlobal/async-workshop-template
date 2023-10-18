import { openSchrodringerBox, sleep } from "./promises.js";

/*
  - Create a function that opens 3 Schrödringer boxes.
  - Each box waits 2 secs before open (chain the openSchrodringer's promise with the sleep promise).
  - Use Promise.allSettled() to run the promises concurrently.

  Goal: Concurrent execution of chained promises
  Questions:
    - What is the difference between Promise.all() and Promise.allSettled()
      when at least on of the promises are rejected?

*/

const task = () => {

}

task()