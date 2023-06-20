import * as React from "react";
import type { SVGProps } from "react";
const SvgHotel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 40 49"
    {...props}
  >
    <path
      fill="#212121"
      d="M20 48.284 5.858 34.142c-7.81-7.81-7.81-20.474 0-28.284 7.81-7.81 20.474-7.81 28.284 0 7.81 7.81 7.81 20.474 0 28.284L20 48.284Z"
    />
    <path
      fill="#fff"
      d="M28.333 28.5H11.667v-1.667h.833v-12.5c0-.46.373-.833.833-.833H25c.46 0 .833.373.833.833V18.5H27.5v8.333h.833V28.5Zm-4.166-1.667h1.666v-6.666h-5v6.666H22.5v-5h1.667v5Zm0-8.333v-3.333h-10v11.666h5V18.5h5Zm-8.334 1.667H17.5v1.666h-1.667v-1.666Zm0 3.333H17.5v1.667h-1.667V23.5Zm0-6.667H17.5V18.5h-1.667v-1.667Z"
    />
  </svg>
);
export default SvgHotel;
