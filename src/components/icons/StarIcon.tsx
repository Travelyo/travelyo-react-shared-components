import * as React from "react"
import { SvgProps } from "../../interfaces/interfaces"
const StarIcon = ({
  size = 20,
  fill = '#212121',
  ...props
}: SvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fill} viewBox="0 0 24 24" {...props}>
    <path d="m12 18.26-7.053 3.948 1.575-7.928L.588 8.792l8.027-.952L12 .5l3.385 7.34 8.027.952-5.934 5.488 1.575 7.928-7.053-3.948Z" />
  </svg>
)
export default StarIcon
