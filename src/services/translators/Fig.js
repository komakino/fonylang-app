import Abstract, { consonants, vowels, exceptions } from "./Abstract";

class Fig extends Abstract {
  to(string) {
    const wordsRe = new RegExp(`[${consonants}${vowels}]+`, "gi");
    const splitRe = new RegExp(
      `([${consonants}]*[${vowels}]*[${exceptions}]?)(.*)`,
      "i"
    );
    return string.replace(wordsRe, word => {
      const match = word.toLowerCase().match(splitRe);
      if (match) {
        return `fi${match[2]} ${match[1]}kon`;
      }
      return word;
    });
  }
}

export default new Fig();
