import axios from 'axios';

const KEY='AIzaSyAMqkNlRxD-vLqa6dAoUGHS9zpITuiOCrc';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 10,
        key:KEY
    }
});