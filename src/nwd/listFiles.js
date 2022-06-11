import * as url from 'url';
import process from "process";  
import fs from 'fs';


export const listFiles = () => {
  let currentDirectory = process.cwd();
    fs.readdir(currentDirectory, (err, files) => {
        if (err) {
          console.log(`You are currently in  ${process.cwd()}`)
          console.log(`Operation failed ${err.message}`)
        }
        files.forEach(file => {
           return console.log(file);
          });
        });
}

