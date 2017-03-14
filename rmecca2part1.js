var bodyParts = [ "elbow", "arm", "face", "nose", "hair" ];

var adjectiveIn = [ "gross", "crooked", "scaley", "rubber", "smelly" ];
var animalIn = [ "crocodile", "snake", "platypus", "walrus", "cow" ];
var adjectiveComp = [ "pretty", "soft", "smart", "warm", "artistic" ];
var animalComp = [ "cat", "dog", "dolphin", "parrot", "flamingo" ];


// Stores the value in localStorage
function storeValue(elemName, value) {
  localStorage.setItem("stored_" + elemName, value);
}

function replaceElement(elemName) {
  var elem = document.getElementById(elemName);
  elem.innerHTML = localStorage.getItem("stored_" + elemName);
}

function randArrayItem(array) {
  return array[ Math.floor(Math.random() * array.length)];
}

function p2_fillInPage() {
  replaceElement("userName");
  replaceElement("bodyPart");
  replaceElement("adjective");
  replaceElement("animal");
}

function p1_genPhrase() {
 storeValue("userName", document.getElementById("userName").value);
 storeValue("bodyPart", randArrayItem(bodyParts));
}

function p1_genInsult() {
 p1_genPhrase();
 storeValue("adjective", randArrayItem(adjectiveIn));
 storeValue("animal", randArrayItem(animalIn));
}

function p1_genCompliment() {
 p1_genPhrase();
 storeValue("adjective", randArrayItem(adjectiveComp));
 storeValue("animal", randArrayItem(animalComp));
}
