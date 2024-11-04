import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowUpBoxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM5 19V5h14v14H5zm7-12.657L6.343 12l1.414 1.414L11 10.172v7.485h2V10.17l3.243 3.243L17.657 12 12 6.343z" />
    </Svg>
  );
}

export default SvgArrowUpBoxLine;
