import process from "process";  
import fs from "fs";
import { join } from 'path';
import {existsSync} from'node:fs';


export const moveFile = async (input) => {
    try{
        const inputReceived =  input.slice(2).trim();
        let data =  inputReceived.split(/[ ,]+/);
        let pathToFile = join(process.cwd(), `./${data[0]}`);
        let pathToNewDirectory = join(process.cwd(), `./${data[1]}/${data[0]}`);
        if(existsSync(pathToFile)) {
        const readStream = fs.createReadStream(pathToFile);
        const writeStream = fs.createWriteStream(pathToNewDirectory); 
        readStream.pipe(writeStream)
        const deleteFile = (file) => {
            fs.unlink(file, function (err) {
                if (err) {
                    console.log(`Operation failed ${err.message}`);
                } else {
                    console.warn(file + ' deleted');
                }
            }
        )}

        readStream.on("close", function () {
            console.log(`Moved successfully as ${pathToNewDirectory}`);
            console.log(`You are currently in  ${process.cwd()}`)
            readStream.destroy(); 
            deleteFile(pathToFile);
        });
     } else {
            console.log('Operation failed')
        }
    } catch(err){
        console.log(`You are currently in  ${process.cwd()}`)
        console.log(`Operation failed ${err.message}`)
    }
}
