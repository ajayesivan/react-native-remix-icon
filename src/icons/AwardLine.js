import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAwardLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0M9 16.42v3.049l3-1.8 3 1.8v-3.05A8 8 0 0 1 12 17a8 8 0 0 1-3-.581M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12" />
  </Svg>
);
export default SvgAwardLine;
