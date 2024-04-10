import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUserStarFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 14v8H4a8 8 0 018-8zm6 7.5l-2.939 1.545.561-3.273-2.377-2.317 3.286-.477L18 14l1.47 2.977 3.285.478-2.377 2.318.56 3.272L18 21.5zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" />
    </Svg>
  );
}

export default SvgUserStarFill;
