import React, {Component} from 'react';
import ReactDOM  from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch  from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAnV4WzryaY29Kzqmgtc1ot2uKU9CoXWoo';

class App extends Component {
  constructor(props){
  super(props);
  this.state = {videos: [] };

  YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
    this.setState({videos});
  });
  }

render(){
  return (
    <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
    </div>
  );
 }
}
ReactDOM.render(<App />, document.querySelector('.container'));
