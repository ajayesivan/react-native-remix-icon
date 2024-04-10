import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDashboard2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 1c1.018 0 1.985.217 2.858.608L13.295 7.17a5 5 0 00-4.83 8.366L7.05 16.95l-.156-.161A7 7 0 0112 5zm6.392 4.143c.39.872.608 1.84.608 2.857a6.978 6.978 0 01-2.05 4.95l-1.414-1.414a5.008 5.008 0 001.295-4.83l1.561-1.563zm-2.15-2.8l1.415 1.414-3.725 3.726A2.003 2.003 0 0112 14a2 2 0 11.517-3.932l3.726-3.725z" />
    </Svg>
  );
}

export default SvgDashboard2Line;
