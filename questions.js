var questionsArray = [{
        theQuestion: "Which Studio Ghibli film has Patrick Stewart as a voice talent?",
        correctAnswer: "Naussica Valley of the Wind",
        choices: [
            "Naussica Valley of the Wind",
            "Kiki's Delivery Service",
            "Howl's Moving Castle",
            "The Cat's Return"
        ]
    },
    {
        theQuestion: "What is Dumbledor's favorite candy?",
        correctAnswer: "Lemon Drops",
        choices: [
            "Chocolate Frogs",
            "Lemon Drops",
            "Berti Bots Every Flavor Beans",
            "Peppermint Sticks"
        ]
    },
    {
        theQuestion: "In which Lord of the Rings film did Viggo Mortenson break his foot?",
        correctAnswer: "The Two Towers",
        choices: [
            "The Fellowship of the Ring",
            "The Return of the King",
            "None of the Above",
            "The Two Towers"
        ]
    },
    {
        theQuestion: "Which of these are the strongest villians in the Dr. Who Universe?",
        correctAnswer: "The Weeping Angels",
        choices: [
            "The Cyber Men",
            "The Daleks",
            "The Weeping Angels",
            "The Master"
        ]
    }







];

localStorage.setItem("myQuestions", JSON.stringify(questionsArray));