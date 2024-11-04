import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHourglass2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 2h16v4.46L13.537 12 20 17.54V22H4v-4.46L10.463 12 4 6.46V2zm8 8.683l6-5.143V4H6v1.54l6 5.143zm0 2.634L6 18.46V20h12v-1.54l-6-5.143z" />
    </Svg>
  );
}

export default SvgHourglass2Line;
