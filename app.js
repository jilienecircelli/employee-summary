const fs = require("fs")
const inquirer = require("inquirer")
const employeeGen = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")
const teamMembers = [];

function init() {

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
                                // new class within array
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
                            }).then()
                        }
                        break
                    case "Manager":
                        {
                            inquirer
                            .prompt({
                                type: "input",
                                message: "What is your Office Number?",
                                name: "officeNumber"
                            }).then()
                        }
                        break
                }

            })
}

init();