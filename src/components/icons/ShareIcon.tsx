import * as React from "react"
import { SvgProps } from "../../interfaces/interfaces"
const ShareIcon = ({
  size = 16,
  fill = '#212121',
  ...props
}: SvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={fill} viewBox="0 0 24 24" {...props}>
    <path d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6Zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12l7-7Z" />
  </svg>
)
export default ShareIcon
