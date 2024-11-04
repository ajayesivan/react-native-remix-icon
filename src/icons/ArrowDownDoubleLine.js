import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDownDoubleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 19.164l6.207-6.207-1.414-1.414L12 16.336l-4.793-4.793-1.414 1.414L12 19.164zm0-5.65l6.207-6.207-1.414-1.414L12 10.686 7.207 5.893 5.793 7.307 12 13.514z" />
    </Svg>
  );
}

export default SvgArrowDownDoubleLine;
