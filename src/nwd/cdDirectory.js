import process from "process";  
import { join } from 'path';
import fs from 'fs';
import {existsSync} from'node:fs';

export function cdDirectory(input) {
        const folder =  input.slice(2).trim()
        let currentDirectory = process.cwd()
        let openFolder = join(currentDirectory, `./${folder}`)

        if(existsSync(openFolder)) {
        const folderExist = fs.lstatSync(join(currentDirectory, `./${folder}`)).isDirectory()

            if(folderExist) {
            process.chdir(openFolder)
            console.log(`You are currently in  ${openFolder}`)
            } else {
            console.log('That is a file, not a folder')
        }
    
        } else{
            console.log(`You are currently in  ${openFolder}`)
            console.log("Operation failed")
        }
}


