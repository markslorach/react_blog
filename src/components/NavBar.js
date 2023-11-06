const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Mark Slorach's Blog.</h1>
      <div className="links">
        <a href="/">Home</a>
        {/* Example of inline styles in JSX */}
        <a href="/create" style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
            padding: "8px"
        }}>New Blog</a>
      </div>
    </nav>
  );
};

export default NavBar;
