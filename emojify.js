let emojis = {
  smile: "😄",
  wink: "😉",
  khushi: "😊",
  pyaar: "🥰",
  dukh: "🥲",
  dard: "🥲",
  peeda: "🥲",
  money: "🤑",
  hugs: "🤗",
  shuu: "🤐",
  haha: "😂",
  ded: "💀",
  dead: "💀",
};

let handler = {
  get: function (target, name) {
    // console.log(name);
    return target.hasOwnProperty(name) ? target[name] : "";
  },
};

emojis = new Proxy(emojis, handler);

Array.prototype.emojify = function () {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(`${this[i]} ${emojis[this[i]]}`.trim());
    // console.log("arr: " + this[i]);
  }
  return result;
};

const main = () => {
  let inputTag = document.querySelector("input[type='text']");
  let text = inputTag.value;
  let words = text.split(" ");
  let result = words.emojify().join(" ");
  console.log(result);
  inputTag.value = result;
  //   console.log("worked!");
  return false;
};
