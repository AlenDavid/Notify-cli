import axios from "axios";

interface Options {
  level?: "info" | "warning" | "error";
}

const baseURL = "http://0.0.0.0:3000/api";

const notify = axios.create({
  headers: {
    Authorization: `Bearer ${process.env.NOTIFY_TOKEN}`,
  },
  baseURL,
});

export function sendNotification(
  title: string,
  message: string,
  options: Options = {}
) {
  return notify.post("/notify", {
    title,
    body: message,
    level: options.level || "info",
  });
}
