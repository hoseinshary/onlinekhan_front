import {
  required,
  displayName,
  maxLength,
  numeric,
  requiredDdl
} from "src/plugins/vuelidate";
import { ValidationRuleset, validationMixin } from "vuelidate";
import IEducationTree from "src/models/IEducationTree";

type TEducationTree = {
  educationTree: IEducationTree;
  validationGroup: string[];
};
const educationTreeValidations: ValidationRuleset<TEducationTree> = {
  educationTree: {
    Name: {
      displayName: displayName("نام"),
      maxLength: maxLength(50),
      required
    },
    LookupId_EducationTreeState: {
      displayName: displayName("نوع درخت آموزش"),
      requiredDdl: requiredDdl(0),
      required
    },
    ParentEducationTreeId: {
      displayName: displayName("درخت آموزش پدر"),
      numeric
    }
  }
};

export { validationMixin, educationTreeValidations };
