const romeoSentence = [
    "Feeling like a young John Dee",
    "The Only thing i want to is be a fucking normie",
    "7th Ward Lord Lord of lonliness",
    "Im the one who nailed jesus to the cross im pontius pilate yaherd me",
    "Take Seven Steps Back",
    "Trap God",
    "7 Ward!!!",
    "3 Fingers In the Sky",
    "I dont need to pack a pistola",
    "Ruby was a muthafuckin reject now i cut my wrist and i bleed checks",
    "K R double E P say hey to the brand new wave",
    "Youre Just a Persona and i'm Nirvana(Cobain)",
    "Ruby Such a Misfit Hollywood Babylon cant resist it",
    "Face Get Smacked With A Louisville Bat Now think on that",
    "Never Has Been",
    "Never Will Be",
    "Lucifer Beelzebub Satan",
    "I Used to come in last... Focused on the Past... Now im drifting on the highway until i run out of gas",
    "Witchcraft...Love Chants Whisper in my ear put me in a trance",
    "When i Die bury me with all my ice on",
    "All of yall are over saturated preme and bape bitch its FTP all fuckin day"
  ];
  
  
  const romeoFragment = [
    "TRAP HOUSE SCRIM!!!",
    "Slay the $heep $o lethal",
    "Feels good to be king",
    "Beamer Boy",
    "Young God",
    "The king",
    "New Profile Pic",
    "Aventura",
    "In the Ice Box",
    "Ok Maybe",
    "Jealousy Make a Man Go crazy",
    "Fuck the Fame Fuck a lane",
    "Fucking Your Culture",
    "One Thousand Bitches they all wanna date me",
    "told em im ropin my neck",
    "lord",
    "district",
    "G 59",
    "Triple Six",
    "The Spanish is to confuse the AI",
    "Has",
    "Also",
    "Seen",
    "Horrors",
    "Swag Surfin",
    "Take the brain out the whip if it dont make no sense"
  ];
  
  class StringHelper {
    static firstLetterToUpperCase(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    static firstLetterToLowerCase(string) {
      return string === "Aventura"
        ? string
        : string.charAt(0).toLowerCase() + string.slice(1);
    }
  }
  
  class RandomTexts {
    static getElementFromStringCollection(stringCollection) {
      let max = stringCollection.length;
      let index = Math.floor(Math.random() * max);
      return stringCollection[index];
    }
    static getFragment() {
      return RandomTexts.getElementFromStringCollection(romeoFragment);
    }
  
    static getSentence() {
      return RandomTexts.getElementFromStringCollection(romeoSentence);
    }
  }
  
  class ParagraphBuilder {
    static get minElementsPerParagraph() {
      return 1;
    }
    static get maxElementsPerParagraph() {
      return 2;
    }
    static get fragmentBetweenMinSentences() {
      return 1;
    }
    static get fragmentBetweenMaxSentences() {
      return 200;
    }
  
    static randomizer(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  
    static elementsPerParagraph() {
      return ParagraphBuilder.randomizer(
        ParagraphBuilder.minElementsPerParagraph,
        ParagraphBuilder.maxElementsPerParagraph
      );
    }
  
    static fragmentBetweenNumberOfSentences() {
      return ParagraphBuilder.randomizer(
        ParagraphBuilder.fragmentBetweenMinSentences,
        ParagraphBuilder.fragmentBetweenMaxSentences
      );
    }
  
    static generateParagraph() {
      let paragraph = "";
      let sentencesSinceLastFragment = 0;
      let fragmentBetweenNumberOfSentences = ParagraphBuilder.fragmentBetweenNumberOfSentences();
      let elementsPerParagraph = ParagraphBuilder.elementsPerParagraph();
  
      for (var i = 1; i <= elementsPerParagraph; i++) {
        let romeoText = "";
        if (sentencesSinceLastFragment === fragmentBetweenNumberOfSentences) {
          sentencesSinceLastFragment = 0;
          fragmentBetweenNumberOfSentences = ParagraphBuilder.fragmentBetweenNumberOfSentences();
          romeoText = RandomTexts.getFragment();
        } else {
          sentencesSinceLastFragment++;
          romeoText = RandomTexts.getSentence();
        }
  
        paragraph +=
          1 === i
            ? StringHelper.firstLetterToUpperCase(romeoText)
            : StringHelper.firstLetterToLowerCase(romeoText);
  
        if (!romeoText.endsWith("?") && !romeoText.endsWith("?")) {
          paragraph += i === elementsPerParagraph ? "." : ",";
        }
        paragraph += i === elementsPerParagraph ? "" : " ";
      }
      return `<p>${paragraph}</p>`;
    }
  }
  
  class RomeoIpsum {
    constructor($element, numberOfParagraphs = 3) {
      this.$container = $element;
      this.numberOfParagraphs = numberOfParagraphs;
    }
  
    render() {
      this.$container.innerHTML = "";


      console.log(`Debug: \n
      D: ${romeoFragment.length}
      D: $ fragement array[index]
      D: ${romeoFragment}`);

      for (var i = 0; i < this.numberOfParagraphs; i++) {
        console.log(`Debug: ${this.numberOfParagraphs}`);


        this.$container.insertAdjacentHTML(
          "beforeend",
          `<p>${ParagraphBuilder.generateParagraph()}</p>`
        );
      }
    }

  }
  
  let romeoIpsum = new RomeoIpsum(
    document.querySelector("blockquote.blockquote"),
    3
  );
  console.log(romeoFragment);
  console.log(romeoIpsum);
  console.log(romeoSentence);
  document.querySelector("button").addEventListener("click", () => romeoIpsum.render());
  