import './index.css';
import './App.css';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import Navbar from './components/Navbar/Navbar'
import AppRouter from './Router';

function App() {
  return (
    <>
      <div className='app-root'>
        <AnimatedBackground />
        <div className='app-content'>
          <Navbar />
          <AppRouter />
        </div>
          
      </div>
    </>
  );
}

export default App;