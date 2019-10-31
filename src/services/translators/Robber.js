import Abstract, { consonants } from "./Abstract";

class Robber extends Abstract {
  to(string) {
    const re = new RegExp(`[${consonants}]`, "gi");
    return string.replace(re, match => `${match}o${match.toLowerCase()}`);
  }
}

export default new Robber();
