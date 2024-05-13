
/**
 * Task: use the Star Wars API to fetch the character with the given ID.
 *  - The user can input a character ID in an input field.
 *  - You can choose between `then` and async-await syntax.
 *  - Use the Star Wars API: https://swapi.dev/
 * 
 *      Usage: GET https://swapi.dev/api/people/<n> where <n> is the id of the character.
 *      Example: GET https://swapi.dev/api/people/1 will return the first character.
 * 
 *  - Show the character's name in the div with ID "character" separated with a comma, 
 *     if the response's status code is between 200 and 299.
 *  - Show a friendly error message in the "errorMessage" div, e.g. "Could not get the character",
 *      if the status code is outside of this range.
 *      You can test for example a 404 error code with the 999 ID.
 *  - Show a fridenly error message in the "errorMessage" div, if the fetch's promise rejects, 
 *      You can test this scenario, if you mistype the domain
 *      in the fetch, e.g "https://swapioops.dev/api/people/1" or choosing "Offline" network condition
 *      in the network panel. 
 * 
 * Goal: Use fetch with error handling.
 */

const handleLoadCharacter = () => {
  const characterId = document.getElementById('characterId').value;

  // write your code here

}
const characterButton = document.getElementById('loadCharacter')
characterButton.addEventListener('click', handleLoadCharacter)