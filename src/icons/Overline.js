import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgOverline(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.246 18H8.754l-1.6 4H5l6-15h2l6 15h-2.154l-1.6-4zm-.8-2L12 9.885 9.554 16h4.892zM4 3h16v2H4V3z" />
    </Svg>
  );
}

export default SvgOverline;
