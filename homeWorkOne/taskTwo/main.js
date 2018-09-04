window.onload = function () {
    let redirectButton = document.querySelector('.redirect__button')
    let changeStyleButton = document.querySelector('.changeStyle__button')
    let renderFlexButton = document.querySelector('.renderFlex__button')

    // assign functions to buttons 

    redirectButton.onclick = redirectTo;
    changeStyleButton.onclick = changePageStyle;
    renderFlexButton.onclick = renderFlexboxExample;

    // redirect to another page function

    function redirectTo() {
        location.href = "https://www.github.com/Monohansett"
    }

    // change style on page

    function changePageStyle() {
        let buttons = document.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.toggle('styledButtons')
        }
        document.body.style.backgroundColor = '#c1d4f2';
    }

    // render new body with flexbox example

    function renderFlexboxExample() {
        document.body.innerHTML = "";
        document.body.style.backgroundColor = "";
        let flexContainer = document.createElement('div');
        let innerFlexBoxes = ['flex1', 'flex2', 'flex3'];
        document.body.appendChild(flexContainer);

        //loop for create multiple items with styling

        for (let i=0; i<innerFlexBoxes.length; i++) {
            let flexElement = document.createElement('div');
            flexElement.className = 'flex__element';
            flexContainer.appendChild(flexElement);
            flexElement.style.cssText = "margin: 10px; padding: 50px; background-color: white;  border: 3px solid indigo; border-radius: 3px; "
        }

        flexContainer.style.cssText =  "margin-top: 300px; display: flex; justify-content: center; flex-direction: row; flex-wrap: wrap;"
        
    }
}
