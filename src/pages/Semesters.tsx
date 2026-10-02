import { calculateSemesterGPA } from "../utils/cgpa";
import { student } from "../data/student";

function Semesters() {
  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">ACADEMIC RECORD</p>
          <h1>My Semesters</h1>
          <p className="subtitle">
            View your courses and performance across every semester.
          </p>
        </div>

        <button className="primary-button">+ Add Semester</button>
      </div>

      <div className="semester-list">
        {student.semesters.map((semester) => {
          const gpa = calculateSemesterGPA(semester.courses);

          const totalUnits = semester.courses.reduce(
            (total, course) => total + course.units,
            0,
          );

          return (
            <section className="card semester-card" key={semester.name}>
              <div className="semester-header">
                <div>
                  <span className="section-label">SEMESTER</span>
                  <h2>{semester.name}</h2>
                </div>

                <div className="semester-summary">
                  <div>
                    <span>GPA</span>
                    <strong>{gpa.toFixed(2)}</strong>
                  </div>

                  <div>
                    <span>Units</span>
                    <strong>{totalUnits}</strong>
                  </div>
                </div>
              </div>

              <div className="semester-courses">
                {semester.courses.map((course) => (
                  <div className="semester-course" key={course.code}>
                    <div className="course-code">{course.code}</div>

                    <div className="course-name">
                      <strong>{course.title}</strong>
                      <span>{course.units} Credit Units</span>
                    </div>

                    <div
                      className={`grade ${
                        course.grade === "A" ? "grade-a" : "grade-b"
                      }`}
                    >
                      {course.grade}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Semesters;
