import { displayName, maxLength, requiredDdl } from "src/plugins/vuelidate";
import { ValidationRuleset, validationMixin } from "vuelidate";
import IQuestionAnswerMulti from "src/models/IQuestionAnswerMulti";

type TQuestionAnswerMulti = {
  questionAnswerMulti: IQuestionAnswerMulti;
  validationGroup: string[];
};
const questionAnswerMultiValidations: ValidationRuleset<
  TQuestionAnswerMulti
> = {
  questionAnswerMulti: {
    Title: {
      displayName: displayName("عنوان"),
      maxLength: maxLength(50)
      // required
    },
    WriterId: {
      displayName: displayName("نویسنده"),
      requiredDdl: requiredDdl(0)
    },
    QuestionGroupId: {
      displayName: displayName("سوال"),
      requiredDdl: requiredDdl(0)
    }
  }
};

export { validationMixin, questionAnswerMultiValidations };
