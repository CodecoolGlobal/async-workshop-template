import { openSchrodringerBox, sleep } from "./promises.js";

/*
  - Create a function that opens 2 Schrödringer boxes.
  - Each box waits 2 secs before open (chain the openSchrodringer's promise with the sleep promise).
  - Use Promise.allSettled() or Promise.all() to run the promises concurrently.
  - If at least one cat is dead 😿, show a message "Ooops, one cat is lost one life."
  - If all cats are survive, show the cats name.

  Goal: Concurrent execution of chained promises with error handling.

  Questions:
    - What is the difference between Promise.all() and Promise.allSettled()
      when at least on of the promises are rejected?

*/

const task = () => {

}

task()