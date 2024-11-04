import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgReplyLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 20 1 12l10-8v5c5.523 0 10 4.477 10 10q0 .41-.032.81a9 9 0 0 0-7.655-4.805L13 15h-2zm-2-7h4.034l.347.007c1.285.043 2.524.31 3.676.766A7.98 7.98 0 0 0 11 11H9V8.161L4.202 12 9 15.839z" />
  </Svg>
);
export default SvgReplyLine;
