import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayoutLeft2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zM7 6H5v12h2V6z" />
    </Svg>
  );
}

export default SvgLayoutLeft2Fill;
