//Mobile Menu JS
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});


// const planTest = document.querySelectorAll('plan_item_group');
const planItemGroup = Array.from(document.querySelectorAll('.plan_item_group'));

let arrow = document.querySelector('.arrow');
const activeTab = document.querySelectorAll('.plan_picker_item');

        if(activeTab.ariaSelected = true){
            arrow.classList.add('arrowOpen');
        } else {
            arrow.classList.remove('arrowOpen');
        }
    console.log(activeTab);

    //handles click for inside buttons of each section of order sheet
    function handleOptionClick (event){
        const selected = event.target.closest('div.plan_item_option');
        selected.classList.toggle('active');

        let currentParent = selected.closest('.plan_picker_item')
        let nextParent = currentParent.nextElementSibling;

        for (let sibling of selected.parentNode.children){
            if (sibling != selected) sibling.classList.remove('active');
        }

        if (currentParent.ariaSelected = true){
            const id = event.currentTarget.id;
            let planNumberPanel = document.querySelector(`[aria-labelledby="${id}"]`);
            planNumberPanel.classList.toggle('active');
        }

        if (selected.classList.contains('active')){
            nextParent.setAttribute('aria-selected', true);
           
        } else {
            nextParent.setAttribute('aria-selected', false);
        }

    }
    
planItemGroup.forEach(group => group.addEventListener('click', handleOptionClick));

function handleSelection (){
    
    let selectedItems = [...(document.querySelectorAll('div.active>h4'))].map(e=>e.innerHTML);

    const howSelection = document.getElementById('howSelection');
    const typeSelection = document.getElementById('typeSelection');
    const quantitySelection = document.getElementById('quantitySelection');
    const grindSelection = document.getElementById('grindSelection');
    const shippingSelection = document.getElementById('shippingSelection');

    howSelection.innerHTML= selectedItems[0] != undefined ? `${selectedItems[0]}`: `_____`;
    typeSelection.innerHTML= selectedItems[1] != undefined ? `${selectedItems[1]}`: `_____`;
    quantitySelection.innerHTML= selectedItems[2] != undefined ? `${selectedItems[2]}`: `_____`;
    grindSelection.innerHTML= selectedItems[3] != undefined ? `${selectedItems[3]}`: `_____`;
    shippingSelection.innerHTML= selectedItems[4] != undefined ? `${selectedItems[4]}`: `_____`;

    }

    planItemGroup.forEach(group => group.addEventListener('click', handleSelection));

