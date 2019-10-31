import Abstract, { vowels } from "./Abstract";

class Ilang extends Abstract {
  to(string) {
    const re = new RegExp(`[${vowels}]`, "gi");
    return string.replace(re, () => "i");
  }
}

export default new Ilang();
