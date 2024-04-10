import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDriveLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9.097 6.15L4.31 14.443l1.755 3.032 4.785-8.289L9.097 6.15zm-1.3 12.324h9.568l1.751-3.034H9.55l-1.752 3.034zm11.314-5.034l-4.786-8.29H10.83l4.787 8.29h3.495zM8.52 3.15h6.96L22 14.444l-3.48 6.03H5.49L2 14.444 8.52 3.15zm3.485 8.036l-1.302 2.254h2.603l-1.301-2.254z" />
    </Svg>
  );
}

export default SvgDriveLine;
