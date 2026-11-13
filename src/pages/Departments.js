function Departments() {
  return (
    <div className="container">
      <div className="page-intro">
        <h2>Available Departments</h2>
        <p>
          Our university provides diverse academic departments to support
          student interests and career goals.
        </p>
      </div>

      <div className="department-grid">
        <div className="department-card">
          <h3>Computer Science</h3>
          <p>
            Learn programming, software development, data structures, and
            problem-solving skills.
          </p>
        </div>

        <div className="department-card">
          <h3>Business</h3>
          <p>
            Study management, marketing, accounting, finance, and
            entrepreneurship.
          </p>
        </div>

        <div className="department-card">
          <h3>Information Technology</h3>
          <p>
            Build practical experience in networking, web systems, databases,
            and IT support.
          </p>
        </div>

        <div className="department-card">
          <h3>Mathematics</h3>
          <p>
            Develop strong analytical skills through algebra, calculus,
            statistics, and logic.
          </p>
        </div>
      </div>

      <div className="list-section">
        <h3>Department Highlights</h3>

        <ul className="department-list">
          <li>Qualified teaching staff</li>
          <li>Career-oriented course plans</li>
          <li>Practical and theoretical learning</li>
          <li>Supportive student environment</li>
        </ul>
      </div>
    </div>
  );
}

export default Departments;