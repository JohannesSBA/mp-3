export default function Contact() {
  return (
    <main id="contact-wrapper">
      <div className="halves">
        <h1>Let's Work Together</h1>
        <p>
          Available for collaborations, product teams, and select freelance
          projects.
        </p>
      </div>
      <div className="halves">
        <div id="left-half">
          <div className="card">
            <p>Email</p>
            <h1>johannesseleshi@gmail.com</h1>
          </div>
          <div className="card">
            <p>Phone</p>
            <h1>+1 (347) 425-4757</h1>
            <p>Based in</p>
            <h1>Boston MA</h1>
          </div>
          <div className="card">
            <p>Questions</p>
            <h1>
              Have questions? Feel free to contact me and I'll get back to you.
            </h1>
          </div>
        </div>
        <div id="right-half"></div>
      </div>
    </main>
  );
}
