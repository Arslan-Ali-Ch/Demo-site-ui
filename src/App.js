import logo from './logo.svg';
import './App.css';
import Header from './COMPONENTS/header/Header';
import Intro from './COMPONENTS/intro/Intro';
import Service from './COMPONENTS/service/Service';
import Experience from './COMPONENTS/experience/Experience';
import Worker from './COMPONENTS/worker/Worker';
import Portfolio from './COMPONENTS/Portfolio/Portfolio';
import Test from './COMPONENTS/test/Test';
import Port2 from './COMPONENTS/Portfolio2/Port2';
import Form from './COMPONENTS/form/Form';
import Footer from './COMPONENTS/footer/Footer';
import {GlobalContext, GlobalProvider} from './contextapi';
import { useContext } from 'react';


function App() {
  const {state}=useContext(GlobalContext);
  console.log("app"+state.dark);
  

  return (
     <div className="App"
      style={{background: state.dark? 'white':'black',color: state.dark? 'black':'white'}}>
      <Header/>
      <Intro/>
      <Service />
      <Experience />
      <Worker />
      <Portfolio />
      <Port2/>
      <Form/>
      <Footer/>
    </div>
  
    );
}

export default App;
