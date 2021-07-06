//Mobile Menu JS
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});


// const planTest = document.querySelectorAll('plan_item_group');
const planItemGroup = Array.from(document.querySelectorAll('.plan_item_group'));

    //handles click for inside buttons of each section of order sheet
    function handleOptionClick (event){
        const selected = event.target.closest('div.plan_item_option');
        selected.classList.toggle('active');

        let currentParent = selected.closest('[role="tab"]')
        let nextParent = currentParent.nextElementSibling;

        
        for (let sibling of selected.parentNode.children){
            if (sibling != selected) sibling.classList.remove('active');
        
        }

        if (selected.classList.contains('active')){
            nextParent.setAttribute('aria-selected', true);
        } else {
            nextParent.setAttribute('aria-selected', false);
        }
    }
    
planItemGroup.forEach(group => group.addEventListener('click', handleOptionClick));


// orderSummary.innerHTML=`"I drink coffee <span>`+ +`<span>, with a <span>`+ + `type of bean.`+ +` ground ala <span>`+ +`</span>, sent to me <span>`+ +`</span>."`