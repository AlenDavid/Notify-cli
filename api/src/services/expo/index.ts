import axios from "axios";

const baseURL = "https://expo.io/--/api/v2/";

const expo = axios.create({
  baseURL,
});

interface Options {
  body?: string | object;
}

export const sendNotification = async (
  to: string,
  title: string,
  options: Options = {}
) => {
  const body = JSON.stringify(options.body);

  return expo.post("/push/send", { to, title, body }).catch((err) => {
    console.error(err);
    return err;
  });
};

export default expo;
