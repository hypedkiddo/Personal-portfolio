import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { Toaster } from "@/components/ui/toaster";
import SplashCursor from "./components/SplashCursor";
function App() {
  

  return (
    <>
    <Toaster/>
    <SplashCursor/>
     <BrowserRouter>
     <Routes>
     <Route index element={<Home/>}></Route>
     <Route path="*" element={<NotFound/>}> </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
