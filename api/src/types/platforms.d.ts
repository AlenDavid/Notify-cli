type AvailablePlataforms = "expo";

interface IPlataform {
  type: AvailablePlataforms;
}

interface ExpoPlataform extends IPlataform {
  type: "expo";
}

interface IPusher extends Plataform {
  send(title: string, body: string): void;
}

type Plataform = ExpoPlataform;
