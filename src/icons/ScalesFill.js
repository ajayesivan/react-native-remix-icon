import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgScalesFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12.998 2v1h7v2h-7v14h4v2h-10v-2h4V5h-7V3h7V2zm-8 4.343 2.828 2.829a4 4 0 1 1-5.657 0zm14 0 2.828 2.829a4 4 0 1 1-5.657 0zm0 2.829-1.414 1.414A1.99 1.99 0 0 0 16.998 12l4 .001c0-.54-.212-1.041-.586-1.415zm-14 0-1.414 1.414A1.99 1.99 0 0 0 2.998 12l4 .001c0-.54-.212-1.041-.586-1.415z" />
  </Svg>
);
export default SvgScalesFill;
