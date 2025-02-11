import './App.css'
import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'


function App() {
  return (
<Routes>
<Route path='/' element={<LoginPage/>} />
<Route path='/Register' element={<SignUpPage/>} />
</Routes>
  )
}

export default App
