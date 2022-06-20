import process from "process";  


export const exitFileManager = (username) => {
      process.stdout.write(`Thank you for using File Manager, ${username}!`)
      process.exit();
}

export const finishFileManager = (rl, userName) => {

    if (process.platform === "win32") {
  
      rl.on("SIGINT", function () {
        process.emit("SIGINT");
      });
    
      process.on("SIGINT", function () {
      process.stdout.write(`Thank you for using File Manager, ${userName}!`)
      process.exit();
    });
  
    }
  }
