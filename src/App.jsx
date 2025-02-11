import './App.css'
import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ForgotPassword from './pages/ForgotPassword'
import SuccessfulPage from './pages/SuccessfulPage'


function App() {
  return (
<Routes>
<Route path='/' element={<LoginPage/>} />
<Route path='/Register' element={<SignUpPage/>} />
<Route path='/forgotpassword' element={<ForgotPassword/>} />
<Route path='/sucessful' element={<SuccessfulPage/>} />
</Routes>
  )
}

export default App
