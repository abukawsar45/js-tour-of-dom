const sections = document.querySelectorAll("section");
// console.log(sections)
for (const section of sections){
    // console.log(section)
    section.style.border = '4px solid aqua';
    section.style.marginBottom = "35px";
    section.style.padding = '20px';
    section.style.borderRadius = '23px';
    section.style.background = 'lightblue'
}
// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor = 'yellow'
// // we can class add
const placesContainer = document.getElementById('places-container');
// placesContainer.classList.add('yellow-bg')
placesContainer.classList.add('text-center')
// placesContainer.classList.remove('large-text')
placesContainer.style.fontSize = '5em'