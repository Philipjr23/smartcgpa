import { useState } from "react";

type SettingsProps = {
  currentCGPA: string;
  setCurrentCGPA: (value: string) => void;
  targetCGPA: string;
  setTargetCGPA: (value: string) => void;
};

function Settings({
  currentCGPA,
  setCurrentCGPA,
  targetCGPA,
  setTargetCGPA,
}: SettingsProps) {
  const [name, setName] = useState("Philip Igwe");
  const [matricNumber, setMatricNumber] = useState("NOU241712889");
  const [programme, setProgramme] = useState("Computer Science");
  const [studyCentre, setStudyCentre] = useState("Lagos Mainland Study Center");

  const [editedCGPA, setEditedCGPA] = useState(currentCGPA);
  const [editedTargetCGPA, setEditedTargetCGPA] = useState(targetCGPA);

  const handleSave = () => {
    setCurrentCGPA(editedCGPA);
    setTargetCGPA(editedTargetCGPA);
  };

  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">ACCOUNT SETTINGS</p>
          <h1>Settings</h1>
          <p className="subtitle">
            Manage your student information and academic preferences.
          </p>
        </div>
      </div>

      <section className="card settings-card">
        <div className="settings-section">
          <span className="section-label">STUDENT PROFILE</span>

          <h2>Personal Information</h2>

          <div className="settings-grid">
            <div className="settings-field">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="settings-field">
              <label>Matric Number</label>
              <input
                type="text"
                value={matricNumber}
                onChange={(event) => setMatricNumber(event.target.value)}
              />
            </div>

            <div className="settings-field">
              <label>Programme</label>
              <input
                type="text"
                value={programme}
                onChange={(event) => setProgramme(event.target.value)}
              />
            </div>

            <div className="settings-field">
              <label>Study Centre</label>
              <input
                type="text"
                value={studyCentre}
                onChange={(event) => setStudyCentre(event.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="settings-section">
          <span className="section-label">ACADEMIC PREFERENCES</span>

          <h2>Academic Goals</h2>

          <div className="settings-grid">
            <div className="settings-field">
              <label>Current CGPA</label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.01"
                value={editedCGPA}
                onChange={(event) => setEditedCGPA(event.target.value)}
              />
            </div>

            <div className="settings-field">
              <label>Target CGPA</label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.01"
                value={editedTargetCGPA}
                onChange={(event) => setEditedTargetCGPA(event.target.value)}
              />
            </div>
          </div>
        </div>

        <button className="primary-button" onClick={handleSave}>
          Save Changes
        </button>
      </section>
    </div>
  );
}

export default Settings;
