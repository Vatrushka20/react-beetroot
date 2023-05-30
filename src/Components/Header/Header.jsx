import "./Header.scss";
import userPic from '../../assets/user-icon-white.svg'

export const Header = (props) => {
    const classes = 'header__content ' + props.className;
    return (
        <header className="header">
            <div className={classes}>
                <button className="hamburger hamburger--collapse" type="button">
                   <span className="hamburger-box">
                      <span className="hamburger-inner"></span>
                   </span>
                </button>
                <h2 className="header__content__title">Posters Galore</h2>
                <img className='header__content__svg-user' src={userPic} alt='user-pic'/>
            </div>
        </header>

    )
};