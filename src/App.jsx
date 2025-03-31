import Ambiente from "./components/sections/Ambiente"
import Contato from "./components/sections/Contato"
import Familia from "./components/sections/Familia"
import Header from "./components/sections/Header"
import Hero from "./components/sections/Hero"
import Tratamento from "./components/sections/Tratamento"

const App = () => {
  return (
    <>
        {console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)}
        <Header/>
        <Hero/>
        <Tratamento/>
        <Ambiente/>
        <Familia/>
        <Contato/>
    </>
  )
}

export default App