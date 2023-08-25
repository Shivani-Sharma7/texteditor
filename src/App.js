import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

//Navbar & TextForm are components
//heading in TextForm is a propType
//export default App returns the App function by default
//we can also export other vars or functions but only one can be default
function App() {
  return (
    <>
    <Navbar title='TextUtils' aboutText='About' /> 
    <div className='container my-3'>
      <TextForm heading="Enter the text to analyse below" />
    </div>
    </>
  );
}

export default App;
