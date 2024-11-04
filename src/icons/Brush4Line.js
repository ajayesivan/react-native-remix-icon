import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBrush4Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9 4.997v6.272H7V4.997H5v9h14v-9H9zm11 11H4v2h16v-2zm-17-2v-10a1 1 0 011-1h16a1 1 0 011 1v10h1v5a1 1 0 01-1 1h-8v3h-2v-3H3a1 1 0 01-1-1v-5h1z" />
    </Svg>
  );
}

export default SvgBrush4Line;
