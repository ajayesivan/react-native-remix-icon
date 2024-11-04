import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowLeftDownFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.36 13.052l4.95 4.95H5.998V6.687l4.95 4.95 5.656-5.658 1.415 1.415-5.657 5.657z" />
    </Svg>
  );
}

export default SvgArrowLeftDownFill;
