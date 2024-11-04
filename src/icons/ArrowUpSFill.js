import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowUpSFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 8l6 6H6l6-6z" />
    </Svg>
  );
}

export default SvgArrowUpSFill;
