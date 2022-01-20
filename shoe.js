/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class shoe {
  constructor(
    // Defines parameters:
    name,
    length,
    color,
    laces,
  ) {
    // Define properties:
    this.name = name;
    this.length = length;
    this.color = color;
    this.laces = laces;
    };
}

export default shoe;