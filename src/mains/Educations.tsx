export default function Educations() {
  return (
    <main>
      <h3>Education</h3>
      <div id="education-wrapper">
        <div className="education">
          <img
            src="../src/assets/bostonUniversity.png"
            alt="boston university logo"
          />
          <div className="education-info">
            <h1>Boston University</h1>
            <p>
              Master's degree, Computer Science, Cyber Security concentration
            </p>
            <p>Jul 2025 - May 2026</p>
          </div>
        </div>
        <div className="education">
          <img src="fordhamUnivesity.png" alt="Fordham university logo" />
          <div className="education-info">
            <h1>Fordham University</h1>
            <p>Bachelor's degree, Computer Science</p>
            <p>Sep 2021 - May 2025</p>
            <p>
              Activities and societies: FABER AWARD RECEPIENT, CUM LADE,
              ACADEMIC INTEGRITY SUBCOMITEE
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
