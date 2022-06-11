import process from "process";  
import fs from "fs";
import { join } from 'path';
import {existsSync} from'node:fs';


export const deleteFile = async (input) => {
    const inputReceived =  input.slice(2).trim();
    let data =  inputReceived.split(/[ ,]+/);
    let currentFolder = process.cwd();
    let pathToFile = join(currentFolder, `./${data[0]}`);
    if(existsSync(pathToFile)) {
        fs.unlink(pathToFile, function (err) {
            if (err) {
                console.log(`Operation failed ${err.message}`);
            } else {
                console.warn(pathToFile + ' deleted');
                console.log(`You are currently in  ${currentFolder}`)
            }
        })
    } else {
        console.log('Operation failed')
        console.log(`You are currently in  ${process.cwd()}`)
        }
}

