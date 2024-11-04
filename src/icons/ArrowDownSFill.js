import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowDownSFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 16l-6-6h12l-6 6z" />
    </Svg>
  );
}

export default SvgArrowDownSFill;
