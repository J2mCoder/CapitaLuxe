import { useEffect, useState } from "react"
import { Link } from "react-scroll"

export default function Header() {
  const [HideHeaderBg, setHideHeaderBg] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHideHeaderBg(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const bgHeader = HideHeaderBg ? "bg-[var(--bg-150)]" : ""
  return (
    <div
      className={`fixed z-50 w-full text-[var(--text-200)] flex justify-center items-center p-5 ${bgHeader} transition-all duration-300`}>
      <div className="container">
        <div className="grid grid-cols-6">
          <div className="text-5xl col-span-1 flex justify-center items-center">
            <Link
              to="home"
              smooth={true}
              duration={200}
              className="cursor-pointer">
              <span className="font-bold">Capta</span>
              <span className="text-[var(--accent-100)] font-bold">Luxe</span>
            </Link>
          </div>
          <div className="col-span-4 flex justify-center items-center space-x-5">
            <Link
              to="home"
              smooth={true}
              duration={200}
              className="text-xl font-semibold cursor-pointer hover:text-[var(--accent-100)] hover:underline hover:underline-offset-4  transition-all">
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={200}
              className="text-xl font-semibold cursor-pointer hover:text-[var(--accent-100)] hover:underline hover:underline-offset-4 transition-all">
              About
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={200}
              className="text-xl font-semibold cursor-pointer hover:text-[var(--accent-100)] hover:underline hover:underline-offset-4 transition-all">
              Services
            </Link>
            <Link
              to="team"
              smooth={true}
              duration={200}
              className="text-xl font-semibold cursor-pointer hover:text-[var(--accent-100)] hover:underline hover:underline-offset-4 transition-all">
              Team
            </Link>
            <Link
              to="testimonies"
              smooth={true}
              duration={200}
              className="text-xl font-semibold cursor-pointer hover:text-[var(--accent-100)] hover:underline hover:underline-offset-4 transition-all">
              Testimonies
            </Link>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <Link
              to="contact"
              smooth={true}
              duration={200}
              className="text-xl font-bold cursor-pointer border p-2 w-40 rounded-md hover:bg-[var(--accent-100)] hover:text-[var(--text-200)] hover:border-none transition-all flex justify-center">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
