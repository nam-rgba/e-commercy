import { BrowserRouter, Routes, Route } from "react-router-dom"
import  {lazy, Suspense} from 'react'

import Home from "./pages/Home"
const LayoutAccount = lazy(() => import('./pages/Auth/LayoutAccount'))
const SignIn = lazy(() => import('./pages/Auth/SignIn'))
const SingUp = lazy(() => import('./pages/Auth/SingUp'))



function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="account" element={<LayoutAccount />} >
            <Route path="login" element={<SignIn />} />
            <Route path="register" element={<SingUp/>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
