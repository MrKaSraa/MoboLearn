
import './App.css';
import Header from './header/Header';

import Footer from './Footer/Footer'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
function App() {

  
let router =useRoutes(routes)

const onloadd = function (params) {
  window.scrollTo(0,0)
}


  return (
    <div onLoad={onloadd} className="App">
      <Header></Header>
{router}
  <Footer ></Footer>
    </div>
  );
}

export default App;
