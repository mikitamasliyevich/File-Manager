import crypto from'crypto';
import { join } from 'path';
import fs from 'fs';

export const hashFile = async (input) => {
try{
    const file =  input.slice(4).trim();
    let currentFolder = process.cwd();
    const fileExist = fs.lstatSync(join(currentFolder, `./${file}`)).isFile();
    let pathToFile = join(currentFolder, `./${file}`);
    if(fileExist){
        fs.createReadStream(pathToFile).
        pipe(crypto.createHash('sha1').setEncoding('hex')).
        on('finish', function () {
          console.log('hash:', this.read())
        })
    } else {
        console.log('You are trying to hash a folder')
    }
} catch(err) {
    console.log(`You are currently in  ${process.cwd()}`)
    console.log(`Operation failed ${err.message}`)
}
};