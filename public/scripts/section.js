let button101 = document.getElementById('button101');
let button102 = document.getElementById('button102');
let date101 = document.getElementById('date101');
let date102 = document.getElementById('date102');
let check101 = document.getElementById('check101');
let check102 = document.getElementById('check102');
let index;

if (localStorage.getItem('section') == null)
{
    index = 0;
    section101();
}

loadSection();

if(index == 0)
{
    date101.style.display = "flex";
    date102.style.display = "none";
    check101.style.display = "block";
    check102.style.display = "none";
    
}
else if (index == 1)
{
    date101.style.display = "none";
    date102.style.display = "flex";
    check101.style.display = "none";
    check102.style.display = "block";
};

function section101()
{
    date101.style.display = "flex";
    date102.style.display = "none";
    check101.style.display = "block";
    check102.style.display = "none";
    button101.classList.add('bgGreen');
    button102.classList.remove('bgGreen');
}

function section102()
{
    date101.style.display = "none";
    date102.style.display = "flex";
    check101.style.display = "none";
    check102.style.display = "block";
    button102.classList.add('bgGreen');
    button101.classList.remove('bgGreen');
}

function saveSection(n){
    localStorage.removeItem('section', n);
    localStorage.setItem('section', n);
}

function loadSection() {
    let number = localStorage.getItem('section');
    if (number == '0')
    {
        index = 0;
        section101();
    }
    else if (number == '1')
    {
        index = 1;
        section102();
    }
}