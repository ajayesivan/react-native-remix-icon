import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShareForward2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 19h16v-5h2v6a1 1 0 01-1 1H3a1 1 0 01-1-1v-6h2v5zM16.172 7l-3.95-3.95 1.414-1.414L20 8l-6.364 6.364-1.414-1.415L16.172 9H5V7h11.172z" />
    </Svg>
  );
}

export default SvgShareForward2Line;
