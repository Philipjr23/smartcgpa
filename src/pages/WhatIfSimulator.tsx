import { useState } from "react";
import { student } from "../data/student";
import { getCompletedUnits } from "../utils/cgpa";

type Grade = "A" | "B" | "C" | "D" | "E" | "F";

type SimulationCourse = {
  id: number;
  units: number;
  grade: Grade;
};

type WhatIfSimulatorProps = {
  currentCGPA: string;
};

function WhatIfSimulator({ currentCGPA }: WhatIfSimulatorProps) {
  const completedUnits = getCompletedUnits(student.semesters);
  const numericCGPA = Number(currentCGPA);

  const [courses, setCourses] = useState<SimulationCourse[]>([
    {
      id: 1,
      units: 3,
      grade: "A",
    },
  ]);

  const gradePoints: Record<Grade, number> = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
    F: 0,
  };

  const addCourse = () => {
    setCourses([
      ...courses,
      {
        id: Date.now(),
        units: 3,
        grade: "A",
      },
    ]);
  };

  const removeCourse = (id: number) => {
    if (courses.length === 1) return;

    setCourses(courses.filter((course) => course.id !== id));
  };

  const updateCourseUnits = (id: number, units: number) => {
    setCourses(
      courses.map((course) =>
        course.id === id
          ? {
              ...course,
              units,
            }
          : course,
      ),
    );
  };

  const updateCourseGrade = (id: number, grade: Grade) => {
    setCourses(
      courses.map((course) =>
        course.id === id
          ? {
              ...course,
              grade,
            }
          : course,
      ),
    );
  };

  const simulatedUnits = courses.reduce(
    (total, course) => total + course.units,
    0,
  );

  const simulatedGradePoints = courses.reduce(
    (total, course) => total + gradePoints[course.grade] * course.units,
    0,
  );

  const projectedCGPA =
    simulatedUnits > 0
      ? (numericCGPA * completedUnits + simulatedGradePoints) /
        (completedUnits + simulatedUnits)
      : numericCGPA;

  const difference = projectedCGPA - numericCGPA;

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">ACADEMIC SIMULATION</p>

          <h1>What-If Simulator</h1>

          <p className="subtitle">
            Test multiple future course results and see how they could affect
            your CGPA.
          </p>
        </div>
      </div>

      <div className="simulator-grid">
        <section className="card simulator-card">
          <div className="card-header">
            <div>
              <span className="section-label">TRY A SCENARIO</span>

              <h2>Enter your expected results</h2>
            </div>

            <button className="text-button" onClick={addCourse}>
              + Add Course
            </button>
          </div>

          <div className="simulation-courses">
            {courses.map((course, index) => (
              <div className="simulation-course" key={course.id}>
                <div className="simulation-course-header">
                  <strong>Course {index + 1}</strong>

                  {courses.length > 1 && (
                    <button
                      className="remove-course"
                      onClick={() => removeCourse(course.id)}
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="simulation-course-inputs">
                  <div className="simulator-input">
                    <label htmlFor={`units-${course.id}`}>Credit Units</label>

                    <input
                      id={`units-${course.id}`}
                      type="number"
                      min="1"
                      max="10"
                      value={course.units}
                      onChange={(event) =>
                        updateCourseUnits(course.id, Number(event.target.value))
                      }
                    />
                  </div>

                  <div className="simulator-input">
                    <label htmlFor={`grade-${course.id}`}>Expected Grade</label>

                    <select
                      id={`grade-${course.id}`}
                      value={course.grade}
                      onChange={(event) =>
                        updateCourseGrade(
                          course.id,
                          event.target.value as Grade,
                        )
                      }
                    >
                      <option value="A">A — 5 Points</option>
                      <option value="B">B — 4 Points</option>
                      <option value="C">C — 3 Points</option>
                      <option value="D">D — 2 Points</option>
                      <option value="E">E — 1 Point</option>
                      <option value="F">F — 0 Points</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="simulation-summary">
            <div>
              <span>Current CGPA</span>
              <strong>{numericCGPA.toFixed(2)}</strong>
            </div>

            <div>
              <span>Courses</span>
              <strong>{courses.length}</strong>
            </div>

            <div>
              <span>Simulation Units</span>
              <strong>{simulatedUnits}</strong>
            </div>
          </div>
        </section>

        <section className="card simulation-result">
          <span className="section-label">PROJECTED RESULT</span>

          <div className="cgpa-comparison">
            <div>
              <span>Current</span>
              <strong>{numericCGPA.toFixed(2)}</strong>
            </div>

            <div className="comparison-arrow">→</div>

            <div>
              <span>Projected</span>
              <strong>{projectedCGPA.toFixed(2)}</strong>
            </div>
          </div>

          <div
            className={`simulation-change ${
              difference >= 0 ? "positive" : "negative"
            }`}
          >
            {difference >= 0 ? "+" : ""}
            {difference.toFixed(2)} CGPA
          </div>

          <p>
            If you earn the selected grades across{" "}
            <strong>{simulatedUnits} units</strong>, your projected CGPA would
            be <strong>{projectedCGPA.toFixed(2)}</strong>.
          </p>

          <div className="simulation-breakdown">
            <span>Simulation breakdown</span>

            {courses.map((course, index) => (
              <div key={course.id}>
                <span>
                  Course {index + 1} ({course.units} units)
                </span>

                <strong>{course.grade}</strong>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="card simulator-guide">
        <span className="section-label">HOW IT WORKS</span>

        <h2>Test multiple academic scenarios</h2>

        <div className="simulation-tips">
          <div>
            <strong>01</strong>
            <span>Add the courses you want to simulate.</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Enter the credit units and expected grade for each.</span>
          </div>

          <div>
            <strong>03</strong>
            <span>
              SmartCGPA calculates the combined projected CGPA instantly.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatIfSimulator;
