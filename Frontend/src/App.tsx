import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignInPage from './pages/user.auth/signin'
import SignUpPage from './pages/user.auth/signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth/signin' element={<SignInPage />} />
        <Route path='/auth/register' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
      
  )
}

export default App
