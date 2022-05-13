interface ExpoDevice extends IPlataform {
  type: "expo";
  token: string;
}

type Device = ExpoDevice;
