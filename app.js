const fs = require("fs")
const inquirer = require("inquirer")
let renderFile = require("./render")
const generateManager = renderFile.createManager
const generateEngineer = renderFile.createEngineer
const generateIntern = renderFile.createIntern
const renderHTML = renderFile.renderMain

function askQuestions() {

    inquirer
        .prompt([{
                type: "input",
                message: "What is your name?",
                name: "name",
            },
            {
                type: "number",
                message: "What is your ID?",
                name: "id",
            }, {
                type: "input",
                message: "What is your email address?",
                name: "email",
            },
            {
                type: "list",
                message: "What is your role?",
                name: "role",
                choices: ["Engineer", "Intern", "Manager"]
            }
        ])
        .then(
            function({ name, id, email, role }) {
                switch (role) {
                    case "Engineer":
                        {
                            inquirer
                            .prompt({
                                type: "input",
                                message: "What is your GitHub username?",
                                name: "github"
                            }).then(
                                function(name, id, email, github) {
                                    generateEngineer(name, id, email, github)
                                }
                            )
                        }
                        break
                    case "Intern":
                        {
                            inquirer
                            .prompt({
                                type: "input",
                                message: "What school do you attend?",
                                name: "school"
                            }).then(
                                function(name, id, email, school) {
                                    generateIntern(name, id, email, school)
                                }
                            )
                        }
                        break
                    case "Manager":
                        {
                            inquirer
                            .prompt({
                                type: "input",
                                message: "What is your Office Number?",
                                name: "officeNumber"
                            }).then(
                                function(name, id, email, officeNumber) {
                                    generateManager(name, id, email, officeNumber)
                                }
                            )
                        }
                        break
                }
            })
    addOtherMembers()
}

function addOtherMembers() {
    inquirer.prompt({
        type: "list",
        message: "Add other Team Members?",
        name: "addOtherMembers",
        choices: ["Yes", "No"]
    }).then(
        function(choice) {
            if (choice === "Yes") {
                askQuestions()
            } else {
                renderHTML()
            }
        }
    )

}

function init() {
    askQuestions()
}

init()