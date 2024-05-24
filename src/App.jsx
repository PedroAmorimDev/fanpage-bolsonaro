import { Routes, BrowserRouter, Route } from "react-router-dom" 
import Home from "./componentes/Home"
import Header from "./componentes/Header"
import Footer from "./componentes/Footer"

function App() {

  return (
    <BrowserRouter>
    <Header logo={'Bolsonaro'} sobre={'sobre'} autor={'autor'} />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sobre"/>
      <Route path="/contato"/>
    </Routes>
    <Footer paragrafh={'Todos os direitos reservados'} />
    </BrowserRouter>
  )
}

export default App
