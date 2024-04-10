import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgThermometerLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.556 3.444a4 4 0 010 5.657l-8.2 8.2a4 4 0 01-2.386 1.147l-3.38.374-2.297 2.3a1 1 0 11-1.414-1.415l2.298-2.299.375-3.377A4 4 0 016.7 11.644l8.2-8.2a4 4 0 015.658 0zm-4.242 1.414l-8.2 8.2a2 2 0 00-.574 1.194l-.276 2.484 2.485-.276a2 2 0 001.193-.574l.422-.422L9.95 14.05l1.414-1.414 1.414 1.414 1.414-1.414-1.414-1.414 1.415-1.414 1.414 1.414 1.414-1.415-1.414-1.414L17.02 6.98l1.414 1.414.707-.707a2 2 0 00-2.828-2.828z" />
    </Svg>
  );
}

export default SvgThermometerLine;
