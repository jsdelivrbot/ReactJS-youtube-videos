import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';



const API_KEY = 'AIzaSyAnV4WzryaY29Kzqmgtc1ot2uKU9CoXWoo';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
