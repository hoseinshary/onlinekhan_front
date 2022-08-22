export enum UserType {
  Organ = 0,
  Student = 1,
  Teacher = 2
}

export enum DayOfWeek {
  "شنبه"=1,
  "یکشنبه"=2,
  "دوشنبه"=3,
  "سه شنبه"=4,
  "چهار شنبه"=5,
  "پنجشنبه"=6,
  "جمعه"=7


}

export enum AssayVarient{
  A = 1,
  B = 2,
  C = 3,
  D =4
}

export enum Tashih {
  Correct = 0,
  Wrong = 1,
  Non = 2
}

export enum MessageType {
  Error = 0,
  Success = 1,
  Warning = 2,
  NotFound = 3,
  Unauthorized = 4
}

export enum EducationTreeState {
  Grade = 1,
  SubTree = 2,
  EducationGroup = 3,
  GradeLevel = 4
}

export enum Fonts {
  BNazanin = 0,
  Arial = 1
}


export enum QuestionAnswerType {
  "نا مشخص" = 0,

  "کوتاه" = 1,
  "توضیحی" = 2
}

export enum  KindRequest {
  // Testi = 0,
  // Tashrihi = 1,
  // Both = 2
  "تستی" = 0,
  "تشریحی" = 1,
  "هر دو" = 2
}

export enum Maghta {
  // Dah = 0,
  // Yazdah = 1,
  // Davazdah = 2,
  // Konkoor = 3,
  "دهم" = 0,
  "یازدهم" = 1,
  "دوازدهم" = 2,
  "کنکور" = 3
}

export enum TypeEducationCenter {
  // Dolati = 0,
  // Azad = 1,
  // GheyreEntefaie = 2,
  // Payamnoor = 3,
  // Beynolmelal = 4,
  // Others = 5
  "دولتی" = 0,
  "آزاد" = 1,
  "غیر انتفاعی" = 2,
  "پیام نور" = 3,
  "بین الملل" = 4,
  "دیگر" = 5
}

export enum Field {
  
  "ریاضی" = 1,
  "تجربی" = 2,
  "انسانی" = 3,
  "هنر و زبان" = 4
}

export enum HistoryAssay {
  
  "با آزمون" = 1,
  "صرفاً با سوابق تحصیلی" = 2

}
export enum CourseAssay {
  
  "شهریه پرداز" = 1,
  "روزانه" = 2,
  "نوبت دوم" = 3,

}
export enum Degree {
  // ZireDiplom = 0,
  // Diplom = 1,
  // Kardani = 2,
  // Karshenasi = 3,
  // Karshenasiarshad = 4,
  // Doktora = 5
  "زیر دیپلم" = 0,
  "دیپلم" = 1,
  "کاردانی" = 2,
  "کارشناسی" = 3,
  "کارشناسی ارشد" = 4,
  "دکترا" = 5
}

export enum DegreeCertificate {
  // Daneshamooz = 0,
  // Diplom = 1,
  // KardaniStudent = 2,
  // Kardani = 3,
  // KarshenasiStudent = 4,
  // Karshenasi = 5,
  // KarshenasiarshadStudent = 6,
  // Karshenasiarshad = 7,
  // DoktoraStudent = 8,
  // Doktora = 9
  "دانش آموز" = 0,
  "دیپلم" = 1,
  "دانشجو کاردانی" = 2,
  "کاردانی" = 3,
  "دانشجو کارشناسی" = 4,
  "کارشناسی" = 5,
  "دانشجو کارشناسی ارشد" = 6,
  "کارشناسی ارشد" = 7,
  "دانشجو دکترا" = 8,
  "دکترا" = 9
}
