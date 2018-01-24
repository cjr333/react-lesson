import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
const API_KEY = "AIzaSyCZ0FzBGlP8vSCX5b9NxfveF2JLkV-zc0k";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    this.videoSearch('surfboard')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({ videos });
      // this.setState( { videos: videos });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector(".container"));