import process from "process";  
import { join } from 'path';
import fs from 'fs'

export function cdDirectory(input) {
    
    try{
        const folder =  input.slice(2).trim()
        let currentDirectory = process.cwd()
        const folderExist = fs.lstatSync(join(currentDirectory, `./${folder}`)).isDirectory()
        if(folderExist) {
       let openFolder = join(currentDirectory, `./${folder}`)
        process.chdir(openFolder)
        console.log(`You are currently in  ${openFolder}`)
     } else {
         console.log('That is a file, not a folder')
     }
    } catch(err){
        console.log('Operation failed')
    }
}


