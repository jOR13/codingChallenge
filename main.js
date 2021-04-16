// Simple coding exercise:

// In a programming language, Java 8 or above, write a program that parses a sentence and replaces each word with the following: first letter, number of distinct characters between first and last character, and last letter.
// Words are separated by spaces or non-alphabetic characters like (,%$;). Separators should be maintained in the output.

// For example:

// Input 1:                It was many and many a year ago
// Output 1:            I0t w1s m2y a1d m2y a y2r a1o

// Input 2:                Copyright,Microsoft:Corporation
// Output 2:            C7t, M6t: C7n

// User interface expectations:
// Input: Command Line Interface: One should be able to pass the argument (input) on the command line
// Output: Should print the output on the command line

// Please follow the rules below:

// • Code variables must be in English.
// • Use the main function arguments.
// • The function should not be static nor main.
// • The function should not use hardcoded values.
// • The function must be reusable.
// • Document your code.
// • Provide the file(s) in .zip format.

const findChar = (text, ch) => {
  let letters = "";
  for (var i = 0; i < ch.length; i++) {
    let letter = ch.charAt(i);
    for (var i2 = 0; i2 < text.length; i2++) {
      if (letter === text[i2]) {
        letters += text[i2];
      }
    }
    // console.log(letters);
  }

  for (var i = 0; i < ch.length; i++) {
    text = text.replace(ch[i], "");
  }

  //   console.log(text);
  let newText = `${text.substr(0, 1)}${text.length - 2}${text.substr(
    -1
  )}${letters}`;
  return newText;
};

const readSentence = (evt) => {
  let sentence = document.getElementById("sentence").value,
    filter = ",%$:;",
    resp = "";
  for (var i = 0; i < filter.length; i++) {
    let ch = filter[i];
    sentence = sentence.replace(ch, ch + " ");
  }

  let str = sentence.split(" ");
  str.map((x) => {
    let res = findChar(x, filter);
    if (x.length > 1) {
      resp += res + " ";
    } else {
      resp += x + " ";
    }
  });
  console.log(resp);
  document.getElementById("newSentence").innerHTML = resp;
};

// const readSentence = () => {
// //   const sentence = document.getElementById("sentence").value;
// //   let newSentence = [];

// //   let splitSentence = sentence.split(" ");

// //   splitSentence.map((x) => {
// //     if (x.length !== 1) {
// //       let xD = `${x.substr(0, 1)}${x.length - 2}${x.substr(-1)}`;
// //       newSentence.push(xD);
// //     } else {
// //       newSentence.push(x);
// //     }
// //   });

// //     console.log(newSentence.toString().replaceAll(",", " "));

// }
