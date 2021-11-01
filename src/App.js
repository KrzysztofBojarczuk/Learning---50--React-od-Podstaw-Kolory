import { useState } from 'react';
import './App.css';
import colorData from "./components/color-data.json";
import ColorList from './components/ColorList';
import AddColorForm from './components/AddColorForm';
import { v4 } from "uuid";


function App() {

  
  
  
  return (
    <>
    <AddColorForm />
    <ColorList />
  </>
  );
}

export default App;
