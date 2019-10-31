const vowels = "aeiouyåäö";
const consonants = "bcdfghjklmnpqrstvwxyz";
const exceptions = "j";

export function toRobber(string) {
  const re = new RegExp(`[${consonants}]`, "gi");
  return string.replace(re, match => `${match}o${match.toLowerCase()}`);
}

export function toPlang(string) {
  const re = new RegExp(`[${vowels}]`, "gi");
  return string.replace(re, match => `${match}p${match.toLowerCase()}`);
}

export function toIlang(string) {
  const re = new RegExp(`[${vowels}]`, "gi");
  return string.replace(re, () => "i");
}

export function toFiglang(string) {
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
