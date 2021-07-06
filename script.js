//Mobile Menu JS
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});



// const tabs = document.querySelector('.tabs');
// const tabButtons = tabs.querySelectorAll('[role="tab"]');
// const tabPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

// function handleTabClick(event) {
//     tabPanels.forEach(panel => {
//         panel.hidden = true;
//     });

//     tabButtons.forEach(tab => {
//         tab.setAttribute('aria-selected', false);
//     });
//     event.currentTarget.setAttribute('aria-selected', true);

//     const { id } = event.currentTarget;
//     const tabPanel = tabPanels.filter(
//         panel => panel.getAttribute('aria-labelledby') === id
//     );
//     // console.log(tabPanel);
//     tabPanel.forEach(panel => {
//         panel.hidden = false;

//     });
// }

// tabButtons.forEach(button => button.addEventListener('click', handleTabClick));


const planSelectionParent1 = document.getElementById('selection1');
const planSelectionParent2 = document.getElementById('selection2');
// const planSelection = document.getElementById('selection1');
const planSelection1 = planSelectionParent1.getElementsByTagName('div');
const planSelection2 = planSelectionParent2.getElementsByTagName('div');


function handleOptionClick (event){
    const selected = event.target;
    selected.classList.toggle('active');

    for (let sibling of selected.parentNode.children){
        if (sibling != selected) sibling.classList.remove('active');
    }
    planSelectionParent2.setAttribute('aria-selected', true); 

}

for (var i = 0; i < planSelection1.length; i++){
    planSelection1[i].addEventListener('click', handleOptionClick);
}


// if (planSelection1.classList.contains('active')) planSelectionParent2.setAttribute('aria-selected', true); 

// function handleSelection(event){
//     console.log('button clicked');
//     const activate = event.target;
//     console.log(event.target);
//     console.log(event.currentTarget);
//     console.log(event.target === event.currentTarget);
//     activate.classList.toggle('active');
// }

// planSelection.forEach(function (makeSelection) {
//     makeSelection.addEventListener('click', handleOptionClick);
// });
