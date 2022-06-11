import process from "process";  
import readline from "readline";
import { cdDirectory, listFiles, upDirectory} from './src/nwd/index.js'
import { readFile, createFile, renameFile, copyFile, moveFile, deleteFile } from "./src/files/index.js";
import { hashFile } from "./src/hash/hashFile.js";
import { compressFile, decompressFile} from './src/operations/index.js'
import {exitFileManager, finishFileManager} from './utils/finishFM.js';
import {UP_COMMAND, LS_COMMAND, CD_COMMAND, EXIT_COMMAND, READ_COMMAND, CREATE_COMMAND,
RENAME_COMMAND, COPY_COMMAND, MOVE_COMMAND, DELETE_COMMAND, HASH_COMMAND, COMPRESS_COMMAND, DECOMPRESS_COMMAND} from './utils/helpers.js';

export const startFileManager = () => {
  const arg = process.argv;
  let username = "";
  const homeDirectory = process.env.HOME || process.env.USERPROFILE;

  for (let i = 0; i < arg.length; i++) {
    if (arg[i].startsWith("--username")) {
      username += `${arg[i]}`.slice(11);
      process.chdir(homeDirectory)
      process.stdout.write( `Welcome to the File Manager, ${username}! \n`);
      process.stdout.write( `You are currently in ${homeDirectory}  \n`);
    }
  }  

  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on("line", (input) => {
    switch(true){
      case input === UP_COMMAND:
        upDirectory();
        break;
      case input === LS_COMMAND:
        listFiles();
        break;
      case input.startsWith(CD_COMMAND):
        cdDirectory(input)
        break;
      case input.startsWith(READ_COMMAND):
        readFile(input)
        break;
      case input.startsWith(CREATE_COMMAND):
        createFile(input)
        break;
      case input.startsWith(RENAME_COMMAND):
        renameFile(input)
        break;  
      case input.startsWith(COPY_COMMAND):
        copyFile(input)
        break;
      case input.startsWith(MOVE_COMMAND):
        moveFile(input)
        break;  
      case input.startsWith(DELETE_COMMAND):
        deleteFile(input)
        break; 
      case input.startsWith(HASH_COMMAND):
        hashFile(input)
        break;      
      case input.startsWith(COMPRESS_COMMAND):
        compressFile(input)
        break;   
      case input.startsWith(DECOMPRESS_COMMAND):
        decompressFile(input)
        break; 
      case input === EXIT_COMMAND:
        exitFileManager(username)
      default:
        console.log('Invalid input') || finishFileManager(rl, username)
      }
    })
}

startFileManager()