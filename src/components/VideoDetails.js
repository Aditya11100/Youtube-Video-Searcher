import React from 'react';

const VideoDetails=(props)=>{
    if(!props.video){
        return <div>Loading...</div>
    }
    const vidSrc=`http://www.youtube.com/embed/${props.video.id.videoId}`;

    return(
        <div>
        <div className='ui embed'>
            <iframe title='video player' src={vidSrc}/>
        </div>
        <div className='ui segment'>
        <h4 className='ui header'>{props.video.snippet.title}</h4>
        <p>{props.video.snippet.description}</p>
        </div>
        </div>
    )
}

export default VideoDetails;