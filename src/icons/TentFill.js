import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTentFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.866 3l9.237 16H23v2H1v-2h.896l9.238-16a1 1 0 011.732 0zM12 12.925L8.659 19h6.682L12 12.925z" />
    </Svg>
  );
}

export default SvgTentFill;
