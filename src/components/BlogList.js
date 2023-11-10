const BlogList = ({blogs}) => {
  return (
    <div className="blog-list">
      {blogs.map((data) => (
        <div className="blog-preview" key={data.id}>
          <h2>{data.title}</h2>
          <p>{data.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
