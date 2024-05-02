import { Routes, Route, Navigate } from 'react-router-dom'
import PaymentPage from './PaymentPage'
import Home from './Home'
import Terms from './Terms'
import Privacy from './Privacy'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='terms' element={<Terms />} />
      <Route path='privacy' element={<Privacy />} />
      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  )
}

export default App