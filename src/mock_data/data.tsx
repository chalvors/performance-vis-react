export type StudentVariable = "id" | "ethnicity" | "gender" | "lgbtq" | "disabled" | "upbringing" | "hw1" | "quiz1" | "hw2" | "exam1";
export type GradeVariable = "hw1" | "quiz1" | "hw2" | "exam1" 

type StudentDataItem<T extends string> = {
  id: string,
  ethnicity: string,
  gender: string,
  lgbtq: string,
  disabled: string,
  upbringing: string,
  hw1: number;
  quiz1: number,
  hw2: number,
  exam1: number
}

export type GradeDataItem<T extends string> = {
  hw1: number,
  quiz1: number,
  hw2: number,
  exam1: number
}

export type StudentData = StudentDataItem<StudentVariable>[];
export type GradeData = GradeDataItem<GradeVariable>[];


export const students: StudentData = [
    {
        "id": "celverston0@bravesites.com",
        "ethnicity": "White",
        "gender": "Male",
        "lgbtq": "true",
        "disabled": "true",
        "upbringing": "Rural",
        "hw1": 56,
        "quiz1": 34,
        "hw2": 97,
        "exam1": 81
    },
    {
        "id": "dbortolini1@timesonline.co.uk",
        "ethnicity": "Not_White",
        "gender": "Female",
        "lgbtq": "false",
        "disabled": "false",
        "upbringing": "Rural",
        "hw1": 100,
        "quiz1": 16,
        "hw2": 39,
        "exam1": 12
    },
    {
        "id": "mtivnan2@webeden.co.uk",
        "ethnicity": "Not_White",
        "gender": "Female",
        "lgbtq": "true",
        "disabled": "true",
        "upbringing": "Urban",
        "hw1": 17,
        "quiz1": 23,
        "hw2": 63,
        "exam1": 17
    },
    {
        "id": "gsimmans3@about.com",
        "ethnicity": "White",
        "gender": "Female",
        "lgbtq": "true",
        "disabled": "false",
        "upbringing": "Urban",
        "hw1": 13,
        "quiz1": 9,
        "hw2": 71,
        "exam1": 13
    },
    {
        "id": "gchampkins4@wix.com",
        "ethnicity": "Not_White",
        "gender": "Female",
        "lgbtq": "true",
        "disabled": "false",
        "upbringing": "Rural",
        "hw1": 84,
        "quiz1": 65,
        "hw2": 78,
        "exam1": 70
    },
    {
        "id": "mokennavain5@google.de",
        "ethnicity": "White",
        "gender": "Female",
        "lgbtq": "false",
        "disabled": "false",
        "upbringing": "Rural",
        "hw1": 55,
        "quiz1": 19,
        "hw2": 95,
        "exam1": 59
    },
    {
        "id": "ahoggan6@soup.io",
        "ethnicity": "White",
        "gender": "Male",
        "lgbtq": "true",
        "disabled": "false",
        "upbringing": "Urban",
        "hw1": 60,
        "quiz1": 96,
        "hw2": 95,
        "exam1": 30
    },
    {
        "id": "ecrosetto7@bloglines.com",
        "ethnicity": "White",
        "gender": "Female",
        "lgbtq": "true",
        "disabled": "false",
        "upbringing": "Rural",
        "hw1": 45,
        "quiz1": 94,
        "hw2": 3,
        "exam1": 21
    },
    {
        "id": "ocaesmans8@sun.com",
        "ethnicity": "White",
        "gender": "Female",
        "lgbtq": "true",
        "disabled": "true",
        "upbringing": "Rural",
        "hw1": 8,
        "quiz1": 89,
        "hw2": 20,
        "exam1": 55
    },
    {
        "id": "cgrinov9@wiley.com",
        "ethnicity": "Not_White",
        "gender": "Male",
        "lgbtq": "false",
        "disabled": "false",
        "upbringing": "Rural",
        "hw1": 24,
        "quiz1": 40,
        "hw2": 57,
        "exam1": 54
    },
    {
        "id": "mtrussea@sitemeter.com",
        "ethnicity": "Not_White",
        "gender": "Female",
        "lgbtq": "true",
        "disabled": "true",
        "upbringing": "Rural",
        "hw1": 13,
        "quiz1": 5,
        "hw2": 33,
        "exam1": 78
    },
    {
        "id": "sbroadbearb@amazon.co.uk",
        "ethnicity": "White",
        "gender": "Female",
        "lgbtq": "true",
        "disabled": "true",
        "upbringing": "Rural",
        "hw1": 56,
        "quiz1": 83,
        "hw2": 18,
        "exam1": 56
    },
    {
        "id": "zwhitewoodc@wordpress.com",
        "ethnicity": "Not_White",
        "gender": "Female",
        "lgbtq": "true",
        "disabled": "true",
        "upbringing": "Rural",
        "hw1": 30,
        "quiz1": 12,
        "hw2": 1,
        "exam1": 30
    },
    {
        "id": "lgilletd@weather.com",
        "ethnicity": "Not_White",
        "gender": "Female",
        "lgbtq": "false",
        "disabled": "true",
        "upbringing": "Rural",
        "hw1": 15,
        "quiz1": 89,
        "hw2": 20,
        "exam1": 95
    },
    {
        "id": "jsheldricke@alexa.com",
        "ethnicity": "Not_White",
        "gender": "Female",
        "lgbtq": "true",
        "disabled": "true",
        "upbringing": "Rural",
        "hw1": 23,
        "quiz1": 75,
        "hw2": 84,
        "exam1": 2
    },
    {
        "id": "nwillanf@sohu.com",
        "ethnicity": "Not_White",
        "gender": "Female",
        "lgbtq": "false",
        "disabled": "true",
        "upbringing": "Urban",
        "hw1": 93,
        "quiz1": 91,
        "hw2": 69,
        "exam1": 9
    },
    {
        "id": "gcallendarg@geocities.jp",
        "ethnicity": "White",
        "gender": "Male",
        "lgbtq": "true",
        "disabled": "false",
        "upbringing": "Rural",
        "hw1": 43,
        "quiz1": 78,
        "hw2": 14,
        "exam1": 59
    },
    {
        "id": "kleereh@newsvine.com",
        "ethnicity": "Not_White",
        "gender": "Male",
        "lgbtq": "true",
        "disabled": "false",
        "upbringing": "Urban",
        "hw1": 33,
        "quiz1": 8,
        "hw2": 83,
        "exam1": 92
    },
    {
        "id": "penglandi@last.fm",
        "ethnicity": "White",
        "gender": "Female",
        "lgbtq": "false",
        "disabled": "false",
        "upbringing": "Urban",
        "hw1": 35,
        "quiz1": 84,
        "hw2": 36,
        "exam1": 13
    },
    {
        "id": "smacneachtainj@comcast.net",
        "ethnicity": "White",
        "gender": "Female",
        "lgbtq": "false",
        "disabled": "true",
        "upbringing": "Urban",
        "hw1": 55,
        "quiz1": 4,
        "hw2": 12,
        "exam1": 8
    },
    {
        "id": "gdalligank@example.com",
        "ethnicity": "Not_White",
        "gender": "Female",
        "lgbtq": "true",
        "disabled": "false",
        "upbringing": "Urban",
        "hw1": 28,
        "quiz1": 7,
        "hw2": 27,
        "exam1": 75
    },
    {
        "id": "zjosipovicl@wufoo.com",
        "ethnicity": "White",
        "gender": "Male",
        "lgbtq": "true",
        "disabled": "true",
        "upbringing": "Urban",
        "hw1": 21,
        "quiz1": 66,
        "hw2": 94,
        "exam1": 54
    },
    {
        "id": "sbastimanm@com.com",
        "ethnicity": "Not_White",
        "gender": "Female",
        "lgbtq": "true",
        "disabled": "false",
        "upbringing": "Urban",
        "hw1": 54,
        "quiz1": 4,
        "hw2": 52,
        "exam1": 85
    },
    {
        "id": "hglanistern@sourceforge.net",
        "ethnicity": "White",
        "gender": "Female",
        "lgbtq": "false",
        "disabled": "true",
        "upbringing": "Urban",
        "hw1": 45,
        "quiz1": 43,
        "hw2": 15,
        "exam1": 96
    },
    {
        "id": "nchaveyo@goo.gl",
        "ethnicity": "White",
        "gender": "Female",
        "lgbtq": "true",
        "disabled": "true",
        "upbringing": "Urban",
        "hw1": 32,
        "quiz1": 35,
        "hw2": 53,
        "exam1": 85
    },
    {
        "id": "mbalderstonep@sciencedirect.com",
        "ethnicity": "White",
        "gender": "Female",
        "lgbtq": "false",
        "disabled": "false",
        "upbringing": "Urban",
        "hw1": 96,
        "quiz1": 35,
        "hw2": 79,
        "exam1": 6
    },
    {
        "id": "bsigginsq@uiuc.edu",
        "ethnicity": "White",
        "gender": "Male",
        "lgbtq": "false",
        "disabled": "false",
        "upbringing": "Urban",
        "hw1": 55,
        "quiz1": 76,
        "hw2": 6,
        "exam1": 28
    },
    {
        "id": "nlesserr@theglobeandmail.com",
        "ethnicity": "Not_White",
        "gender": "Female",
        "lgbtq": "false",
        "disabled": "false",
        "upbringing": "Urban",
        "hw1": 44,
        "quiz1": 39,
        "hw2": 63,
        "exam1": 41
    },
    {
        "id": "mcurneens@sciencedirect.com",
        "ethnicity": "Not_White",
        "gender": "Female",
        "lgbtq": "false",
        "disabled": "false",
        "upbringing": "Rural",
        "hw1": 90,
        "quiz1": 97,
        "hw2": 83,
        "exam1": 14
    },
    {
        "id": "mboldersont@forbes.com",
        "ethnicity": "Not_White",
        "gender": "Female",
        "lgbtq": "false",
        "disabled": "false",
        "upbringing": "Rural",
        "hw1": 86,
        "quiz1": 62,
        "hw2": 88,
        "exam1": 42
    }
]


var gradesTemp: GradeDataItem<string>[] = [];

students.forEach((student) => {

  //make new object for grades
  const gradeItem: GradeDataItem<string> = {

    hw1: student.hw1,
    quiz1: student.quiz1,
    hw2: student.hw2,
    exam1: student.exam1
  };

  gradesTemp.push(gradeItem);

});

export const grades: GradeData = gradesTemp;
