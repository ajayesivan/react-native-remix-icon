import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRefund2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.676 4.257c3.928-3.219 9.733-2.995 13.4.672 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0a9.993 9.993 0 01-2.678-9.304l.077-.313 1.934.51a8 8 0 103.053-4.45L7.1 5.68l1.017 1.017-4.596 1.06 1.06-4.596 1.096 1.096zM13.005 6v2h2.5v2h-5.5a.5.5 0 00-.09.992l.09.008h4a2.5 2.5 0 010 5h-1v2h-2v-2h-2.5v-2h5.5a.5.5 0 00.09-.992l-.09-.008h-4a2.5 2.5 0 110-5h1V6h2z" />
    </Svg>
  );
}

export default SvgRefund2Line;
