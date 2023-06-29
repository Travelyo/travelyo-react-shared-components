import * as React from "react"
import { SvgProps } from "../../interfaces/interfaces"

const ArrowDown = ({
  size = 20,
  fill,
  ...props
}: SvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} {...props}>
    <path d="m12 13.171 4.95-4.95 1.414 1.415L12 16 5.636 9.636 7.05 8.222l4.95 4.95Z" />
  </svg>
)
export default ArrowDown
