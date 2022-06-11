import process from "process";  
import { join } from 'path';

export const upDirectory = () => {
    let currentDirectory = process.cwd();
    const updateDirectory = join(currentDirectory, '..');
    process.chdir(updateDirectory)
    process.stdout.write( `You are currently in ${updateDirectory}  \n`);
}