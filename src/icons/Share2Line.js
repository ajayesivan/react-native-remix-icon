import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShare2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2.586l6.207 6.207-1.414 1.414L13 6.414V16h-2V6.414l-3.793 3.793-1.414-1.414L12 2.586zM3 18v-4h2v4a1 1 0 001 1h12a1 1 0 001-1v-4h2v4a3 3 0 01-3 3H6a3 3 0 01-3-3z" />
    </Svg>
  );
}

export default SvgShare2Line;
