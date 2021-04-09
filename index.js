// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title,
    description,
    complete: false,

    // Print the state of a task to the console in a nice readable way
    logState: function() {
      console.log(`${task.title} has${task.complete ? ' ' : ' not '}been completed`);
    },

    // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    markCompleted: function() {
      this.complete = true;
    },
  };

  return task;
};

// DRIVER CODE BELOW

const task1 = newTask('Clean Cat Litter', 'Take all the 💩 out of the litter box'); // task 0
const task2 = newTask('Do Laundry', '🧺'); // task 1

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

task2.logState(); // Do laundry has not been completed
task2.markCompleted();
task2.logState(); // Do laundry has been completed
