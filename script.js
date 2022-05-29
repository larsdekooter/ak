const land = document.getElementById('land');
const stad = document.getElementById('stad');

const closeButton = document.createElement('button');
closeButton.classList.add('button');
closeButton.innerText = 'Close'


land.addEventListener('click', () => {
    const div = document.createElement('div');
    div.classList.add('info');
    div.id = 'infodiv'
    const country = countries[Math.floor(Math.random() * countries.length)];
    div.textContent = country;
    div.appendChild(closeButton)
    document.getElementById('div').appendChild(div);
});

closeButton.addEventListener('click', () => {
    document.getElementById('infodiv').remove()
});

stad.addEventListener('click', () => {
    const div = document.createElement('div');
    div.id = 'infodiv'
    const input = document.createElement('input')
    input.type = 'text';
    input.id = 'input'
    div.appendChild(input);
    div.classList.add('info');
    
    const country = citys[Math.floor(Math.random() * citys.length)];
    const text = document.createElement('h2');
    text.innerText = country.name
    div.appendChild(text)


    input.addEventListener('change', (event) => {
        const inputtedcity = document.getElementById('input').value;
        if(inputtedcity.toLowerCase() === country.h.toLowerCase()) return document.getElementById('infodiv').remove();
        else {
            return text.innerHTML += '\n<h2 style="color: red;">Wrong.</h2> Should be ' + `<em>${country.h}</em>`
        }
    })



    document.getElementById('div').appendChild(div)
})