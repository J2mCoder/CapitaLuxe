import Header from "./components/Header"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Team from "./pages/Team"
import Testimonies from "./pages/Testimonies"

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Testimonies />
      <Team />
      <Contact />
    </div>
  )
}
