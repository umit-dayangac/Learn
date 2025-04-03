// Dom Element
const counter = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const themeToggle = document.getElementById('theme-toggle');

// localStorage Theme
const savedTheme = localStorage.getItem('theme');
if(savedTheme==='dark'){
    document.body.classList.add('dark');
    themeToggle.textContent = '🌞 Change Theme';
}

// theme change
themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        themeToggle.textContent = '🌞 Change Theme';
        localStorage.setItem('theme','dark');
    }else{
        themeToggle.textContent = '🌜 Change Theme';
        localStorage.setItem('theme','light');
    }
})


let count = parseInt(localStorage.getItem('counter')) || 0;
// Set initial value of counter
updateDisplay();

// Event Listeners


increaseBtn.addEventListener('click',()=>{
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener('click',()=>{
    count--;
    updateDisplay();
});

resetBtn.addEventListener('click',()=>{
    count = 0;
    updateDisplay();
});


function updateDisplay(){
    counter.textContent = count;

    // Save count to local stroge
    localStorage.setItem('counter', count);

    // change color based on value

    if(count > 0){
        counter.style.color = 'green';
    } else if(count < 0){
        counter.style.color = 'red';
    }else {
        counter.style.color = 'black';
    }

    // animate counter
    counter.classList.remove('animate');
    void counter.offsetWidth;
    counter.classList.add('animate');
}