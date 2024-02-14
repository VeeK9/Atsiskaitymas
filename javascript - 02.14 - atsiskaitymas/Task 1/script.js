/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const kgs = document.createElement('h1');
const lbs = document.createElement('h1');
const grams = document.createElement('h1');
const oz = document.createElement('h1');
document.querySelector('#output').append(kgs, lbs, grams, oz);

document.querySelector('.wrapper > form').addEventListener('submit', e => {
    e.preventDefault();
    const kgsInput = parseFloat(e.target.elements.search.value);
    
    if(kgsInput <= 0){
        kgs.textContent = 'Please type in a positive number.';
        lbs.textContent = ``;
        grams.textContent = ``;
        oz.textContent = ``;
    } else if(parseFloat(kgsInput).toString() == 'NaN') {
        kgs.textContent = 'Please type in a number.';
        lbs.textContent = ``;
        grams.textContent = ``;
        oz.textContent = ``;
    } else {
        kgs.textContent = `${kgsInput} kg is:`
        lbs.textContent = `${(kgsInput*2.2046).toFixed(2)} lbs`;
        grams.textContent = `${(kgsInput/0.001).toFixed(2)} grams`;
        oz.textContent = `${(kgsInput*35.274).toFixed(2)} ounces`;
    }

    e.target.reset();
})