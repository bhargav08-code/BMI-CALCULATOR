

let button = document.getElementById("#submit");
button.addEventListener("click", calculateBMI);


function calculateBMI(){
    let mass = parseInt(document
        .querySelector("#mass").value);

    let Height = parseInt(document.querySelector("#Height").value);
    
    let total = document.getElementById("total");
    
    let formula = (mass/Height**2)*10000;

    let bmi = formula.toFixed(2); 
    if(bmi<18.6){
        total.innerHTML=`Under Weight : <span>${bmi}</span>`;

    }
    else if(bmi >= 18.6 && bmi < 24.9){
        total.innerHTML=`Normal : <span>${bmi}</span>`;

    }
    else{
        total.innerHTML=`Over Weight : <span>${bmi}</span>`;
    }
    
    
}


 



