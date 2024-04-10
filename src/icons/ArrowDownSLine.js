import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDownSLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 13.171l4.95-4.95 1.414 1.415L12 16 5.636 9.636 7.05 8.222l4.95 4.95z" />
    </Svg>
  );
}

export default SvgArrowDownSLine;
