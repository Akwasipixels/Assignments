
import MyFirstComponent from './components/tencomponents/MyFirstComponent';
import MySecondComponent from './components/tencomponents/MySecondComponent';
import MyThirdComponent from './components/tencomponents/MyThirdComponent';
import MyFourthComponent from './components/tencomponents/MyFourthComponent';
import MyFifthComponent from './components/tencomponents/MyFifthComponent';
import MySixthComponent from './components/tencomponents/MySixthComponent';
import MySeventhComponent from './components/tencomponents/MySeventhComponent';
import MyEightComponent from './components/tencomponents/MyEightComponent';
import MyNinthComponent from './components/tencomponents/MyNinthComponent';
import MyTenthComponent from './components/tencomponents/MyTenthComponent';

// import MasterComponent from './components/MasterComponent';
// import ParentComponent from './components/parentcomponent';

// import Dashboard from './components/propdrilling/dashboard';
// import Counter from './components/state/counter';

import Home from './components/pages/home';
import Login from "./components/pages/login";

function App() {

  return (
    <div>
      {/* <MasterComponent name="1" height="45"/>
      <MasterComponent name="2" height="67"/>
      <MasterComponent name="3" height="34"/>
      <MasterComponent name="4" height="30"/>


      <ParentComponent name="Kojo" gender="Female" age="23" email="kojo@gmail.com"/> */}


      {/* <Dashboard 
        firstName="Allen"
        lastName="eben"
        email="allen@yahoo.com"
        dateofbirth = "1978"
      /> */}

      {/* <Counter /> */}

      {/* <Home /> */}
      < MyFirstComponent/>
      < MySecondComponent/>
      < MyThirdComponent/>
      < MyFourthComponent/>
      < MyFifthComponent/>
      < MySixthComponent/>
      < MySeventhComponent/>
      < MyEightComponent/>
      < MyNinthComponent/>
      < MyTenthComponent/>

    </div>

  );
}

export default App;
