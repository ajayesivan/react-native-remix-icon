import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBuilding2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 19h2V6l6.394 2.74a1 1 0 01.606.92V19h2v2H1v-2h2V5.65a1 1 0 01.594-.914l7.703-3.423a.5.5 0 01.703.456V19z" />
    </Svg>
  );
}

export default SvgBuilding2Fill;
