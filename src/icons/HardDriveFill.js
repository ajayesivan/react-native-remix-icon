import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHardDriveFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.95 2H20a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1v-8.05c.329.033.663.05 1 .05 5.523 0 10-4.477 10-10 0-.337-.017-.671-.05-1zM15 16v2h2v-2h-2zM11.938 2A8 8 0 013 10.938V3a1 1 0 011-1h7.938z" />
    </Svg>
  );
}

export default SvgHardDriveFill;
