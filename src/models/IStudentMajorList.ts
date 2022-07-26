import { Field } from "src/utilities/enumeration";
import IStudent, { DefaultStudent } from "./IStudent";

export default interface IStudentMajorList {
  Id: number;
  Title: string;
  StudentId: number;
  Student:IStudent;
  Majors : Array<Major>;
}

export const DefaultStudentMajorList: IStudentMajorList = {
  Id: 0,
  Title: "",
  StudentId: 0,
  Majors:[],
  Student:DefaultStudent
};



export class Major {
  Id: number;
  Course: string;
  Code: number;
  MajorTitle: string;
  AdmissionFirst : number;
  AdmissionSecond: number;
  Woman: string;
  Man: string;
  University: string;
  Field:Field;
  Description:string;
  Apply : string;
  ZirGoroh: number;
  NoeGozinesh: number;
  RotbeNahaei: number;
  RotbeKeshvari: number;
  RotbeKol: number;
  IncludeYou:boolean;
  Province: string;
  constructor(){
    this.Id =0;
    this.Course="";
    this.Code=0;
    this.MajorTitle ="";
    this.AdmissionFirst=0;
    this.AdmissionSecond=0;
    this.Woman="";
    this.Man="";
    this.University="";
    this.Field=Field["تجربی"];
    this.Description="";
    this.Apply= "";
    this.RotbeNahaei=0;
    this.RotbeKeshvari=0;
    this.RotbeKol= 0;
    this.ZirGoroh= 0;
    this.NoeGozinesh= 0;
    this.IncludeYou= false;
    this.Province= "";
  }

}
