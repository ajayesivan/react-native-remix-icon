import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileVideoFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-1 9.667l-4.878-3.253a.4.4 0 00-.622.333v6.505a.4.4 0 00.622.333L15 12.333a.401.401 0 000-.666z" />
    </Svg>
  );
}

export default SvgFileVideoFill;
