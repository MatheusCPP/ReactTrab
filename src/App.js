import {BrowserRouter as Router} from 'react-router-dom';

import Footer from './components/Footer/index';
import ConfigRouters from './ConfigRouters';
import Header from './components/Header/index';

function App() {
  return (
    <Router>
      <Header />
      <ConfigRouters />
      <Footer />
    </Router>
  );
}

export default App;
