const Home = () => {
  const handleClick = (e) => {
    console.log("Hello, Mark!", e);
  };

  const handleClickAgain = (name, e) => {
    console.log(`Hello, ${name}!`, e.target);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={(e) => {
          handleClickAgain("Mark", e);
        }}
      >
        Click Me Again
      </button>
    </div>
  );
};

export default Home;
