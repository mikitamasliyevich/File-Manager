import zlib from 'zlib'
import fs from 'fs'
import { join } from 'path';
import {existsSync} from'node:fs';


export const decompressFile = async (input) => {

    try{
    const inputReceived =  input.slice(10).trim();
    let data =  inputReceived.split(/[ ,]+/);
    let pathToFile = join(process.cwd(), `./${data[0]}`);
    let pathToNewDirectory = join(process.cwd(), `./${data[1]}`);


    if(existsSync(pathToFile)) {

    const readStream = fs.createReadStream(pathToFile);
    const writeStream = fs.createWriteStream(pathToNewDirectory);
    const brotli = zlib.createBrotliDecompress();
    const stream = readStream.pipe(brotli).pipe(writeStream);

    stream.on('finish', () => {
        console.log('Done decompressing !');
      });

    } else {
        console.log('Operation failed')
    }

    } catch(err){
        console.log(`You are currently in  ${process.cwd()}`)
        console.log(`Operation failed ${err.message}`)
    }

};