import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSlideshow4Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8.17 3A3.001 3.001 0 0111 1h2c1.306 0 2.418.835 2.83 2H21a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h5.17zM4 5v14h16V5h-4.17A3.001 3.001 0 0113 7h-2a3.001 3.001 0 01-2.83-2H4zm7-2a1 1 0 100 2h2a1 1 0 100-2h-2zm-1 6l5 3-5 3V9z" />
    </Svg>
  );
}

export default SvgSlideshow4Line;
