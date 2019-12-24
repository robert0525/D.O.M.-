const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionbutton = document.querySelector('button.description');
const addIthemInput = document.querySelector ('addIthemInput');
const addIthemButton = document.querySelector ('addItemButton');

toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none' ) {
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block';
    } else {
    toggleList.textContent = 'Show list';
    listDiv.style.display = 'none';
    }
});

descriptionbutton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
});


addIthemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.createElement('li');
    li.textContent = addIthemInput.value;

    
});