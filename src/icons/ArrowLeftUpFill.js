import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowLeftUpFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.36 10.947l5.658 5.657-1.415 1.414-5.656-5.657-4.95 4.95V5.997H17.31l-4.95 4.95z" />
    </Svg>
  );
}

export default SvgArrowLeftUpFill;
