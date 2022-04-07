import * as React from "react"
import loadable from "@loadable/component"
const LeftMediaRightContent = loadable(() => import("../components/LeftMediaRightContent"))
const RightMediaLeftContent = loadable(() => import("../components/RightMediaLeftContent"))
const Testimonial = loadable(() => import("../components/Testimonial"))
const ContentSection = loadable(() => import("../components/ContentSection"))
const CTA = loadable(() => import("../components/CTA/index"))

const ComponentsMap = [
  { id: 0, block: "LeftMediaRightContent" },
  { id: 2, block: "RightMediaLeftContent" },
  { id: 3, block: "CTA" }
]
const IndexPage = () => {
  const Blocks = ({props}) => {
    console.log("props", props)
    switch (props) {
      case "LeftMediaRightContent":
        return <LeftMediaRightContent />
      case "RightMediaLeftContent":
        return <RightMediaLeftContent />
      case "Testimonial":
        return <Testimonial />
      case "ContentSection":
        return <ContentSection />
      case "CTA":
        return <CTA type="simple" />
      default:
        break
    }
  }

  return (
    <main>
      {ComponentsMap.map((data, index) => (
        <div index={index} key={index}>
          <Blocks props={data.block} />
        </div>
      ))}
    </main>
  )
}

export default IndexPage
