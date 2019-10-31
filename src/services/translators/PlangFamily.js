import Abstract, { vowels } from "./Abstract";

export default class PlangFamily extends Abstract {
  constructor(fillerConsonant) {
    super();
    Object.assign(this, { fillerConsonant });
  }

  to(string) {
    const re = new RegExp(`[${vowels}]`, "gi");
    return string.replace(
      re,
      match => `${match}${this.fillerConsonant}${match.toLowerCase()}`
    );
  }
}
