const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const handleDelete = props.handleDelete;
    console.log(props,blogs);
    
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {
                blogs.map((b)=>(
                    <div className="blog-preview" key={b.id}>
                        <h2>{b.title}</h2>
                        <p>Written by {b.author}</p>
                        <button onClick={() => handleDelete(b.id)}>delete blog</button>
                    </div>
                ))
            }
        </div>
      );
}
 
export default BlogList;