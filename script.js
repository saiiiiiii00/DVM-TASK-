// Simple Quiz App (No fetch version)
// All questions are inside this file so the quiz works without a server.

// The quiz questions:
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Who is the creator of Javascript?",
        options: ["Brendan Eich", "Guido van Rossum", "James Gosling", "Bjarne Stroustrup"],
        answer: "Brendan Eich"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "NaCl"],
        answer: "H2O"
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1905", "1898", "1920"],
        answer: "1912"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Silver"],
        answer: "Diamond"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yen", "Dollar", "Euro", "Won"],
        answer: "Yen"
    }
];

// This function downloads the report.json file.
function downloadJSON(filename, data) {
    const json = JSON.stringify(data, null, 2); 
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
}

// This function runs the quiz.
function startQuiz() {
    const report = []; // will store results

    // Ask each question
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];

        // Build the prompt message
        let message = q.question + "\n\n";
        message += "A: " + q.options[0] + "\n";
        message += "B: " + q.options[1] + "\n";
        message += "C: " + q.options[2] + "\n";
        message += "D: " + q.options[3] + "\n\n";
        message += "Type A, B, C or D:";

        // Get user input
        let userInput = prompt(message);

        if (userInput) {
            userInput = userInput.toUpperCase();
        }

        // Convert letter to actual answer text
        let userAnswer = "";
        if (userInput === "A") userAnswer = q.options[0];
        else if (userInput === "B") userAnswer = q.options[1];
        else if (userInput === "C") userAnswer = q.options[2];
        else if (userInput === "D") userAnswer = q.options[3];
        else userAnswer = "Invalid answer";

        // Check answer
        if (userAnswer === q.answer) {
            alert("Correct");
        } else {
            alert("Wrong! The correct answer is: " + q.answer);
        }

        // Add to report
        report.push({
            question: q.question,
            answer: q.answer,
            user_answer: userAnswer
        });
    }

    // Save report.json
    downloadJSON("report.json", report);

    alert("Quiz finished! Your report.json file has been downloaded.");
}

// Start quiz when page loads
startQuiz();
