import Abstract, { consonants, vowels } from "./Abstract";

const wordletters = vowels + consonants;

export default class PigLatinFamily extends Abstract {
  constructor(vowelSuffix, consonantSuffix) {
    super();
    Object.assign(this, { vowelSuffix, consonantSuffix });
  }

  to(string) {
    const words = new RegExp(`[${wordletters}]*`, "giu");
    const wordStartsWithVowel = new RegExp(
      `^[${vowels}]+[${wordletters}]+`,
      "i"
    );
    const wordStartsWithConsonants = new RegExp(
      `^([${consonants}]+)([${wordletters}]+)`,
      "i"
    );

    return string.replace(words, word => {
      if (wordStartsWithVowel.test(word)) {
        word = word.replace(new RegExp(`[${vowels}]+$`, "i"), "");
        return `${word}${this.vowelSuffix}`;
      } else {
        return word.replace(
          wordStartsWithConsonants,
          `$2$1${this.consonantSuffix}`
        );
      }
    });
  }
}
