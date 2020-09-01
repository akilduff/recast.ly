import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../../src/data/exampleVideoData.js';

console.log(exampleVideoData);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }
  //state set to current video playing
  //on click of search or side video list we want the video we click on to become the video player

  //Thinking we need to iterate over the video list
  //that way we pass in and create divs that are only in the list

  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>{<Search />}</em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em><VideoPlayer video={this.state.currentVideo}/></em></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em><VideoList
              videos={this.state.videos}
              handleClick={this.handleClick.bind(this)}
            /></em></h5></div>
          </div>
        </div>
      </div>
    );
  }
}




// let GroceryList = (props) => (
//   <ul>
//     {props.groceries.map(groceries =>
//       <GroceryItemList groceries={groceries} />
//       )}
//   </ul>
// );

// let VideoList = (props) => (
//   <ul>
//     {props.exampleVideoData.map(specificVideoData =>
//       <VideoList videos={specificVideoData} />
//       )}
//   </ul>
// );



// let function = () => (
//   <div>
//     <h1>My Grocery List</h1>
//   <GroceryItemList groceries={['Cucumbers', 'Kale', 'Apples']}/>
//   </div>
// );




//currentvideo = object
//videos = is all other videos, eg

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;





