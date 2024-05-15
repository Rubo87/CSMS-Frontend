import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Accounts from './pages/Accounts'
import Calendar from './pages/Calendar'
/* import Reports from './pages/Reports' */
import Admin from './pages/Admin'
import Settings from './pages/Settings'
import Users from './pages/Users'
import SignInSide from './pages/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/accounts" element={<Accounts />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
{/*           <Route path="/reports" element={<Reports />}></Route> */}
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/login" element={<SignInSide />}></Route>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
