import IEducationTree from "./IEducationTree";
import IRatio from "./IRatio";
import ILessonDepartment from "./ILessonDepartment";

export default interface ILesson {
  Id: number;
  Name: string;
  IsMain: boolean;
  NumberOfJudges: number;
  LookupId_Nezam: number;
  EducationTreeIds: Array<number>;
  EducationTrees?: Array<IEducationTree>;
  Ratios: Array<IRatio>;
  Checked: boolean;
  LessonDepartmentId: number;
  LessonDepartments?: Array<ILessonDepartment>;
}

export const DefaultLesson: ILesson = {
  Id: 0,
  Name: "",
  IsMain: false,
  NumberOfJudges: 1,
  LookupId_Nezam: 0,
  EducationTreeIds: [],
  Ratios: [],
  Checked: false,
  LessonDepartmentId: 0,
  LessonDepartments: []
};
