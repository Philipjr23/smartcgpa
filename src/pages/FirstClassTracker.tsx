import { student } from "../data/student";
import { calculateCGPA, getCompletedUnits } from "../utils/cgpa";

function FirstClassTracker() {
  const currentCGPA = calculateCGPA(student.semesters);
  const completedUnits = getCompletedUnits(student.semesters);

  const targetCGPA = 4.5;
  const totalProgramUnits = 123;
  const remainingUnits = totalProgramUnits - completedUnits;
  const gap = Math.max(targetCGPA - currentCGPA, 0);

  const currentProgress = Math.min((currentCGPA / targetCGPA) * 100, 100);

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">ACADEMIC GOAL</p>

          <h1>First-Class Tracker</h1>

          <p className="subtitle">
            Track your progress toward your First Class target.
          </p>
        </div>
      </div>

      <div className="tracker-grid">
        <section className="card tracker-main">
          <span className="section-label">YOUR PROGRESS</span>

          <div className="tracker-score">
            <strong>{currentCGPA.toFixed(2)}</strong>
            <span>/ {targetCGPA.toFixed(2)}</span>
          </div>

          <h2>Current CGPA</h2>

          <div className="tracker-bar">
            <div
              className="tracker-fill"
              style={{ width: `${currentProgress}%` }}
            ></div>
          </div>

          <div className="tracker-info">
            <span>{currentProgress.toFixed(0)}% of target</span>
            <span>{gap.toFixed(2)} CGPA to go</span>
          </div>
        </section>

        <section className="card tracker-target">
          <span className="section-label">FIRST CLASS TARGET</span>

          <div className="target-number">{targetCGPA.toFixed(2)}</div>

          <h2>Target CGPA</h2>

          <p>
            Your goal is to graduate with a CGPA of{" "}
            <strong>{targetCGPA.toFixed(2)}</strong>.
          </p>
        </section>
      </div>

      <section className="card tracker-details">
        <span className="section-label">ACADEMIC SNAPSHOT</span>

        <div className="tracker-stats">
          <div>
            <span>Current CGPA</span>
            <strong>{currentCGPA.toFixed(2)}</strong>
          </div>

          <div>
            <span>Target CGPA</span>
            <strong>{targetCGPA.toFixed(2)}</strong>
          </div>

          <div>
            <span>Remaining Units</span>
            <strong>{remainingUnits}</strong>
          </div>

          <div>
            <span>Completed Units</span>
            <strong>{completedUnits}</strong>
          </div>
        </div>
      </section>

      <section className="card tracker-message">
        <span className="section-label">KEEP GOING</span>

        <h2>Your academic journey is still in progress.</h2>

        <p>
          Use the Target Planner and What-If Simulator to understand what grades
          you need in your remaining courses.
        </p>

        <button className="primary-button">Open Target Planner</button>
      </section>
    </div>
  );
}

export default FirstClassTracker;
