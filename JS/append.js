// just make sure line 2-3;
// const hudai = 'hs sdd df';
// console.log(hudai)
// 1.where to add
const placesLisst = document.getElementById('places-list');
// 2.what to be added
const li = document.createElement ('li');
li.innerText = 'ei kintu JS er duniya theke asse';

// add the child
placesLisst.appendChild(li);

// where to add
const mainContainer = document.getElementById('main-container') ;

// 2.what to be added
const section = document.createElement ('section');
const h1 = document.createElement ('h1');
h1.innerText = 'My food list';
section.appendChild(h1);
mainContainer.append(section)

const ul = document.createElement ('ul');
section.appendChild (ul)

const li1 = document.createElement ('li');
li1.innerText = 'khejur';
const li2 = document.createElement ('li');
li2.innerText = 'khejur2';
const li3 = document.createElement ('li');
li3.innerText = 'khejur3';
const li4 = document.createElement ('li');
li4.innerText = 'khejur4';

// section.append(li1,li2,li3,li4);

section.append(li1);
section.append(li2);
section.append(li3);
section.append(li4);

// innerHTML directly
const sectionDress = document.createElement ('section');
sectionDress.innerHTML = `
<h1>My Dress Section </h1>
    <ul>
        <li>shirt</li>
        <li>lungi</li>
        <li>genji</li>
    </ul>
`
mainContainer.appendChild(sectionDress);