import './Blog.scss';
import BlogItem from "./BlogItem/BlogItem";
// import User from '../../user.json';
import {useEffect, useState} from "react";
import axios from "axios";

function Blog() {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts').then(res => setBlogData(res.data))
    }, []);

    return (
        <div className='blog'>
            <h2 className="blog__title">Blog</h2>
            {blogData.map(blog => (
                <BlogItem
                    key={blog.id}
                    title={blog.title}
                    body={blog.body}
                />))}
        </div>
    )
}

export default Blog;

// useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res =>res.json()
//             .then(data => setBlogData(data)))
// }, []);
