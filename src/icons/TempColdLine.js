import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTempColdLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 5a4 4 0 118 0v5.255a7 7 0 11-8 0V5zm1.144 6.895a5 5 0 105.712 0L14 11.298V5a2 2 0 10-4 0v6.298l-.856.597zM8 16h8a4 4 0 01-8 0z" />
    </Svg>
  );
}

export default SvgTempColdLine;
