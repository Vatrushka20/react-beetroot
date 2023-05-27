import './BlogItem.scss';
function BlogItem(props) {
    return (
        <div className='blog-item'>
            <h3 className='title'>{props.title}</h3>
            <p className='info'>{props.info}</p>
        </div>
    )
}

export default BlogItem;