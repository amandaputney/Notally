import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NewNotePage from '../NewNotePage/NewNotePage';
import AuthPage from '../AuthPage/AuthPage';
import ArchivePage from '../ArchivePage/ArchivePage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {/* is user truthy */}
        { user ? 
          <>
            <NavBar user={user} setUser={setUser}/>
            <Routes>
              {/* Route components in here */}
              {/* Routes component will render the most appropriate match */}
              <Route path="/notes/new/" element={<NewNotePage />}/>
              <Route path="/notes" element={<ArchivePage />}/>
            </Routes>
          </>
              :
          <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

