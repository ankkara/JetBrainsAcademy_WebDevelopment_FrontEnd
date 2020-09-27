/* Rewrite the languageInfo function using the switch operator.

function languageInfo(language) {
  if (language === "JavaScript"){
    console.log("Begins on december 4, 1995");
  } else if (language === "Java") {
    console.log("Begins on may 23, 1995");
  } else if (language === "PHP") {
    console.log("Begins on june 8, 1995");
  }
}
 */

function languageInfo(language) {
    switch (language) {
        case "JavaScript":
            console.log("Begins on december 4, 1995");
            break;
        case "Java":
            console.log("Begins on may 23, 1995");
            break;
        case "PHP":
            console.log("Begins on june 8, 1995");
            break;
    }
}