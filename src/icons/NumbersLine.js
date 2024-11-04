import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgNumbersLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M9 18H4v-8h5zm-2-2v-4H6v4zm6 0V8h-1v8zm2 2h-5V6h5zm4-2V4h-1v12zm2 2h-5V2h5zm1 4H3v-2h19z" />
  </Svg>
);
export default SvgNumbersLine;
