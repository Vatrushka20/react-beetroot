import './Blog.scss';
import BlogItem from "./BlogItem/BlogItem";
import User from '../../user.json';

function Blog() {
    return (
        <div className='blog'>
            <h2 className="blog__title">Blog</h2>
            {User.blog.map(blog => (
                <BlogItem
                title={blog.title}
                info={blog.info}
            />))}
        </div>
    )
}

export default Blog;