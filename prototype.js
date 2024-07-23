let spec = ["@", "#", "$", "&", "%"];

let h, m, s, l, pl;
const step = Math.floor(Math.random() * (9 - 1 + 1)) + 1;

function chars(arr) {
  if (arr.length === 0) {
    throw new Error("No items left to pick.");
  }
  let randomIndex = Math.floor(Math.random() * arr.length);
  let item = arr[randomIndex];
  arr.splice(randomIndex, 1); // Remove the item from the array

  return item;
}

function time() {
  const now = new Date();
  h = String(now.getHours()).padStart(2, '0');
  m = String(now.getMinutes()).padStart(2, '0');
  s = String(now.getSeconds()).padStart(2, '0');

  document.getElementById("time").innerText = `${h} ${m} ${s}`;

  return { h, m, s };
}

function randlet() {
  let code1 = Math.floor(Math.random() * (122 - 65 + 1)) + 65;
  let code2 = Math.floor(Math.random() * (122 - 65 + 1)) + 65;
  return String.fromCharCode(code1) + String.fromCharCode(code2);
}

function flang() {
  l = String(navigator.language).slice(0, 2);
  return l;
}

function addStepToLanguageCode(langCode, step) {
  return Array.from(langCode)
    .map(c => String.fromCodePoint(c.codePointAt(0) + step))
    .join('');
}

function staticprocessor() {
  time();

  // Adjust time variables
  h = (parseInt(h) + step) % 24;
  m = (parseInt(m) + step) % 60;
  s = (parseInt(s) + step) % 60;

  flang();
  // Convert the language code and add step
  let processedLang = addStepToLanguageCode(l, step);

  // If you need to do something with `processedLang`, you can set `pl` here
  // For now, we'll just set `pl` to the processed language code
  pl = processedLang;

  // Log results for testing
  console.log(`Time: ${h}:${m}:${s}`);
  console.log(`Language code: ${l}`);
  console.log(`Processed language code: ${processedLang}`);
  console.log(`pl: ${pl}`);
}

// Utility function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

function generate() {
  staticprocessor();
  
  // Generate values
  let a = chars(spec);
  let b = chars(spec);
  let c = chars(spec);
  let d = h;
  let e = m;
  let f = s;
  let g = randlet();
  let h1 = pl;
  let k = step + "Σ";
  
  // Create a list of all elements
  let elements = [a, b, c, d, e, f, g, h1, k];

  // Shuffle the list
  let shuffledElements = shuffleArray(elements);

  // Join all elements as a single string
  let resultString = shuffledElements.join('');

  // Log the result for testing
  console.log(resultString);
  
  document.getElementById("gentxtbox").value = resultString;
}

// Testing
console.log(chars(spec));
console.log(randlet());
console.log(flang());
console.log(step);