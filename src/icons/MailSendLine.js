import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMailSendLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 3a1 1 0 0 1 1 1v16.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1zM8 15v2H0v-2zm-3-5v2H0v-2zm14.566-5H4.434L12 11.81z" />
  </Svg>
);
export default SvgMailSendLine;
