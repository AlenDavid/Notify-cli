import child from "child_process";

export const run = (command: string, cb?: (stdout: string) => void) => {
  child.exec(command, (err: any, stdout: any) => {
    if (err) {
      console.log("Your command failed to execute!");
      process.exit(err.code || 1);
    }

    if (cb) {
      cb(stdout);
    }
  });
};
