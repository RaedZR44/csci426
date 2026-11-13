function Registration() {
  return (
    <div className="container">
      <div className="page-intro">
        <h2>Register for Your Courses</h2>
        <p>
          Complete the form below with your details and course preferences.
        </p>
      </div>

      <div className="form-card">
        <form>
          <div className="form-row">
            <label htmlFor="student-id">Student ID</label>
            <input
              type="text"
              id="student-id"
              placeholder="Enter your student ID"
            />
          </div>

          <div className="form-row">
            <label htmlFor="full-name">Full Name</label>
            <input
              type="text"
              id="full-name"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-row">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="button-row">
            <button type="submit" className="btn">
              Submit
            </button>

            <button type="reset" className="btn btn-secondary">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;