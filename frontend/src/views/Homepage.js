import React from 'react'

function Homepage() {
  return (
    <div>
      <>
  <main role="madin" style={{ marginTop: 50 }}>
    {/* Main jumbotron for a primary marketing message or call to action */}
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3">Welcome to To-do Application</h1>
        <p>
        A to-do application is a task management tool designed to help users organize and prioritize their tasks efficiently. Users can create, edit, and delete tasks, set deadlines, and categorize them by project or priority. The app typically features a user-friendly interface, allowing users to mark tasks as complete and filter tasks by status or due date. Additional features may include reminders, notifications, and the ability to sync across devices. This application aims to boost productivity by providing a clear overview of pending tasks and ensuring important deadlines are met.
        </p>
        <p>
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more »
          </a>
        </p>
      </div>
    </div>
    <div className="container">
      {/* Example row of columns */}
      <div className="row">
        <div className="col-md-4">
          <h2>Record Task</h2>
          <p>
          "Record Task" allows users to create and document tasks with relevant details such as title, description, deadline, and priority. This feature ensures that all tasks are captured accurately, providing a structured way to manage workload and enhance productivity by keeping track of every task that needs to be accomplished.{" "}
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Keep Track</h2>
          <p>
          "Keep Track" helps users monitor their tasks' progress by providing real-time updates and status indicators. Users can view pending, in-progress, and completed tasks, ensuring nothing is overlooked. This feature enhances task management and accountability, making it easier to stay organized and meet deadlines.{" "}
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2>Generate Report</h2>
          <p>
            "Generate Report" enables users to produce comprehensive summaries of their task activities over a specified period. These reports can include completed tasks, pending items, and overall productivity metrics. This feature is essential for evaluating performance, identifying areas for improvement, and maintaining a record of accomplishments.
          </p>
          <p>
            <a className="btn btn-secondary" href="#" role="button">
              View details »
            </a>
          </p>
        </div>
      </div>
      <hr />
    </div>{" "}
    {/* /container */}
  </main>
  <footer className="container">
    <p>© Copyright 2024</p>
  </footer>
</>

    </div>
  )
}

export default Homepage