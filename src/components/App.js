import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './SearchBar';
//import youtube from 'youtube-api-search';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

const key='AIzaSyAMqkNlRxD-vLqa6dAoUGHS9zpITuiOCrc';
class App extends React.Component{
    state={video:[], selectedVideo: null};
    onTermSubmit = async (term)=>{
        const response =await youtube.get('/search',{
            params: {
                q: term
            }
        });
        //youtube({key:key, term:term, maxResult:6}, (response)=>{console.log(response)})

        this.setState({video:response.data.items});
        console.log(this.state.video);
    };

    onSelect = (video) =>{
        this.setState({selectedVideo: video});

    }

    render(){
        return (
        <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className='ui grid'>
        <div className='ui row'>
        <div className='eleven wide column'>
        <VideoDetails video={this.state.selectedVideo} />
        </div>
        <div className='five wide column'>
        <VideoList videos={this.state.video} onSelect={this.onSelect}/>
        </div>
        </div>
        </div>
        </div>
        );
    }
}

export default App;