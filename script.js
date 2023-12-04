// DOM

const next_step_btn = document.querySelector("#next_step_btn");
const prev_step_btn = document.querySelector("#prev_step_btn");

const Uname = document.getElementById("Uname");
const Uemail = document.getElementById("Uemail");
const Uphoneno = document.getElementById("Uphoneno");

let currentStep = 1;

// previous and next button functionality

next_step_btn.addEventListener("click", (e) => {
    e.preventDefault();
    nextPrev(1);
})

prev_step_btn.addEventListener("click", (e) => {
    e.preventDefault();
    nextPrev(-1);
})

showStep(currentStep);

function showStep(step) {

    let current_step = document.querySelector(`[data-step = '${step}']`);
    current_step.classList.remove("hideElement")

    if(step === 1) {
        prev_step_btn.classList.add("hideElement");
    }
    else {
        prev_step_btn.classList.remove("hideElement");
    }

    if(step === 4)
    {
        next_step_btn.style.backgroundColor = "hsl(243, 100%, 62%)";  
        next_step_btn.innerHTML = "Confirm";
    }
    else {
        next_step_btn.style.backgroundColor = "hsl(213, 96%, 18%)";  
        next_step_btn.innerHTML = "Next Step";
    }

    if(step === 5) {
        prev_step_btn.classList.add("hideElement");
        next_step_btn.classList.add("hideElement");
    }

    fixStepIndicator(step);

}

function nextPrev(val) {

    let current_step = document.querySelector(`[data-step = '${currentStep}']`);

    console.log(validateForm());

    if(val === 1 && !validateForm()) return false;
    
    current_step.classList.add("hideElement");

    currentStep = currentStep + val;

    showStep(currentStep);

}


// finish this function
function validateForm() {

    if(Uname.value === "" || Uemail.value === "" || Uphoneno.value === "") {
        if(Uname.value === "")
        {
            document.createElement("span");
            return false;
        } else {
            return true;
        }
        if(Uemail.value === "")
        {
            document.createElement("span");
            return false;
        } else {
            return true;
        }
        if(Uphoneno.value === "")
        {
            document.createElement("span");
            return false;
        } else {
            return true;
        }
        return false;
    } else {
        return true;
    }
   
}

function fixStepIndicator(step) {
    let i = 1;
    for(i; i <= 4; i++)
    {
        if(i === step)
        {
            document.querySelector(`[data-step-indicator = '${i}']`).classList.add("active-step");
        }
        else {
            document.querySelector(`[data-step-indicator = '${i}']`).classList.remove("active-step");
        }
    }

}



