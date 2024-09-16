const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    {name: 'nome', message: 'qual o seu nome ?'},
    {name: 'idade', message: 'qual a sua idade ?'},
])

.then((answers) => {
    const response = `o nome de usuário é ${answers.nome} e ele tem ${answers.idade} anos`
    console.log(chalk.bgYellow.black(response))
})