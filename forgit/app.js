console.log('i dont love git')
const header = document.getElementById('header');
header.style.backgroundColor='green';

header.style.borderBottom ='3px solid orange';

const mainheading = document.getElementById('main-heading');
mainheading.textContent="Fruit World";
mainheading.style.color = "orange";
const basketheading = document.getElementById('basket-heading');
basketheading.style.color="green";

const thanks = document.getElementById('thanks');
const paragraph = document.createElement('p');
paragraph.textContent = "Please visit us again";
thanks.appendChild(paragraph);
