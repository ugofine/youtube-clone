import './Sidebar.css'
import SidebarRow from './SidebarRow.js'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import PlaylistPlayOutlinedIcon from '@material-ui/icons/PlaylistPlayOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';


const Sidebar = ({Icon,title}) => {
    return (
        <div className="sidebar">
            
            <SidebarRow Icon={HomeOutlinedIcon} title="Home"/>
            <SidebarRow Icon={ExploreIcon} title="Explore" />
            <SidebarRow  Icon={SubscriptionsOutlinedIcon } title="Subscription"/>
            <hr />
            <SidebarRow  Icon={VideoLibraryOutlinedIcon } title="Library"/>
            <SidebarRow  Icon={HistoryOutlinedIcon  } title="History"/>
            <SidebarRow  Icon={OndemandVideoOutlinedIcon} title="Your Video"/>
            <SidebarRow  Icon={WatchLaterOutlinedIcon } title="Watch Later"/>
            <SidebarRow  Icon={ PlaylistPlayOutlinedIcon} title="Python"/>
            <SidebarRow  Icon={ExpandMoreOutlinedIcon} title="Show More"/>
            
            

            
            
        </div>
    )
}

export default Sidebar
