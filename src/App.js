import './App.css';
import { useEffect, useState } from 'react';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [exercises, setExercises] = useState([]);
  const [totalDuration, setTotalDuration] = useState(0);
  
  useEffect(() => {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setExercises(data));
  }, []);

  const addToExTime = duration =>{
    setTotalDuration(totalDuration + duration);
  }

  const showToast = () => {
    console.log('clicked');
    toast.info(("Congratulations! You are done with your activities."), {
      position: toast.POSITION.TOP_CENTER
    })
  }

  return (
    <div className="App">
      <div className="container sm:grid sm:grid-cols-4 gap-5 justify-items-start px-4">
        <Main exercises={exercises} addToExTime={addToExTime} />
        <Sidebar totalDuration={totalDuration} showToast={showToast} />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
