


function addElement() {
    let submit = document.getElementById("addElement");
    let element = document.getElementById("inputBox");
    let listSect = document.getElementById("unorderedList");

    submit.addEventListener('click', (event) => {

        let ul = document.querySelector('ul');

        if (element.value != "") {
            ul.innerHTML +=
                `
            <li>
                ${element.value}
                <div>
                <button> Check </button>
                <button> Delete </button>
                </div>
            </li>
            `;
        }

    });
}

function init() {
    addElement();

}


init();