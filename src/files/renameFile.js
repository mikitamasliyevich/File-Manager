import process from "process";  
import fs from "fs";
import { join } from 'path';
import {existsSync} from'node:fs';


export const renameFile = async (input) => {
    try{
        const inputReceived =  input.slice(2).trim();
        let data =  inputReceived.split(/[ ,]+/);
        let currentFolder = process.cwd();
        let pathToFile = join(currentFolder, `./${data[0]}`);
        if(existsSync(pathToFile)) {
        let newNameFile = data[1]
        const readStream = fs.createReadStream(pathToFile);
        const writeStream = fs.createWriteStream(newNameFile); 

          readStream.pipe(writeStream)

         const deleteFile = (file) => {
            fs.unlink(file, function (err) {
                if (err) {
                    console.log(`Operation failed ${err.message}`);
                } else {
                    console.warn(file + ' deleted and renamed to a new one');
                }
            }
        )}
    
        readStream.on("close", function () {
            readStream.destroy(); 
            deleteFile(pathToFile);
        });   
        console.log(`You are currently in  ${currentFolder}`)
    } else {
        console.log('Operation failed')
    }
    } catch(err){
        console.log(`You are currently in  ${currentFolder}`)
        console.log(`Operation failed ${err.message}`)
    }
}
