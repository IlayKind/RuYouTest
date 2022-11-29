import React from "react";
import {Route, Routes} from "react-router-dom";
import Form from "./component/Form/Form";
import Palette from "./component/Palette/Palette";
import './App.scss'

function App() {
  return (
    <div className="wrapper">
      <div className='content__container'>
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/palette' element={<Palette/>}/>
        </Routes>
    </div>
    </div>
  );
}

export default App;
