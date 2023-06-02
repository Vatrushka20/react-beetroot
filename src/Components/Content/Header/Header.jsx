import email from "../../../assets/email-icon.png";
import './Header.scss'
export const Header = () => {
    return (
        <header className='header'>
          <img className='email-icon' src={email} alt='icon' />
          <img className='user-icon' src='https://figma-react-dashboard.vercel.app/static/media/profilelg.eab8d882.png' alt='user'/>
        </header>
    )
}
