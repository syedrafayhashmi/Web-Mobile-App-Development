import './App.css';
import Header from './Header';

function App() {
  return (
    //Changed App to app ( BEM class naming convention)
    <div className="app">  
      {   /*Header*/
      <Header/>
      }

      {/* Tinder Cards */
      <Cards/>
      }

      {/* Swipe buttons */}

    </div>

  );
}

export default App;
