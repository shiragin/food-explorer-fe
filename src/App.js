import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContextProvider from './context/UserContext';
import RecipesContextProvider from './context/RecipesContext';
import './App.css';

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
