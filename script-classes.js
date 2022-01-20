/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import shoe from "./shoe";

//name,length,color,laces
const footWear = new shoe(
  "Everyday shoe",
  7,
  "white",
  2,
);

const content = `<main>
<article>
  <h1>${footWear.name}</h1>
  <ul>
    <li>Length: ${footWear.length}</li>
    <li>Color:${footWear.color}</li>
    <li>Number of laces: ${footWear.laces}</li>
  </ul>
</article>
</main>`;

document.body.innerHTML = content;
