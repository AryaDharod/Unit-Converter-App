var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);


inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult() {

    //to update//


    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "meter" && resultTypeValue === "Kilometer"){
        result.value = Number(input.value) * 0.001;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "Centimeter"){
        result.value = Number(input.value) * 100;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "meter"){
        result.value = input.value;
    }

    if(inputTypeValue === "Kilometer" && resultTypeValue === "meter"){
        result.value = Number(input.value) * 1000;
    }
    else if(inputTypeValue === "Kilometer" && resultTypeValue === "Centimeter"){
        result.value = Number(input.value) * 100000;
    }
    else if(inputTypeValue === "Kilometer" && resultTypeValue === "Kilometer"){
        result.value = input.value;
    }

    if(inputTypeValue === "Centimeter" && resultTypeValue === "Kilometer"){
        result.value = Number(input.value) * 0.00001;
    }
    else if(inputTypeValue === "Centimeter" && resultTypeValue === "meter"){
        result.value = Number(input.value) * 0.01;
    }
    else if(inputTypeValue === "Centimeter" && resultTypeValue === "Centimeter"){
        result.value = input.value;
    }



}