import './App.css';
import React, {useContext} from 'react';
import { dataContext } from './Context';
import DocumentMeta from 'react-document-meta';
import {Header}  from './components/Header';
import {Main} from './components/Main';


function App() {
  // adding meta data to the app
  const meta = {
    title: 'Budget-App',
    meta: {
      charset: 'utf-8',
    }
  }

const {calcTotal } = useContext(dataContext)  
  

// function that assign a class depending on the total amount (incList total - exp total)
const handleClass = () => {
  

  // depending on the value if 0, or more than 0, or less than 0 it assign different class 
  if (calcTotal() === 0) {
    return 'overlay overlay--neutral'
  } else if (calcTotal() > 0) {
    return 'overlay overlay--safe'
  } else if (calcTotal() < 0) {
    return 'overlay overlay--danger'
  }
}
  
  
  return (
    <DocumentMeta {...meta}>
        <div className={handleClass()}></div>
        <Header />
        <Main    />
    </DocumentMeta>
  );
}

export default App;
