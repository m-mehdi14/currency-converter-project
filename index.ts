#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";

const sleep = ()=>{
    return new Promise((resolve) => {
        setTimeout(resolve,2000);
    })
}
async function wellcome() {
    console.log('');
    
    figlet(' currency converter  ',(err,data)=>{
        console.log(gradient.fruit(data));
    });
    await sleep();
    console.log(chalk.cyanBright('Get the latest Exchange Rates!\n'));
    
}


let displaymessage = async () => {
    console.log(chalk.whiteBright("How to use ?"));
    console.log(chalk.cyanBright("1. Enter the Total amount you want to convert."));
    console.log(chalk.cyanBright("2. Enter currency that you want to convert FROM e.g :(USD,GBP,PKR)"));
    console.log(chalk.cyanBright("3. Enter currency that you want to convert TO e.g :(USD,GBP,PKR)."));
    
}



async function question() {
    
    const answer:{amount:number,from:string,to:string} = await inquirer.prompt([
        {
            type:"input",
            name:"amount",
            message:"Enter Your Amount : ",
        },
        {
            type:"list",
            name:"from",
            message:"Select Currency to convert from:",
            choices:["Dollar","Pound","Rupees"],
        },
        {
            type:"list",
            name:"to",
            message:"Select Currency convert to  :",
            choices:["Dollar","Pound","Rupees"],
        }
    ]);
        console.log(`Converted \n ${chalk.yellowBright(answer.from)} TO ${chalk.yellowBright(answer.to)}`);
        if(answer.from == "Dollar" && answer.to == "Rupees"){
            let a = answer.amount * 245;
            console.log(chalk.yellowBright("Converted Amount : ",a));
            console.log(chalk.whiteBright("Coversion Rate : 245 "));
            
        }
        else if(answer.from == "Dollar" && answer.to == "Pound"){
            let a = answer.amount * 0.83;
            console.log(chalk.yellowBright("Converted Amount : ",a));
            console.log(chalk.whiteBright("Coversion Rate : 0.83 "));
            
        }
        else if(answer.from == "Dollar" && answer.to == "Dollar"){
            console.log(chalk.redBright("Unable to convert the currency !"));
            
        }
        else if(answer.from == "Pound" && answer.to == "Dollar"){
            let a = answer.amount * 1.21;
            console.log(chalk.yellowBright("Converted Amount : ",a));
            console.log(chalk.whiteBright("Coversion Rate : 1.21 "));

        }
        else if(answer.from == "Pound" && answer.to == "Rupees"){
            let a = Math.floor(answer.amount * 272.92);
            console.log(chalk.yellowBright("Converted Amount : ",a));
            console.log(chalk.whiteBright("Coversion Rate : 272.92 "));
        }
        else if(answer.from == "Pound" && answer.to == "Pound"){
            console.log(chalk.redBright("Unable to convert the currency !"));
        }
        else if(answer.from == "Rupees" && answer.to == "Dollar"){
            let a = answer.amount * 0.0044;
            console.log(chalk.yellowBright("Converted Amount : ",a));
            console.log(chalk.whiteBright("Coversion Rate : 0.0044 "));
        }
        else if (answer.from == "Rupees" && answer.to == "Pound"){
            let a = answer.amount *0.0037;
            console.log(chalk.yellowBright("Converted Amount : ",a));
            console.log(chalk.whiteBright("Coversion Rate : 0.0037 "));
        }
        else if(answer.from == "Rupees" && answer.to == "Rupees"){
            console.log(chalk.redBright("Unable to convert the currency !"));
        }
}


async function startagain(){
    do {
        await wellcome();
        await displaymessage();
        await question();
        var again:{restart:string} = await inquirer.prompt([
            {
                type:"input",
                name:"restart",
                message:"Do you want to Convert another currency ? press yes/no ",
            }
        ])
    } while (again.restart == "y" || again.restart == "yes" || again.restart == "YES" || again.restart == "Yes");
 
}
await startagain();
