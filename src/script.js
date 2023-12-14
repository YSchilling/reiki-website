// burger menu
var burgerMenu = document.getElementById('burger-menu');

var overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

// email encryption

function decodeLetters(letters) {
  //rotki13 encoded letters
  return letters.replace(/[a-zA-Z]/g, function (char) {
    return String.fromCharCode((char <= "Z" ? 90 : 122) >= (char = char.charCodeAt(0) + 13) ? char : char - 26);
  })
};
function decodeNumbers(numbers) {
  //rotki3 encoded numbers
  return numbers.replace(/[0-9]/g, function (char) {
    let decoder = {
      "3": "0",
      "4": "1",
      "5": "2",
      "6": "3",
      "7": "4",
      "8": "5",
      "9": "6",
      "0": "7",
      "1": "8",
      "2": "9",
    }
    return decoder[char];
  })
}
function showContact(element, data, href, decodeType) {
  if (decodeType == 0) {
    var decodedData = decodeLetters(data);
    var decodedHref = decodeLetters(href);
  } else {
    var decodedData = decodeNumbers(data);
    var decodedHref = decodeLetters(href);
  }

  var newElement = document.createElement("li");
  newElement.innerHTML = '<a href="' + decodedHref + decodedData + '" class="underline hover:no-underline hover:cursor-pointer" style="color: var(--highlight-color)">' + decodedData + '</a>';

  element.parentNode.replaceChild(newElement, element);
}