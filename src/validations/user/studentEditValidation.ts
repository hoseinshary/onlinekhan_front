import {
  required,
  displayName,
  maxLength,
  minLength,
  requiredDdl,
  numeric,
  onlyPersianChar,
  notPersianChar
} from "src/plugins/vuelidate";
import { ValidationRuleset, validationMixin } from "vuelidate";
import IStudent from "src/models/IStudent";

type TStudent = { student: IStudent; validationGroup: string[] };
const studentEditValidations: ValidationRuleset<TStudent> = {
  student: {
    Gender: {
      displayName: displayName("جنسیت"),
      required
    },
    BirthYear: {
      displayName: displayName("سال تولد")    
    },
    SahmieNahayei: {
      displayName: displayName("سهمیه نهایی")    
    },
    Field: {
      displayName: displayName("رشته")    
    },
    DiplomYear: {
      displayName: displayName("سال اخذ دیپلم")    
    },
   
    ProvinceBoomyId: {
      displayName: displayName("استان بومی"),
      requiredDdl: requiredDdl(0)
    },
    NahyeBoomy: {
      displayName: displayName("ناحیه بومی")    
    },
    GhotbBoomy: {
      displayName: displayName("قطب بومی")    
    },
    IsAllowedRoozane: {
      displayName: displayName("دوره های روزانه / نوبت دوم") 
    },
    IsAllowedMajazi: {
      displayName: displayName("مجازی و پردیس خودگردان")    
    },
    IsAllowedPayam: {
      displayName: displayName("رشته های پیام نور و غیر انتفاعی")    
    },
    IsAllowedAzad: {
      displayName: displayName("دانشگاه آزاد اسلامی")    
    },
    GorohAzmayeshi: {
      displayName: displayName("گروه آزمایشی")    
    },
    IsAllowedRozaneGoroh: {
      displayName: displayName("دوره های روزانه / نوبت دوم")    
    },
    IsAllowedMajaziGoroh: {
      displayName: displayName("مجازی ,پردیس خودگردان شهریه پرداز و دانشگاه آزاد اسلامی")    
    },
    IsAllowedFarhangianGoroh: {
      displayName: displayName("دانشگاه فرهنگیان و دانشگاه شهید رجایی")    
    },
    IsAllowedPayamGoroh: {
      displayName: displayName("رشته های پیام نور و غیر انتفاعی")    
    },
    IsAllowedAzadGoroh: {
      displayName: displayName("دانشگاه آزاد اسلامی")    
    },
    SahmieNahayeiOne: {
      displayName: displayName("رتبه در سهمیه نهایی یک")    
    },
    SahmieNahayeiTwo: {
      displayName: displayName("رتبه در سهمیه نهایی دو")    
    },
    SahmieNahayeiThree: {
      displayName: displayName("رتبه در سهمیه نهایی سه")    
    },
    SahmieNahayeiFour: {
      displayName: displayName("رتبه در سهمیه نهایی چهار")    
    },
    SahmieNahayeiFive: {
      displayName: displayName("رتبه در سهمیه نهایی پنج")    
    },
    KeshvariOne: {
      displayName: displayName("رتبه کشوری یک")    
    },
    KeshvariTwo: {
      displayName: displayName("رتبه کشوری دو")    
    },
    KeshvariThree: {
      displayName: displayName("رتبه کشوری سه")    
    },
    KeshvariFour: {
      displayName: displayName("رتبه کشوری چهار")    
    },
    KeshvariFive: {
      displayName: displayName("رتبه کشوری پنج")    
    },
    KolOne: {
      displayName: displayName("نمره کل نهایی یک")    
    },
    KolTwo: {
      displayName: displayName("نمره کل نهایی دو")    
    },
    KolThree: {
      displayName: displayName("نمره کل نهایی سه")    
    },
    KolFour: {
      displayName: displayName("نمره کل نهایی چهار")    
    },
    KolFive: {
      displayName: displayName("نمره کل نهایی پنج")    
    },
    
    
    
    
  }
};

export { validationMixin, studentEditValidations };
