import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCollageLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 3.107a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1v-16a1 1 0 011-1h16zm-8.811 10.158L5 14.355v4.752h7.218l-1.03-5.842zM19 5.107h-7.219l2.468 14H19v-14zm-9.25 0H5v7.218l5.841-1.03L9.75 5.108z" />
    </Svg>
  );
}

export default SvgCollageLine;
