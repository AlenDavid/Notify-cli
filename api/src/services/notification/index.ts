import Tokens from "../../models/tokens";
import plataforms from "../platforms";

const getDevices = async (token: string): Promise<Device[]> => {
  const result = await Tokens.findOne({ token }).exec();

  if (!result?.devices) {
    console.log(`Token ${token} not found`);

    return [];
  }

  return result.devices;
};

export const send = async (token: string, title: string, body: string) => {
  const devices = await getDevices(token);

  devices.forEach((device) => {
    const plataform = plataforms[device.type];

    plataform(device).send(title, body);
  });
};
