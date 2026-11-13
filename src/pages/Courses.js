function Courses() {
  return (
    <div className="container">
      <div className="page-intro">
        <h2>Featured Courses</h2>

        <p>
          The table below shows sample courses offered by our university across
          different departments.
        </p>
      </div>

      <div className="table-wrapper">
        <table className="course-table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Credits</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>CS101</td>
              <td>Introduction to Programming</td>
              <td>3</td>
            </tr>

            <tr>
              <td>BUS201</td>
              <td>Principles of Management</td>
              <td>3</td>
            </tr>

            <tr>
              <td>IT210</td>
              <td>Database Systems</td>
              <td>4</td>
            </tr>

            <tr>
              <td>MATH115</td>
              <td>Calculus I</td>
              <td>3</td>
            </tr>

            <tr>
              <td>CS220</td>
              <td>Web Design Fundamentals</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Courses;