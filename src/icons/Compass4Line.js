import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCompass4Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm3.446-10.032l-5.478 5.478a4.02 4.02 0 01-1.414-1.414l5.478-5.478a4.02 4.02 0 011.414 1.414z" />
    </Svg>
  );
}

export default SvgCompass4Line;
