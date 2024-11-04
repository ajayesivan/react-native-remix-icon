import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTeamFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8m-6.5 3a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M21 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5m-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6z" />
  </Svg>
);
export default SvgTeamFill;
