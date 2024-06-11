import { useEffect } from "react"

export default function Services() {
  useEffect(() => {
    const items = document.querySelectorAll(".item")

    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        items.forEach((i) => {
          i.style.animationPlayState = "paused"
        })
        item.classList.add("hovered")
      })

      item.addEventListener("mouseleave", () => {
        items.forEach((i) => {
          i.style.animationPlayState = "running"
        })
        item.classList.remove("hovered")
      })
    })

    return () => {
      items.forEach((item) => {
        item.removeEventListener("mouseenter", null)
        item.removeEventListener("mouseleave", null)
      })
    }
  }, [])
  return (
    <div
      id="services"
      className="h-screen scroll-pt-24 pt-24 flex justify-center items-center
      ">
      <div className="w-full h-full flex justify-center items-center">
        <div className="relative contentItem w-[90%] bg-green-300 h-full overflow-hidden mask-gradient">
          <div className="item1 item1"></div>
          <div className="item1 item2"></div>
          <div className="item1 item3"></div>
          <div className="item1 item4"></div>
          <div className="item1 item5"></div>
          <div className="item1 item6"></div>
          <div className="item1 item7"></div>
          <div className="item1 item8"></div>
        </div>
      </div>
    </div>
  )
}
