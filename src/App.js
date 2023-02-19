import './App.css';
import { WhatsApp, RightClickedMenu } from './components';
import React from 'react';

function App() {
  const [Position,setPosition] = React.useState([{X:0,Y:0}]);
  const [bool, setBool] = React.useState(false);

  const positions = (X,Y)=>{
setPosition(prev=>{
  return {
    ...prev,X:X,Y:Y
  }
})
  }
  const positions2 = (e) => {
setBool(prev=>!prev)
  }
  return (
 <React.Fragment>
      <RightClickedMenu  Positions = {Position} bool={bool}/>
      <WhatsApp positions={positions} onClick  = {positions2}/>

 </React.Fragment>
  );
}

export default App;
