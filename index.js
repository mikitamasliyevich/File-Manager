import process from "process";  
import readline from "readline";
import { cdDirectory } from './src/nwd/cdDirectory.js';
import { listFiles } from './src/nwd/listFiles.js';
import { upDirectory } from './src/nwd/upDirectory.js';
import { readFile } from './src/files/readFile.js';
import { createFile } from './src/files/createFile.js';
import { renameFile } from './src/files/renameFile.js';
import { copyFile } from './src/files/copyFile.js';
import { moveFile } from './src/files/moveFile.js';
import { deleteFile } from "./src/files/deleteFile.js";
import {exitFileManager, finishFileManager} from './utils/finishFM.js';
import {UP_COMMAND, LS_COMMAND, CD_COMMAND, EXIT_COMMAND, READ_COMMAND, CREATE_COMMAND,
RENAME_COMMAND, COPY_COMMAND, MOVE_COMMAND, DELETE_COMMAND} from './utils/helpers.js';

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
      case input === EXIT_COMMAND:
        exitFileManager(username)
      default:
        console.log('Invalid input') || finishFileManager(rl, username)
      }
    })
}

startFileManager()