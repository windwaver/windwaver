import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { csv } from 'd3';
import { message } from './message'

const csvUrl = 'https://gist.githubusercontent.com/windwaver/1d5d788cd934c4369210a7192ff581e4/raw/cssNamedColors.csv'

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  },[]);  
  
  return <pre>{data ? message(data) : 'Loading...'}</pre>;
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);