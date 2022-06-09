import process from "process";  
import readline from "readline";
import {cdDirectory} from './src/nwd/cdDirectory.js';
import {listFiles} from './src/nwd/listFiles.js';
import {upDirectory} from './src/nwd/upDirectory.js'
import {exitFileManager, finishFileManager} from './utils/finishFM.js'
import {UP_COMMAND, LS_COMMAND, CD_COMMAND, EXIT_COMMAND} from './utils/helpers.js'

export const startFileManager = () => {
  const arg = process.argv;
  let username = "";
  const homeDirectory = process.env.HOME || process.env.USERPROFILE;

  for (let i = 0; i < arg.length; i++) {
    if (arg[i].startsWith("--username")) {
      username += `${arg[i]}`.slice(11);
      process.chdir(homeDirectory)
      process.stdout.write( `Welcome to the File Manager, ${username}! \n`);
      process.stdout.write( `You are currently in ${homeDirectory}`);
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
      case input = EXIT_COMMAND:
        exitFileManager(username)
      default:
        console.log('Invalid input') || finishFileManager(rl, username)
      }
    })
}

startFileManager()