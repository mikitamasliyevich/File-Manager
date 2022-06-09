import * as url from 'url';
import process from "process";  
import fs from 'fs';


export const listFiles = () => {
  let currentDirectory = process.cwd();
    fs.readdir(currentDirectory, (err, files) => {
        if (err) {
          return console.log('Operation failed');
        }
        files.forEach(file => {
           return console.log(file);
          });
        });
}

