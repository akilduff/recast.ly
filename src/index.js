// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import Search from './components/Search.js';
import VideoList from './components/VideoList.js';
import VideoListEntry from './components/VideoListEntry.js';
import VideoPlayer from './components/VideoPlayer.js';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Search />, document.getElementsByClassName('navbar')[0]);
ReactDOM.render(<VideoList />, document.getElementsByClassName('col-md-5')[0]);
ReactDOM.render(<VideoPlayer />, document.getElementsByClassName('col-md-7')[0]);
// for the video-list it will be mult items in an array
ReactDOM.render(<VideoListEntry />, document.getElementsByClassName('video-list')[0]);

