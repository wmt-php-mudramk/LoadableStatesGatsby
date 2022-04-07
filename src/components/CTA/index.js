import * as React from "react"
// import loadable from "@loadable/component"
// const CTAImage = loadable(() => import("./CTAImage"))
// const CTASimple = loadable(() => import("./CTASimple"))
import CTAImage from "./CTAImage"
import CTASimple from "./CTASimple"

export const CTA = ({ type }) => {
    console.log('type', type)
    switch (type) {
        case "image":
            return <CTAImage />
        case "simple":
            return <CTASimple />
        default:
            break
    }
}

export default CTA