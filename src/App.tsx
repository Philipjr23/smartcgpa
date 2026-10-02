import { useState } from "react";
import "./App.css";
import { student } from "./data/student";
import { getCompletedUnits } from "./utils/cgpa";
import Semesters from "./pages/Semesters";
import TargetPlanner from "./pages/TargetPlanner";
import WhatIfSimulator from "./pages/WhatIfSimulator";
import Settings from "./pages/Settings";
import FirstClassTracker from "./pages/FirstClassTracker";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [currentCGPA, setCurrentCGPA] = useState("3.73");
  const [targetCGPA, setTargetCGPA] = useState("4.50");

  const completedUnits = getCompletedUnits(student.semesters);

  const totalProgramUnits = 123;
  const remainingUnits = totalProgramUnits - completedUnits;

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-mark">S</div>

          <div>
            <strong>SmartCGPA</strong>
            <span>NOUN Student Hub</span>
          </div>
        </div>

        <nav>
          <button
            className={`nav-item ${activePage === "dashboard" ? "active" : ""}`}
            onClick={() => setActivePage("dashboard")}
          >
            Dashboard
          </button>

          <button
            className={`nav-item ${activePage === "semesters" ? "active" : ""}`}
            onClick={() => setActivePage("semesters")}
          >
            My Semesters
          </button>

          <button
            className={`nav-item ${activePage === "planner" ? "active" : ""}`}
            onClick={() => setActivePage("planner")}
          >
            Target Planner
          </button>

          <button
            className={`nav-item ${activePage === "simulator" ? "active" : ""}`}
            onClick={() => setActivePage("simulator")}
          >
            What-If Simulator
          </button>

          <button
            className={`nav-item ${activePage === "tracker" ? "active" : ""}`}
            onClick={() => setActivePage("tracker")}
          >
            First-Class Tracker
          </button>
        </nav>

        <div className="sidebar-bottom">
          <button
            className={`nav-item ${activePage === "settings" ? "active" : ""}`}
            onClick={() => setActivePage("settings")}
          >
            Settings
          </button>
        </div>
      </aside>

      <main className="main">
        {activePage === "semesters" ? (
          <Semesters />
        ) : activePage === "planner" ? (
          <TargetPlanner currentCGPA={currentCGPA} targetCGPA={targetCGPA} />
        ) : activePage === "simulator" ? (
          <WhatIfSimulator currentCGPA={currentCGPA} />
        ) : activePage === "settings" ? (
          <Settings
            currentCGPA={currentCGPA}
            setCurrentCGPA={setCurrentCGPA}
            targetCGPA={targetCGPA}
            setTargetCGPA={setTargetCGPA}
          />
        ) : activePage === "tracker" ? (
          <FirstClassTracker />
        ) : (
          <>
            <header className="topbar">
              <div>
                <p className="eyebrow">ACADEMIC DASHBOARD</p>

                <h1>Good afternoon, there 👋</h1>

                <p className="subtitle">
                  Here's how your academic journey is going.
                </p>
              </div>

              <div className="profile">
                <div className="avatar">S</div>

                <div>
                  <strong>Student</strong>
                  <span>NOUN Student</span>
                </div>
              </div>
            </header>

            <section className="stats-grid">
              <div className="stat-card primary">
                <span>Current CGPA</span>
                <strong>{Number(currentCGPA).toFixed(2)}</strong>
                <small>Out of 5.00</small>
              </div>

              <div className="stat-card">
                <span>Completed Units</span>
                <strong>{completedUnits}</strong>
                <small>Units completed</small>
              </div>

              <div className="stat-card">
                <span>Remaining Units</span>
                <strong>{remainingUnits}</strong>
                <small>Units remaining</small>
              </div>

              <div className="stat-card">
                <span>Target CGPA</span>
                <strong>{Number(targetCGPA).toFixed(2)}</strong>
                <small>First Class target</small>
              </div>
            </section>

            <section className="content-grid">
              <div className="card progress-card">
                <div className="card-header">
                  <div>
                    <span className="section-label">ACADEMIC PROGRESS</span>

                    <h2>You're making progress</h2>
                  </div>

                  <strong>
                    {Math.round((completedUnits / totalProgramUnits) * 100)}%
                  </strong>
                </div>

                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${(completedUnits / totalProgramUnits) * 100}%`,
                    }}
                  ></div>
                </div>

                <div className="progress-info">
                  <span>{completedUnits} units completed</span>
                  <span>{totalProgramUnits} total units</span>
                </div>

                <div className="target-box">
                  <div>
                    <span>Current CGPA</span>
                    <strong>{Number(currentCGPA).toFixed(2)}</strong>
                  </div>

                  <div className="arrow">→</div>

                  <div>
                    <span>Your target</span>
                    <strong>{Number(targetCGPA).toFixed(2)}</strong>
                  </div>

                  <button onClick={() => setActivePage("planner")}>
                    View Plan
                  </button>
                </div>
              </div>

              <div className="card classification-card">
                <span className="section-label">CURRENT STANDING</span>

                <div className="class-icon">2:1</div>

                <h2>Second Class Upper</h2>

                <p>
                  Your current CGPA places you within the Second Class Upper
                  classification.
                </p>

                <button
                  className="outline-button"
                  onClick={() => setActivePage("planner")}
                >
                  Track First Class
                </button>
              </div>
            </section>

            <section className="card courses-card">
              <div className="card-header">
                <div>
                  <span className="section-label">RECENT COURSES</span>

                  <h2>Latest academic records</h2>
                </div>

                <button
                  className="text-button"
                  onClick={() => setActivePage("semesters")}
                >
                  View all →
                </button>
              </div>

              <div className="course-list">
                <div className="course-row">
                  <div className="course-code">CIT309</div>

                  <div className="course-name">
                    <strong>Computer Architecture</strong>
                    <span>3 Credit Units</span>
                  </div>

                  <div className="grade grade-a">A</div>
                </div>

                <div className="course-row">
                  <div className="course-code">CIT310</div>

                  <div className="course-name">
                    <strong>Algorithms &amp; Complex Analysis</strong>
                    <span>3 Credit Units</span>
                  </div>

                  <div className="grade grade-b">B</div>
                </div>

                <div className="course-row">
                  <div className="course-code">CIT314</div>

                  <div className="course-name">
                    <strong>Computer Architecture II</strong>
                    <span>3 Credit Units</span>
                  </div>

                  <div className="grade grade-a">A</div>
                </div>

                <div className="course-row">
                  <div className="course-code">CIT316</div>

                  <div className="course-name">
                    <strong>Compiler Construction I</strong>
                    <span>3 Credit Units</span>
                  </div>

                  <div className="grade grade-b">B</div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
