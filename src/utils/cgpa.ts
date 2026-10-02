export type Grade = "A" | "B" | "C" | "D" | "E" | "F";

export interface Course {
  code: string;
  title: string;
  units: number;
  grade: Grade;
}

export interface Semester {
  name: string;
  courses: Course[];
}

const gradePoints: Record<Grade, number> = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1,
  F: 0,
};

export function getGradePoint(grade: Grade): number {
  return gradePoints[grade];
}

export function calculateSemesterGPA(courses: Course[]): number {
  if (courses.length === 0) return 0;

  let totalPoints = 0;
  let totalUnits = 0;

  courses.forEach((course) => {
    totalPoints += getGradePoint(course.grade) * course.units;
    totalUnits += course.units;
  });

  return totalUnits === 0 ? 0 : totalPoints / totalUnits;
}

export function calculateCGPA(semesters: Semester[]): number {
  let totalPoints = 0;
  let totalUnits = 0;

  semesters.forEach((semester) => {
    semester.courses.forEach((course) => {
      totalPoints += getGradePoint(course.grade) * course.units;
      totalUnits += course.units;
    });
  });

  return totalUnits === 0 ? 0 : totalPoints / totalUnits;
}

export function getCompletedUnits(semesters: Semester[]): number {
  return semesters.reduce((total, semester) => {
    return (
      total +
      semester.courses.reduce((semesterUnits, course) => {
        return semesterUnits + course.units;
      }, 0)
    );
  }, 0);
}
