// Compare learner submission to solution
exports.gradeAnswer = function(graderConfig, sessionConfig, answer) {
    var isCorrect = false;
    var feedback = "";
    // Find max value in random dataset
    var solution = Math.max(...nums);
    // Obtain student answer
    var submission = document.getElementById('max_num').value
    if (Math.abs(submission - solution) < 0.1) {
        isCorrect = true;
        feedback = "That is correct, great job!";
    } else {
        isCorrect = false;
        feedback = "Not quite, please try again!";
    }
    document.getElementById('give-feedback').innerHTML = feedback;


    return {
        isCorrect: boolean,
        feedback: feedback,
        feedbackConfiguration: {
            feedback,
            isCorrect
        }

    }

}