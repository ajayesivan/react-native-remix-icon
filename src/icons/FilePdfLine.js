import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFilePdfLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 16H8V8h4a4 4 0 0 1 0 8m-2-6v4h2a2 2 0 1 0 0-4zm5-6H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008z" />
  </Svg>
);
export default SvgFilePdfLine;
