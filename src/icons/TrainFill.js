import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTrainFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.2 20l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 01-2-2V7a4 4 0 014-4h10a4 4 0 014 4v11a2 2 0 01-2 2h-1.8zM5 7v4h14V7H5zm7 11a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgTrainFill;
