import ILookup from "./ILookup";

export default interface IEducationTree {
  Id: number;
  Name: string;
  LookupId_EducationTreeState: number;
  ParentEducationTreeId?: number | null;
  ParentEducationTree?: IEducationTree;
  Lookup_EducationTreeState?: ILookup;
}

export const DefaultEducationTree: IEducationTree = {
  Id: 0,
  Name: "",
  LookupId_EducationTreeState: 0,
  ParentEducationTreeId: null
};
