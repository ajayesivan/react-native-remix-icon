import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFontFamily = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5.554 22H3.4L11 3h2l7.6 19h-2.154l-2.4-6H7.954zm3.2-8h6.492L12 5.885z" />
  </Svg>
);
export default SvgFontFamily;
