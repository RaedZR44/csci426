import heroImage from "../assets/university-students-walking-in-a-campus-C54DXG.jpg";

function Home() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-text">
          <h2>Your Future Starts Here</h2>

          <p>
            Our university offers a supportive learning environment where
            students can explore academic programs, register for courses, and
            grow their skills for a successful career.
          </p>

          <p>
            Browse our departments, view available courses, and complete your
            registration easily through this website.
          </p>
        </div>

        <div className="hero-image">
          <img
            src={heroImage}
            alt="University students walking on campus"
          />
        </div>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <h3>Academic Excellence</h3>
          <p>
            Study with experienced instructors in programs designed to build
            knowledge, confidence, and practical skills.
          </p>
        </div>

        <div className="info-card">
          <h3>Modern Departments</h3>
          <p>
            Explore Computer Science, Business, Information Technology, and
            Mathematics through structured and engaging learning paths.
          </p>
        </div>

        <div className="info-card">
          <h3>Easy Registration</h3>
          <p>
            Use our simple registration page to enter your information, choose
            your department, and select your preferred courses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
