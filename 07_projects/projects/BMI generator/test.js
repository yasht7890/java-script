const form = document.querySelector('form')

form.addEventListener('submit' , function (e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height == '' || height <=0 || isNaN(height)){
        results.innerHTML = "please enter a valid height"
    } else if (weight == '' || weight <=0 || isNaN(weight)){
        results.innerHTML = "please enter a valid weight";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        results.innerHTML = `<span> ${bmi} </span>`;
    }
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if(bmi<18.6){
        const display = document.createElement('div')
        display.innerHTML = "underWeight"
        document.querySelector("#results").appendChild(display)

    }
    else if(bmi>18.6 && bmi<24.9){
        const display = document.createElement('div')
        display.innerHTML = "normal range"
        document.querySelector("#results").appendChild(display)

    }
    else{
        const display = document.createElement('div')
        display.innerHTML = "over weight"
        document.querySelector("#results").appendChild(display)
    

    }

})