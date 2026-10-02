import type { Semester } from "../utils/cgpa";

export const student = {
  name: "there",
  matricNumber: "",
  programme: "",

  semesters: [
    {
      name: "Year 1 — Semester 1",
      courses: [
        { code: "GST101", title: "Use of English", units: 2, grade: "A" },
        {
          code: "MTH101",
          title: "Elementary Mathematics",
          units: 3,
          grade: "B",
        },
        { code: "PHY101", title: "Introductory Physics", units: 3, grade: "B" },
        {
          code: "CIT101",
          title: "Introduction to Computer Science",
          units: 3,
          grade: "A",
        },
      ],
    },
    {
      name: "Year 1 — Semester 2",
      courses: [
        { code: "GST102", title: "Communication Skills", units: 2, grade: "A" },
        { code: "MTH102", title: "Mathematics II", units: 3, grade: "B" },
        { code: "CIT102", title: "Computer Programming", units: 3, grade: "B" },
        { code: "PHY102", title: "Physics II", units: 3, grade: "A" },
      ],
    },
    {
      name: "Year 2 — Semester 1",
      courses: [
        { code: "CIT201", title: "Data Structures", units: 3, grade: "A" },
        {
          code: "CIT203",
          title: "Computer Programming II",
          units: 3,
          grade: "B",
        },
        { code: "MTH201", title: "Discrete Mathematics", units: 3, grade: "A" },
        {
          code: "GST201",
          title: "Nigerian Peoples & Culture",
          units: 2,
          grade: "B",
        },
      ],
    },
    {
      name: "Year 2 — Semester 2",
      courses: [
        { code: "CIT204", title: "Database Systems", units: 3, grade: "A" },
        { code: "CIT206", title: "Operating Systems", units: 3, grade: "B" },
        { code: "CIT208", title: "Web Technology", units: 3, grade: "A" },
        { code: "MTH202", title: "Statistics", units: 3, grade: "B" },
      ],
    },
  ] satisfies Semester[],
};
