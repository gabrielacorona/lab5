function checkElement() {
    let ul = document.querySelector('ul');
    ul.addEventListener('click', (event) => {
        //console.log(event.target.parentElement.parentElement);
       
        if (event.target.matches('.checkList')) {
            //console.log(event.target.parentElement.parentElement);
            let li = event.target.parentElement.parentElement;
            if(li.className = "added"){
                li.classList.add('checkElement');
                li.classList.remove('added')
            }
        }
        
        if(event.target.matches('.deleteList')){
            //console.log(event.target.parentElement);
            event.target.parentElement.parentElement.remove();
        }

       
    });

}

function addElement() {
    let form = document.getElementById("formComment")
    let submit = document.getElementById("addElement");
    let element = document.getElementById("inputBox");
    let ul = document.querySelector('ul');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (element.value != "") {
            ul.innerHTML +=
                `
            <li class = "added">
                <div>
                    <p>${element.value}</p>
                    <button class = "checkList"> Check </button>
                    <button class = "deleteList"> Delete </button>
                </div>
            </li>
            `;
        }

    });
}

function init() {
    addElement();
    checkElement()

}


init();