import process from "process";  
import fs from "fs";
import { join } from 'path';

export const readFile = async (input) => {
    try{
        const file =  input.slice(3).trim();
        let currentFolder = process.cwd();
        const fileExist = fs.lstatSync(join(currentFolder, `./${file}`)).isFile();

        if(fileExist) {
        let wayToFile = join(currentFolder, `./${file}`);
        const readStream = fs.createReadStream(wayToFile);
        readStream.on('data', (chunk) => {
        process.stdout.write(chunk.toString());
        })
        console.log(`You are currently in  ${process.cwd()}`)
     } else {
         console.log('You are trying to open not a file')
     }
    } catch(err){
        console.log(`You are currently in  ${process.cwd()}`)
        console.log(`Operation failed ${err.message}`)
    }
}




