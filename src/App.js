import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContextProvider from './Context/UserContext';
import RecipesContextProvider from './Context/RecipesContext';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import './scss/App.scss';

function App() {
  return (
    <UserContextProvider>
      <RecipesContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </RecipesContextProvider>
    </UserContextProvider>
  );
}

export default App;
