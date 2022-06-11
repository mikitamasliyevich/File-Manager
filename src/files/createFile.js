import process from "process";  
import fs from "fs";
import { join } from 'path';

export const createFile = async (input) => {
    try{
        const file =  input.slice(3).trim();
        let currentFolder = process.cwd();
        let pathToFile = join(currentFolder, `./${file}`);

        fs.createWriteStream(pathToFile);
        console.log('File was created')
        console.log(`You are currently in  ${process.cwd()}`)

    } catch(err){
        console.log(`You are currently in  ${process.cwd()}`)
        console.log(`Operation failed ${err.message}`)
    }
}


