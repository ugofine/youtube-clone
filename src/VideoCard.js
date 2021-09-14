import './VideoCard.css';
import Avatar from "@material-ui/core/Avatar";

const VideoCard = ({Image,title,channel, views, timestamp, channelImage}) => {
    return (
        <div className="VideoCard"> 
            
            <img className="videoCard-thumbnail" src={Image} alt=""/>
            <div className="videoCard-info">
                <Avatar className="videoCard-avatar" alt={channelImage}  src={channelImage} />
             <div className="videoCard-text">
                 <h4>{title}</h4>
                 <p>{channel}</p>
                 <p>{views} . {timestamp}</p>


                </div>
            </div>
        </div>
    )
}

export default VideoCard
