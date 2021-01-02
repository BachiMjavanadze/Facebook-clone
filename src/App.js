import React, { Fragment } from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Media from './Media';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';
import Widgets from './Widgets';

function App() {
  const [{ user }, dispatch] = useStateValue();

  // var scale = 'scale(1)';
  // document.body.style.webkitTransform = scale;    // Chrome, Opera, Safari
  // document.body.style.msTransform = scale;       // IE 9
  // document.body.style.transform = scale;     // General

  return (
    <div className='app'>
      {!user ? <Login /> : (
        <Fragment>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </Fragment>
      )}
      <Media />
    </div>
  );
}

export default App;

