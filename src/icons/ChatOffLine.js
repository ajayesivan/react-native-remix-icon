import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChatOffLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m2.808 1.393 19.799 19.8-1.415 1.414-3.607-3.608L6.455 19 2 22.5V4c0-.17.042-.329.116-.469l-.722-.723zM4 5.413v12.972L5.763 17h9.822zM21 3a1 1 0 0 1 1 1v13.785l-2-2V5L9.213 4.999 7.214 3z" />
  </Svg>
);
export default SvgChatOffLine;
