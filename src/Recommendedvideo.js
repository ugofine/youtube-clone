import React from 'react';
import  './Recommendedvideo.css';
import  VideoCard from './VideoCard.js';
import  Iconbar from  './Iconbar.js';
const img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0voYhulRDdgVDQGS-jZc_XyivO4pbpiofQ&usqp=CAU "
const img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwLQcIARMPsDvdkoXT8T4c1LIyd8o7tYYUw&usqp=CAU "
const img4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsY_FwjZLGucSEYDDKribzWYJ9U09pFV1jBw&usqp=CAU "
const img = "https://pngimage.net/wp-content/uploads/2019/11/personas-con-el-celular-png-5.png "

const Recommendedvideo = () => {
    return (
      

        <div className="recommendedvideos">
            <Iconbar/>
            
            <div className="recommendedvideos-videos">
                <div className="video-row">
                <VideoCard className="card"
                title= "How to become a React Developer"
                views="2.3M Views"
                timestamp="3 days ago"
                channelImage= {img}
                channel="Debbie Ogu"
                Image={img1}
                />

                <VideoCard className="card"
                title= "How to become a React Developer"
                views=" 2.3M Views"
                timestamp=" 3 days ago"
                channelImage="https://pngimage.net/wp-content/uploads/2019/11/personas-con-el-celular-png-5.png"
                channel=" Debbie Ogu"
                Image={img4}
                />

                <VideoCard className="card"
                title= "How to become a React Developer"
                views="2.3M Views"
                timestamp="3 days ago"
                channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzttWkn-JL6cNO6cw9WCJF5-rU8aXxAr5Qg&usqp=CAU"
                channel="Debbie Ogu"
                Image={img3}
                />

                <VideoCard className="card"
                title= "How to become a React Developer"
                views=" 2.3M Views"
                timestamp=" 3 days ago"
                channelImage="https://pngimage.net/wp-content/uploads/2019/11/personas-con-el-celular-png-5.png"
                channel=" Debbie Ogu"
                Image= {img4}
                />
              </div>  

              </div>

              <div className="video-row">
                <VideoCard className="card"
                title= "How to become a React Developer"
                views="2.3M Views"
                timestamp="3 days ago"
                channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzttWkn-JL6cNO6cw9WCJF5-rU8aXxAr5Qg&usqp=CAU "
                channel="Debbie Ogu"
                Image={img3}
                />

                <VideoCard className="card"
                title= "How to become a React Developer"
                views=" 2.3M Views"
                timestamp=" 3 days ago"
                channelImage="https://pngimage.net/wp-content/uploads/2019/11/personas-con-el-celular-png-5.png"
                channel=" Debbie Ogu"
                Image={img4}
                />

                <VideoCard className="card"
                title= "How to become a React Developer"
                views="2.3M Views"
                timestamp="3 days ago"
                channelImage=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzttWkn-JL6cNO6cw9WCJF5-rU8aXxAr5Qg&usqp=CAU"
                channel="Debbie Ogu"
                Image={img4}
                />

                <VideoCard className="card"
                title= "How to become a React Developer"
                views=" 2.3M Views"
                timestamp=" 3 days ago"
                channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzttWkn-JL6cNO6cw9WCJF5-rU8aXxAr5Qg&usqp=CAU"
                channel=" Debbie Ogu"
                Image= {img1}
                />
              </div>

              <div className="video-row">
                <VideoCard className="card"
                title= "How to become a React Developer"
                views="2.3M Views"
                  timestamp="3 days ago"
                  channelImage= {img}
                  channel="Debbie Ogu"
                  Image={img1}
                  />

                  <VideoCard className="card"
                  title= "How to become a React Developer"
                  views=" 2.3M Views"
                  timestamp=" 3 days ago"
                  channelImage="https://pngimage.net/wp-content/uploads/2019/11/personas-con-el-celular-png-5.png"
                  channel=" Debbie Ogu"
                  Image={img4}
                  />

                  <VideoCard className="card"
                  title= "How to become a React Developer"
                  views="2.3M Views"
                  timestamp="3 days ago"
                  channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzttWkn-JL6cNO6cw9WCJF5-rU8aXxAr5Qg&usqp=CAU"
                  channel="Debbie Ogu"
                  Image={img3}
                  />

                  <VideoCard className="card"
                  title= "How to become a React Developer"
                  views=" 2.3M Views"
                  timestamp=" 3 days ago"
                  channelImage="https://pngimage.net/wp-content/uploads/2019/11/personas-con-el-celular-png-5.png"
                  channel=" Debbie Ogu"
                  Image= {img4}
                  />
               </div>

            </div>

          
    )
}

export default Recommendedvideo
