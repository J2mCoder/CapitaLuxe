import { FaArrowRight } from "react-icons/fa6"
import { Link } from "react-scroll"
import HomeBg from "../assets/homebg.jpg"

export default function Home() {
  return (
    <div
      className="h-screen relative home-bg"
      id="home"
      style={{
        background: "url(" + HomeBg + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="overlay"></div>
      <div className="content h-full flex justify-center items-center">
        <div className=" w-[50%] p-5 text-center flex justify-center flex-col">
          <span className="text-4xl font-medium">
            Optimisez vos finances avec nos services sur mesure.
          </span>
          <span className="mt-5">
            Notre équipe de professionnels chevronnés est là <br />
            pour vous accompagner dans vos décisions financières stratégiques.
          </span>
          <span className="mt-5 flex justify-center items-center animate-bounce">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-[var(--accent-100)] cursor-pointer flex justify-center items-center space-x-3">
              <span className="border p-2 rounded-full hover:border-red-400 transition-all">
                <FaArrowRight className="text-2xl" />
              </span>
              <span className="font-bold text-2xl underline underline-offset-2">
                Découvrir nos services
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
