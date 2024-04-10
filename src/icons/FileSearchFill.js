import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileSearchFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm-2.471 12.446l2.21 2.21 1.415-1.413-2.21-2.21a4.001 4.001 0 00-6.276-4.861 4 4 0 004.861 6.274zm-.618-2.032a2 2 0 11-2.828-2.828 2 2 0 012.828 2.828z" />
    </Svg>
  );
}

export default SvgFileSearchFill;
