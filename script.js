// DOM

const next_step_btn = document.querySelector("#next_step_btn");
const prev_step_btn = document.querySelector("#prev_step_btn");

const Uname = document.getElementById("Uname");
let currentStep = 1;



next_step_btn.addEventListener("click", (e) => {
    e.preventDefault();
    nextPrev(1);
})

prev_step_btn.addEventListener("click", () => {
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

    // if(step === 1 && !validateForm()) return false;

    current_step.classList.add("hideElement");

    // go back button not working

    currentStep = currentStep + val;

    showStep(currentStep);
}


// finish this function
function validateForm() {

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



