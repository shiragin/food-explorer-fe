import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContextProvider from './Context/UserContext';
import RecipesContextProvider from './Context/RecipesContext';
import Home from './Pages/Home';
import './scss/App.scss';
import MainNavbar from './Components/Navbar/MainNavbar';

function App() {
  return (
    <UserContextProvider>
      <RecipesContextProvider>
        <BrowserRouter>
          <MainNavbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </RecipesContextProvider>
    </UserContextProvider>
  );
}

export default App;
