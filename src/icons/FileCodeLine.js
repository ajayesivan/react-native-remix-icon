import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFileCodeLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM17.657 12l-3.536 3.536-1.414-1.415L14.828 12l-2.12-2.121 1.413-1.415zM6.343 12 9.88 8.464l1.414 1.415L9.172 12l2.12 2.121-1.413 1.415z" />
  </Svg>
);
export default SvgFileCodeLine;
