function FeaturesDropDown({ class_on_mobile }) {
  return (
    <nav className={`sidebar-nav-inner-features-options ${class_on_mobile}`}>
      <ul>
        <li>
          <img src="./images/icon-todo.svg" alt="todo-icon" />
          <span>Todo List</span>
        </li>
        <li>
          <img src="./images/icon-calendar.svg" alt="calendar-icon" />
          <span>Calendar</span>
        </li>
        <li>
          <img src="./images/icon-reminders.svg" alt="reminder-icon" />
          <span>Reminders</span>
        </li>
        <li>
          <img src="./images/icon-planning.svg" alt="reminder-icon" />
          <span>Planning</span>
        </li>
      </ul>
    </nav>
  );
}

export default FeaturesDropDown;
