import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVidiconFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 9.2l5.213-3.65a.5.5 0 01.787.41v12.08a.5.5 0 01-.787.41L17 14.8V19a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1h14a1 1 0 011 1v4.2zM5 8v2h2V8H5z" />
    </Svg>
  );
}

export default SvgVidiconFill;
