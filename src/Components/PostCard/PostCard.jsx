import './PostCard.scss';
import postCardImg from '../../assets/photo.jpeg';
import homeIcon from '../../assets/home-icon.png'

export const PostCard = (props) => {
    const classes = 'post-card ' + props.className;
    return (
        <div className={classes}>
            <img className='post-card__pic' src={postCardImg} alt='pic'/>
            <div className='post-card__content'>
                <h2 className='post-card__content__title'>Welcome to  react-admin demo</h2>
                <p className='post-card__content__description'>This is the admin of an imaginary poster shop. Feel free
                    to explore and modify the data - it's local to your computer, and will reset each time you
                    reload.</p>
                <div className='post-card__content__button'>
                    <a className='btn' href='https://marmelab.com/react-admin' target='_blank'>
                        <img src={homeIcon} alt='btn'/>
                        React-admin Site
                    </a>
                    <a className='btn' href={'https://github.com/marmelab/react-admin/tree/master/examples/demo'} target='_blank'>
                        Source for this Demo
                    </a>
                </div>
            </div>
        </div>
    )
}