// const toggleBtn = document.getElementById('toggle-btn');
const themeSwitch = document.getElementById('theme-switch');
const themeLabel = document.getElementById('theme-label');



// // savedTheme
// // Check if a theme is saved in localStorage
const savedTheme = localStorage.getItem('theme');

if(savedTheme === 'dark') {
    document.body.classList.add('dark');
    themeSwitch.checked = true;
    themeLabel.textContent = '🌞 Change Theme';
} else if(savedTheme===null) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: light)').matches;
    if(prefersDark) {
        document.body.classList.add('light');
        themeSwitch.checked = true;
        themeLabel.textContent = '🌜 Change Theme';
    }
    
}

// if(savedTheme === 'dark') {
//     document.body.classList.add('dark');
//     toggleBtn.textContent = '🌞 Change Theme';
// }


// if(savedTheme==null) {
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     if(!prefersDark) {
//         document.body.classList.add('dark');
//     }
    

//     updateButtonText();
// }
// button click event
// toggleBtn.addEventListener('click', () => {
//     document.body.classList.toggle('dark');
    
//     const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
//     localStorage.setItem('theme',theme);

//     updateButtonText();
// });

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme',theme);
    updateButtonText();
})

function updateButtonText() {

    if(document.body.classList.contains('dark')) {
        themeLabel.textContent = '🌞 Change Theme';
    } else {
        themeLabel.textContent = '🌜 Change Theme';
    }
}

