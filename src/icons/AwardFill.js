import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAwardFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8" />
  </Svg>
);
export default SvgAwardFill;
