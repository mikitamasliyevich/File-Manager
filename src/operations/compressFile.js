import zlib from 'zlib'
import fs from 'fs'
import { join } from 'path';
import {existsSync} from'node:fs';


export const compressFile = async (input) => {

    try{
    const inputReceived =  input.slice(8).trim();
    let data =  inputReceived.split(/[ ,]+/);
    let pathToFile = join(process.cwd(), `./${data[0]}`);
    let pathToNewDirectory = join(process.cwd(), `./${data[1]}/${data[0]}.br`);
    if(existsSync(pathToFile)) {

    const readStream = fs.createReadStream(pathToFile);
    const writeStream = fs.createWriteStream(pathToNewDirectory);
    const brotli = zlib.createBrotliCompress();
    const stream = readStream.pipe(brotli).pipe(writeStream);

    stream.on('finish', () => {
        console.log('Done compressing !');
      });

    } else {
        console.log('Operation failed')
    }

    } catch(err){
        console.log(`You are currently in  ${process.cwd()}`)
        console.log(`Operation failed ${err.message}`)
    }

};