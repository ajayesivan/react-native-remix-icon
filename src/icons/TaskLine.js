import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTaskLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 4H5v16h14V4zM3 2.992C3 2.444 3.447 2 3.998 2H20a1 1 0 011 1v17.992A1 1 0 0120.007 22H3.993A1 1 0 013 21.008V2.992zm8.293 10.13l4.243-4.243 1.414 1.414-5.657 5.657-3.89-3.89 1.415-1.414 2.475 2.475z" />
    </Svg>
  );
}

export default SvgTaskLine;
