import logo from './logo.svg';
import './App.css';
import LandingPageApp from './LandingPage/LandingPageApp';
import CodePortfolioApp from './CodePortfolio/CodePortfolioApp';
import DesignPortfolioApp from './DesignPortfolio/DesignPortfolioApp';
import videographyApp from './videography/videographyApp';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPageApp/>}/>
        <Route path='code' element={<CodePortfolioApp/>}/>
        <Route path='design' element={<DesignPortfolioApp/>}/>
        <Route path='design/videography' element={videographyApp()}/>
      </Routes>
    </div>
  );
}

export default App;
