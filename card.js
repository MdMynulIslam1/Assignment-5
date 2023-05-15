    function getInputFieldValueById (inputFieldId){
        const inputField = document.getElementById(inputFieldId);
        const inputFieldString = inputField.value;
        const inputFieldValue = parseFloat(inputFieldString);
        inputField.value = '';
        if (typeof inputFieldValue === 'number' && !isNaN(inputFieldValue)) {
            if (inputFieldValue <= 0) {
              alert ('Submit a positive number');
              return ;
            } 
            else {
             return inputFieldValue;
            }
           }
            if( isNaN(inputFieldValue)  ){
                alert ('Donot submit letter')
                return;}
            else{
            return inputFieldValue;
            }
}

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  
  document.addEventListener("mouseover", function(){
    document.body.style.backgroundColor = randomColor();
  });
  
  document.querySelector('body').addEventListener('mouseover', event => {
        event.target.style.fill = randomColor();
  });
    document.getElementById('triangle-calculator').addEventListener('click',function(){
        const baseInputFieldValue = getInputFieldValueById('trinagle-base-input');
        const heightInputFieldValue = getInputFieldValueById('triangle-height-input');
        const triangleDisplay = document.getElementById('triangle-result-display');
        const triangleTotal = 0.5*baseInputFieldValue*heightInputFieldValue;
        const triangleFinalResult = triangleTotal.toFixed(2);
        triangleDisplay.innerText = triangleFinalResult; 
        const triangleResultArea = document.getElementById('triangle-result-area');
        triangleResultArea.style.display='block';
    })
    document.getElementById('retangle-calculator').addEventListener('click',function(){
        const rectangleWidthInputField = getInputFieldValueById('rectangle-width-input');
        const rectangleLenthInputField =getInputFieldValueById('rectangle-lenth-input');
        const rectangleResultDisplayArea = document.getElementById('rectangle-result-display');
        const rectanglTotal = rectangleWidthInputField * rectangleLenthInputField;
        const rectangleFinalResult =rectanglTotal.toFixed(2);
        rectangleResultDisplayArea.innerText =rectangleFinalResult;
        const rectangleResultFeedback = document.getElementById('rectangle-result-area');
        rectangleResultFeedback.style.display='block';
   })
   document.getElementById('parallelogram-calculator').addEventListener('click',function(){
    const parallelogramBaseInput = getInputFieldValueById('parallelogram-base-input');
    const parallelogramHeightInput = getInputFieldValueById('parallelogram-height-input');
    const parallelogramResultDisplay = document.getElementById('parallelogram-result-display');
    const parallelogramTotal = parallelogramBaseInput *parallelogramHeightInput ;
    const parallelogramFinalResult = parallelogramTotal.toFixed(2);
    parallelogramResultDisplay.innerText =parallelogramFinalResult; 
    const parallelogramFeedBack = document.getElementById('parallelogram-result-area');
    parallelogramFeedBack.style.display = 'block';


   })