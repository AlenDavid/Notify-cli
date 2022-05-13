import { sendNotification } from "../expo";

function expo(device: Device): IPusher {
  const token = device.token;

  return {
    type: "expo",
    send(title: string, body: string) {
      console.log("Sending notification to Expo");
      sendNotification(token, title, { body });
    },
  };
}

type Plataforms = (device: Device) => IPusher;

const plataforms: Record<string, Plataforms> = {
  expo,
};

export default plataforms;
