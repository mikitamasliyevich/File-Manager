import os from "os";
import process from "process";  

export const osEOL = async () => {
  console.log(JSON.stringify(os.EOL));
  console.log(`You are currently in ${process.cwd()}`);
};

export const osCPUS = async () => {
  console.log(os.cpus());
  console.log(`You are currently in ${process.cwd()}`);
};

export const osHOMEDIR   = async () => {
  console.log(os.homedir());
  console.log(`You are currently in ${process.cwd()}`);
};

export const osUserName = async () => {
  const user = os.userInfo();
  console.log(user.username);
  console.log(`You are currently in ${process.cwd()}`);
};

export const osArchitecture = async () => {
  console.log(os.arch());
  console.log(`You are currently in ${process.cwd()}`);
};