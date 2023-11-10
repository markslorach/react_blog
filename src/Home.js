import { useState } from "react";
import BlogList from "./components/BlogList";

const Home = () => {
  let blogData = [
    { title: "Blog 1", body: "Blog text", author: "Mark", id: 1 },
    { title: "Blog 2", body: "Blog text", author: "Ellen", id: 2 },
    { title: "Blog 3", body: "Blog text", author: "Mark", id: 3 },
  ];

  const [blogs, setBlogs] = useState(blogData);

  return (
    <div className="home">
      <BlogList blogs={blogs}/>
    </div>
  );
};

export default Home;
