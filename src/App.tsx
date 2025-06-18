import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Note from './pages/note';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/note' element={<Note />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </>
  )
}