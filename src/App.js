import './App.css';
// import { useState, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Navbar from './pages/Navbar';
import Form from './Form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



function App() {
  const client = new QueryClient({
    defaultOptions: {

    }
  });

  return (

    <div className='App'>
      <QueryClientProvider client={ client }>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/profile' element={ <Profile /> } />
            <Route path='/form' element={ <Form /> } />

          </Routes>
        </Router>
      </QueryClientProvider>

    </div>

  )
}






// const TopComponents = () => {
//   const [state, setstate] = useState();
//   return (
//     <MiddleComponents state={ state } />
//   )
// }


// const MiddleComponents = (state) => {
//   return (
//     <BottomComponents state={ state } />
//   )
// }


// const BottomComponents = (state) => {
//   return (
//     <div>{ state }</div>
//   )
// }
export default App


