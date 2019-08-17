// for the block shape:
let elements = document.getElementsByName('cssProp');
let div = document.getElementById('modify');

function applyBlock () {

    for (var i = 0; i < elements.length; i++) {

        let cssProp = elements[i].getAttribute('id');
        let cssValue = elements[i].value;

        div.style[ cssProp ] = cssValue;
    }
}

document.getElementById('apply').addEventListener('click', applyBlock);


// for the circle shape :
let circleElements = document.getElementsByName('cssProp1');
let circle = document.getElementById('modifyCircle');

function applyCircle () {

    for (var i = 0; i < circleElements.length; i++) {

        let cssProp = circleElements[i].getAttribute('class');
        let cssValue = circleElements[i].value;

        circle.style[ cssProp ] = cssValue;
    }
}

document.getElementById('set').addEventListener('click', applyCircle);
