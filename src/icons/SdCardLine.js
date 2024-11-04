import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSdCardLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M6 7.828V20h12V4H9.828zm-1.707-1.12L9 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7.414a1 1 0 0 1 .293-.707M15 5h2v4h-2zm-3 0h2v4h-2zM9 6h2v3H9z" />
  </Svg>
);
export default SvgSdCardLine;
