(function(){
//посилання на тег а (тільки для об'єктів)
const link = document.querySelector('a');
// поміняли назву і посилання (в html інше було)
if (Math.random() < 0.5){ //воно буде міняти рандомно половину людей буде бачити, половину ні(так як в лотерею виграти)
link.textContent = 'YouTube';
link.href = 'https://www.youtube.com';
}

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para); // щоб воно додало той текст що зверху, треба це написати

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');

linkPara.appendChild(text);

linkPara.appendChild(text.cloneNode(true)); //клонуємо текст (він 2 рази повторюється)
linkPara.removeChild(text); // видаляємо текст

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

para.classList.add('chosen'); // додаєм клас щоб не задавати стилі напряму в javascript

//clock
const clockElement = document.querySelector('.clock');
setInterval( () => clockElement.innerText = (new Date ()).toLocaleTimeString(), 1000);// функція яка на вхід приймає 2 значення: 1 - функція

//параграфи виведемо в циклі
const infoBlock = document.querySelector('.infoBlock');
for (let i=0;i<10; i++){
    let info=document.createElement('p');
    info.innerText = 'Item no:' + i;
    infoBlock.appendChild(info);
    info.style.color='purple';
    info.style.textAlign='center';
}
// приєднуємо функцію коли клікаєш на кнопку
 let counter = 0;
    function count() {
    document.querySelector('.click-count').textContent = ++counter;
    }
    document.querySelector('.counter-button').addEventListener('click', count);

// jquery  $("selector.css").action
// підключаєм jquery .action - в бібліотеці jquery  шукаємо і вставляємо
     $('.jq-sample').click( () => $('p').toggle('slow') );

     //Calculate

     const nums = document.querySelectorAll('.calc .nums button');
    const opers = document.querySelectorAll('.calc .opers button');
    const display = document.querySelector('.calc .display');
    const equal = document.querySelector('.calc .eq');
    nums.forEach( buttonNum => buttonNum.addEventListener('click', numPressed) );
    function numPressed(ev) {
        const num = ev.target.innerText; // innerText - це цифра яка буде появлятись у калькуляторі
        display.value += num;
    }
    opers.forEach( buttonOper => buttonOper.addEventListener('click', operPressed) );
    function operPressed(ev) {
        const oper = ev.target.innerText;
        display.value += oper;
    }
    equal.addEventListener('click', () => display.value = eval(display.value) );
})();

