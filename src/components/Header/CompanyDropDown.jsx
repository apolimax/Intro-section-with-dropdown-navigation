function CompanyDropDown({ class_on_mobile }) {
  return (
    <nav className={`sidebar-nav-inner-company-options ${class_on_mobile}`}>
      <ul>
        <li>History</li>
        <li>Our Team</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
}

export default CompanyDropDown;
