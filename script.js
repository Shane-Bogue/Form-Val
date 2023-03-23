const list = document.querySelector('ul')
const form = document.querySelector('form')
let trait = [];

document.getElementById("submit").addEventListener("click", e => {
    e.preventDefault()
    for (let i=0; i < form.elements.length; i++) trait.push(form.elements[i]);
        trait[10].value.match(/[0-9]+/)? null: failed('Enter A Valid Card Number'),
        trait[11].value.match(/[0-9]+/)? null: failed('Enter A Valid Security Code'),
        trait[12].value.match(/[A-Za-z]+/)? null: failed('Enter A Valid Card Holder Name'),
        trait[13].value.match(/.+/)? null: failed('Enter A Message')
  });

function failed(info) {
    let message = document.createElement('p');
    message.innerHTML =
    `<label>
    <input type="checkbox" class="alertCheckbox" autocomplete="off" />
    <div class="alert warning">
      <span class="alertClose">X</span>
      <span class="alertText clear" style="display:inline"> ${info}</span>
    </div>
  </label>
  `
  document.body.append(message)

  setTimeout(function(){
    message.remove();
    },3000);
}

  console.log( 'A regular expression is a sequence of characters that specifies a match pattern in text.')
  console.log('Matches words in a text.')
  console.log('/[a-z]+/i')
  console.log('required')
  console.log('escaping matches special chracters that are used as symbols for other matches and it uses a backslash (\) ')
  console.log('\w matches words and \W matches not words')
  console.log('the match() method matches a given string and a regex statement')
  console.log('/\(\d{3}\) \d{3}-\d{3}/')
  console.log( '/[a-z]{6,11}/')
  console.log( 'Clean code is maintainable, understandable, and may be read and interpreted at a later time')
  console.log('Pascal Case, Camel Case, Snake Case, Kebab Case, Pothole Case')
  console.log('Limit function arguments the function name should say what they do, functions should do one thing')



