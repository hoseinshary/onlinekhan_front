import IUser, { DefaultUser } from "./IUser";

export default interface IStudent {
  Id: number;
  FatherName: string;
  Address: string;
  Gender:boolean;
  BirthYear: number;
  SahmieNahayei:number;
  Field:number;
  DiplomYear:number;
  ProvinceBoomyId :number;
  NahyeBoomy :number;
  GhotbBoomy :number;
  IsAllowedRoozane: boolean;
  IsAllowedMajazi: boolean;
  IsAllowedPayam: boolean;
  IsAllowedAzad:boolean;
  GorohAzmayeshi :number;
  IsAllowedRozaneGoroh :boolean;
  IsAllowedMajaziGoroh:boolean;
  IsAllowedFarhangianGoroh:boolean;
  IsAllowedPayamGoroh: boolean;
  IsAllowedAzadGoroh: boolean;

  SahmieNahayeiOne:number;
  SahmieNahayeiTwo:number;
  SahmieNahayeiThree :number;
  SahmieNahayeiFour :number;
  SahmieNahayeiFive :number;
  KeshvariOne :number;
  KeshvariTwo :number;
  KeshvariThree :number;
  KeshvariFour :number;
  KeshvariFive :number;
  KolOne :number;
  KolTwo :number;
  KolThree :number;
  KolFour :number;
  KolFive :number;
  User: IUser;
}

export const DefaultStudent: IStudent = {
    Id: 0,
    FatherName: "",
    Address: "",
    Gender: false,
    BirthYear: 0,
    SahmieNahayei: 0,
    Field: 0,
    DiplomYear: 1398,
    ProvinceBoomyId: 5,
    NahyeBoomy: 0,
    GhotbBoomy: 0,
    IsAllowedRoozane: false,
    IsAllowedMajazi: false,
    IsAllowedPayam: false,
    IsAllowedAzad: false,
    GorohAzmayeshi: 0,
    IsAllowedRozaneGoroh: false,
    IsAllowedMajaziGoroh: false,
    IsAllowedFarhangianGoroh: false,
    IsAllowedPayamGoroh: false,
    IsAllowedAzadGoroh: false,
    SahmieNahayeiOne: 0,
    SahmieNahayeiTwo: 0,
    SahmieNahayeiThree: 0,
    SahmieNahayeiFour: 0,
    SahmieNahayeiFive: 0,
    KeshvariOne: 0,
    KeshvariTwo: 0,
    KeshvariThree: 0,
    KeshvariFour: 0,
    KeshvariFive: 0,
    KolOne: 0,
    KolTwo: 0,
    KolThree: 0,
    KolFour: 0,
    KolFive: 0,
    User: DefaultUser
};
