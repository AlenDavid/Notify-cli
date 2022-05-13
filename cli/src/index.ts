import args from "args";
import { sendNotification } from "./services/notify";
import { run } from "./services/process";

args.option("token", "Overwrite the token to use for the notification");
args.option("print", "Print the stdout of the command", false);

args.command("run", "Command to run", (name, sub, options: any) => {
  const { print } = options;
  const command = sub.join(" ");

  if (command == "") {
    console.log("Please specify a command to run");
    process.exit(1);
  }

  function send(stdout: string) {
    if (print) {
      console.log(stdout);
    }

    sendNotification(command, stdout)
      .then(() => process.exit(0))
      .catch((err) => {
        if (print) {
          console.error(err);
        }
        process.exit(1);
      });
  }

  run(command, send);
});

args.parse(process.argv);
