import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCheckboxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm1 2v14h14V5H5zm6.003 11L6.76 11.757l1.414-1.414 2.829 2.829 5.657-5.657 1.414 1.414L11.003 16z" />
    </Svg>
  );
}

export default SvgCheckboxLine;
