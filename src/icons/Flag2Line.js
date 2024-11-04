import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlag2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21.138 3a.5.5 0 01.434.748L18 10l3.573 6.252a.5.5 0 01-.435.748H4v5H2V3h19.138zm-2.584 2H4v10h14.554l-2.857-5 2.857-5z" />
    </Svg>
  );
}

export default SvgFlag2Line;
