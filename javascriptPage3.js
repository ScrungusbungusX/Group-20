// 2025 web tech module. //
// Year 2. //
// 40690724 //


// javascript for page 3. //


// function for button 'onclick' feature for validating the answers. //

function checkSolutions() {

    // set a counter limit to 0 //

    // declare variable 'counter' value of '0'. source/adapted from //
    // URL: https://www.w3schools.com/JS/js_let.asp //

    let counter = 0;

    // set limit to the length of questions. how many questions there are. //
    const formQuestions = 3;

    // array of answers. what radio button has the correct value. //

    // sourced/adapted from //
    // URL: https://www.w3schools.com/js/js_arrays.asp //

    const solutions = {
        rotations: "4",
        latch: "True",
        direction: "Forward then down"
    };


    // for in loop. loop through each question checking for the value and compare with the 'solutions' array//

    // source/adapted from //
    // URL: https://www.w3schools.com/js/js_loop_forin.asp //



    for (let i in solutions) {
        const selectedOption = document.querySelector(`input[name="${i}"]:checked`);

        // if statement. increases counter by 1 if the selected radio button matches the value in the 'solutions' array.  //

        if (selectedOption && selectedOption.value === solutions[i]) {
            counter++;
        }
    }



// if statement. provides an output to the '<p = "solveOutput"></p> if the amount of answers is equal to the amount of questions.//
// all questions have to be right to solve the puzzle. //
// sourced/adapted from URL: https://www.w3schools.com/js/js_if_else.asp //


    if (counter === formQuestions) {

        document.getElementById("solveOutput").textContent = "The door has unlocked. You have solved the case!";

        //else statement. if the number of answers is less then this output is sent to the <p> section and displayed to screen.//
    } 
    
    else {

        document.getElementById("solveOutput").textContent = "The door is still locked. Try again.";

    }



}


    

