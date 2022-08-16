(function calculate (){


    const splitter = document.querySelector('.splitter');
    const totalBill = splitter.querySelector("#total-bill");
    const totalPeople = splitter.querySelector("#total-people");
    const divideByZeroError = splitter.querySelector('.error')
    const [outputTip,outputTotal] = [...splitter.querySelectorAll('output')];
    const reset = splitter.querySelector('button');

    let bill = 142.44;
    let tipPercent = .15;
    let people = 5;

    splitter.addEventListener('input', (event)=> {
        const input = event.target;

        if(input.id === 'total-bill') bill = input.value === '' ? 0 : parseInt(totalBill.value);
        if(input.id === 'total-people') people = parseInt(totalPeople.value);

        if(input.type ==='radio'){
            if(input.id === 'five-percent') {
                tipPercent = .05;
            }
            else if (input.id === 'ten-percent'){
                tipPercent = .10
            }
            else if (input.id === 'fifteen-percent'){
                tipPercent = .15
            }
            else if (input.id === 'twentyfive-percent'){
                tipPercent = .25
            }
            else if (input.id === 'fifty-percent'){
                tipPercent = .50
            }
        }
        if(input.id === 'custom-tip') {
            tipPercent = input.value === '' ? 0 : parseInt(input.value) / 100;
        } 

        if(!people) {
            divideByZeroError.style.display = 'block'
        } else {
            divideByZeroError.style.display = 'none'
            outputTip.textContent = '$' + (bill * tipPercent / people).toFixed(2);
            outputTotal.textContent = '$' + (bill * (1 + tipPercent) / people).toFixed(2);
        }

    })

    reset.addEventListener('click', (event)=> {
        event.preventDefault();
        bill = 142.44;
        tipPercent = .15;
        people = 5;

        document.querySelector('#fifteen-percent').checked = 'checked';
        document.querySelector('#custom-tip').value = '';
        totalBill.value = bill;
        totalPeople.value = people;
        
        outputTip.textContent = '$4.27';
        outputTotal.textContent ='$32.79';
    })


})()