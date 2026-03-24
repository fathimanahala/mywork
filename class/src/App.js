import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Parent from './Parent';
import Child from './Child';
import Arrow from './Arrow';
import Item from './Item';
// import UserList from './UserList';
// import UseState from './UseState';
// import UseEffect from './UseEffect';
import UseNavigate from './UseNavigate';

function App() {
  return ( 
    <div className="App">
      {/* <Parent /> */}
      {/* <Child /> */}
      {/* <Arrow /> */}
      {/* <Item /> */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseNavigate /> */}
      {/* <UserList /> */}
      <Routes>
        <Route path="/" element={<UseNavigate />} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
