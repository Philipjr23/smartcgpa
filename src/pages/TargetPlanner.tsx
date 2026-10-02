import { student } from "../data/student";
import { getCompletedUnits } from "../utils/cgpa";
type TargetPlannerProps = {
  currentCGPA: string;
  targetCGPA: string;
};

function TargetPlanner({ currentCGPA, targetCGPA }: TargetPlannerProps) {
  const completedUnits = getCompletedUnits(student.semesters);

  const totalProgramUnits = 123;
  const remainingUnits = totalProgramUnits - completedUnits;

  const currentCGPAValue = Number(currentCGPA);
  const targetCGPAValue = Number(targetCGPA);

  const currentQualityPoints = currentCGPAValue * completedUnits;

  const requiredQualityPoints =
    targetCGPAValue * totalProgramUnits - currentQualityPoints;

  const requiredGPA =
    remainingUnits > 0 ? requiredQualityPoints / remainingUnits : 0;

  const isPossible = requiredGPA <= 5;

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">ACADEMIC PLANNING</p>

          <h1>Target Planner</h1>

          <p className="subtitle">
            Find out what average GPA you need to reach your target CGPA.
          </p>
        </div>
      </div>

      <div className="planner-grid">
        <section className="card planner-card">
          <span className="section-label">YOUR TARGET</span>

          <h2>What CGPA do you want?</h2>

          <div className="target-input">
            <label htmlFor="targetCGPA">Target CGPA</label>

            <input
              id="targetCGPA"
              type="number"
              min="0"
              max="5"
              step="0.01"
              value={targetCGPA}
              readOnly
            />
          </div>

          <div className="planner-details">
            <div>
              <span>Current CGPA</span>
              <strong>{currentCGPAValue.toFixed(2)}</strong>
            </div>

            <div>
              <span>Completed Units</span>
              <strong>{completedUnits}</strong>
            </div>

            <div>
              <span>Remaining Units</span>
              <strong>{remainingUnits}</strong>
            </div>
          </div>
        </section>

        <section className="card planner-result">
          <span className="section-label">YOUR REQUIRED GPA</span>

          {isPossible ? (
            <>
              <div className="required-gpa">{requiredGPA.toFixed(2)}</div>

              <h2>Average GPA needed</h2>

              <p>
                You need to maintain an average GPA of{" "}
                <strong>{requiredGPA.toFixed(2)}</strong> across your remaining{" "}
                {remainingUnits} units to reach a CGPA of{" "}
                <strong>{targetCGPAValue.toFixed(2)}</strong>.
              </p>
            </>
          ) : (
            <>
              <div className="required-gpa">5.00+</div>

              <h2>Target requires a perfect average</h2>

              <p>
                Based on your current academic record, this target would require
                more than the maximum GPA of 5.00.
              </p>
            </>
          )}
        </section>
      </div>

      <section className="card planner-guide">
        <span className="section-label">HOW IT WORKS</span>

        <h2>SmartCGPA calculates your path</h2>

        <div className="guide-steps">
          <div>
            <strong>01</strong>
            <span>We calculate your current quality points.</span>
          </div>

          <div>
            <strong>02</strong>
            <span>We calculate the quality points needed for your target.</span>
          </div>

          <div>
            <strong>03</strong>
            <span>We divide the remaining points by your remaining units.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TargetPlanner;
