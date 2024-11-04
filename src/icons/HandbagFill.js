import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHandbagFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2a7 7 0 017 7h1.074a1 1 0 01.997.923l.846 11a1 1 0 01-.92 1.074L20.92 22H3.08a1 1 0 01-1-1l.003-.077.846-11A1 1 0 013.926 9H5a7 7 0 017-7zm2 11h-4v2h4v-2zm-2-9a5 5 0 00-4.995 4.783L7 9h10a5 5 0 00-4.783-4.995L12 4z" />
    </Svg>
  );
}

export default SvgHandbagFill;
