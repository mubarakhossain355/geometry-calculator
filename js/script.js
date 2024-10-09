function calculateTriangleArea(){
    // get base
    const baseInput = document.getElementById('base-input');
    const baseValue = baseInput.value;
    const base = parseFloat(baseValue)
    // get height
    const heightInput = document.getElementById('height-input');
    const heightValue = heightInput.value;
    const height = parseFloat(heightValue);

    // get triangle area
    const triangleValue = 0.5*base*height;
    console.log(triangleValue);

    // show display
    const triangleArea = document.getElementById('triabgle-area');
    triangleArea.innerText = triangleValue;
    
}

// rectangle area scripts ************************

document.getElementById('calculateRectangleBtn').addEventListener('click',function(){
    // get width
    const rectangleWidthInput = document.getElementById('rectangle-width-input');
    const rectangleWidthValue = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthValue);

    // get length
    const rectangleLengthInput = document.getElementById('rectangle-length-input');
    const rectangleLengthValue = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthValue);

    // get recangle area
    const area = width*length;

    // show display
    const recangleSpan = document.getElementById('rectangle-span');
    recangleSpan.innerText = area;


})


// parallelogram scripts

document.getElementById('parallelogram-btn').addEventListener('click',function(){
const base = getInputById('parallelogram-base');
const height = getInputById('parallelogram-height');
const area = base*height;

showArea('parallelogram-area',area);
    
});

function getInputById(inputId){
    const getInput = document.getElementById(inputId);
    const getInputText = getInput.value;
    const getInputValue = parseFloat(getInputText);
    return getInputValue;

}

function showArea(showAreaId,area){
    const spanAreaId = document.getElementById(showAreaId);
    spanAreaId.innerText = area;

}