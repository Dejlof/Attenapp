import './App.css'
import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ForgotPassword from './pages/ForgotPassword'
import SuccessfulPage from './pages/SuccessfulPage'
import GetStarted from './pages/GetStarted'
import ScanFacePage from './pages/ScanFacePage'
import SetPassword from './pages/SetPassword'
import ResetPassword from './pages/ResetPassword'

function App() {
  return (
<Routes>
<Route path='/' element={<LoginPage/>} />
<Route path='/Register' element={<SignUpPage/>} />
<Route path='/forgotpassword' element={<ForgotPassword/>} />
<Route path='/sucessful' element={<SuccessfulPage/>} />
<Route path='/getstarted' element={<GetStarted/>} />
<Route path='/scanface' element={<ScanFacePage/>} />
<Route path='/setpassword' element={<SetPassword/>} />
<Route path='/resetpassword' element={<ResetPassword/>} />
</Routes>
  )
}

export default App
