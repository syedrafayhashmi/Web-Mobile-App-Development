import './App.css';
import Header from './Header';
import TinderCards from './TinderCards'
function App() {
  return (
    //Changed App to app ( BEM class naming convention)
    <div className="app">  
      {   /*Header*/
      <Header/>
      }

      {/* Tinder Cards */
      <TinderCards/>
      }

      {/* Swipe buttons */}

    </div>

  );
}

export default App;
