import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDrizzleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 18v-2h.5a3.5 3.5 0 10-2.5-5.95V10a6 6 0 10-8 5.659v2.089a8 8 0 119.458-10.65A5.5 5.5 0 1117.5 18H17zm-8-2h2v4H9v-4zm4 3h2v4h-2v-4z" />
    </Svg>
  );
}

export default SvgDrizzleLine;
