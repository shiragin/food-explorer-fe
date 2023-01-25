import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContextProvider from './Context/UserContext';
import RecipesContextProvider from './Context/RecipesContext';
import Home from './Pages/Home';
import './scss/App.scss';
import MainNavbar from './Components/Navbar/MainNavbar';
import Search from './Components/Search/Search';
import RecipePage from './Components/RecipePage/RecipePage';
import Results from './Pages/Results';

function App() {
  return (
    <UserContextProvider>
      <RecipesContextProvider>
        <BrowserRouter>
          <MainNavbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Results />} />
            <Route path='/recipePage/:id' element={<RecipePage />} />
          </Routes>
        </BrowserRouter>
      </RecipesContextProvider>
    </UserContextProvider>
  );
}

export default App;
