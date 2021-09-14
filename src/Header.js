import youtubelogo from './images/youtubelogo.jpg';
import pic from './images/pic.jpg';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import SearchIcon from '@material-ui/icons/Search';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import Avatar from '@material-ui/core/Avatar';
import './Header.css';





const Header = () => {
    return (
        <div className="header">
            <div classname="header-left">
                <MenuIcon className= "menu-icon" />
                <img  className="header-logo" src={youtubelogo} alt="logo" />
            </div>

            <div className="header-input">
                <input placeholder=" search" type="text" />
                <SearchIcon className="header-inputButton" />
                <div className="header-mic">
                <MicOutlinedIcon />
                </div>

        
            </div>
            <div className="header-icons">
                <VideoCallOutlinedIcon className="header-icon" />
                <AppsIcon  className="header-icon" />
                <NotificationsOutlinedIcon  className="header-icon" />
                <Avatar 
                src={pic} alt="pic"/>
            </div>  
            
        </div>
    )
}

export default Header
