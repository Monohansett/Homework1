window.onload = function () {
    let redirectButton = document.querySelector('.redirect__button')
    let changeStyleButton = document.querySelector('.changeStyle__button')
    let renderFlexButton = document.querySelector('.renderFlex__button')

    redirectButton.onclick = redirectTo;
    changeStyleButton.onclick = changePageStyle;
    renderFlexButton.onclick = renderFlexboxExample;

    function redirectTo() {
        location.href = "https://www.github.com/Monohansett"
    }

    function changePageStyle() {
        let buttons = document.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.toggle('styledButtons')
        }
        document.querySelector('body').style.backgroundColor = '#c1d4f2';
    }

    function renderFlexboxExample() {
        document.querySelector('body').innerHTML = "";
        let flexContainer = document.createElement('div');
        let innerFlexBoxes = ['flex1', 'flex2', 'flex3'];
        document.body.appendChild(flexContainer);

        for (let i=0; i<innerFlexBoxes.length; i++) {
            let flexElement = document.createElement('div');
            flexElement.className = 'flex__element';
            flexContainer.appendChild(flexElement);
            flexElement.style.cssText = "margin: 10px; padding: 50px; background-color: white;  border: 3px solid indigo; border-radius: 3px; "
        }

        flexContainer.style.cssText =  "margin-top: 300px; display: flex; justify-content: center; flex-direction: row; flex-wrap: wrap;"
        
        // let flexElements = document.getElementsByClassName('.flex__element');
        // console.log(flexElements)
        // for (let i=0; i<flexElements; i++) {
        //     flexElements[i].style.cssText = "margin: 10px; padding: 10px; background-color: blue;  border: 3px solid black; border-radius: 10px;"
        // }

    }
}
