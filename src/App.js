import logo from './logo.svg';
import './App.css';
import LandingPageApp from './LandingPage/LandingPageApp';
import CodePortfolioApp from './CodePortfolio/CodePortfolioApp';
import DesignPortfolioApp from './DesignPortfolio/DesignPortfolioApp';
import VideographyApp from './DesignPortfolio/Videography/VideographyApp';
import { Routes, Route } from "react-router-dom"
import GraphicApp from './DesignPortfolio/Graphics/GraphicApp';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPageApp/>}/>
        <Route path='code' element={<CodePortfolioApp/>}/>
        <Route path='/design' element={<DesignPortfolioApp/>}/>
        <Route path = '/design/graphics' element={<GraphicApp/>}/>
        <Route path = '/design/videography' element={<VideographyApp/>}/>
        
        
        
      </Routes>
    </div>
  );
}

export default App;
