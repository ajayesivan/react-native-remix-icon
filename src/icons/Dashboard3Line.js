import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDashboard3Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm3.833 3.337a.596.596 0 01.763.067.59.59 0 01.063.76c-2.18 3.046-3.38 4.678-3.598 4.897a1.5 1.5 0 01-2.122-2.122c.374-.373 2.005-1.574 4.894-3.602zM17.5 11a1 1 0 110 2 1 1 0 010-2zm-11 0a1 1 0 110 2 1 1 0 010-2zm2.318-3.596a1 1 0 11-1.414 1.414 1 1 0 011.414-1.414zM12 5.5a1 1 0 110 2 1 1 0 010-2z" />
    </Svg>
  );
}

export default SvgDashboard3Line;
