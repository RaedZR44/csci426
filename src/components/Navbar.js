import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="branding">
          <span className="site-tag">Student Course Registration Website</span>
          <h1>Our University</h1>
        </div>

        <div className="navbar" id="main-nav">
          <Link to="/">Home</Link>
          <Link to="/departments">Departments</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/registration">Registration</Link>
        </div>
      </div>
    </header>
  );
}
