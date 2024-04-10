import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgThermometerFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.556 3.444a4 4 0 010 5.657l-8.2 8.2a4 4 0 01-2.386 1.147l-3.38.374-2.297 2.3a1 1 0 11-1.414-1.415l2.298-2.299.375-3.377A4 4 0 016.7 11.644l8.2-8.2a4 4 0 015.658 0zm-9.192 9.192L9.95 14.05l2.121 2.122 1.414-1.415-2.12-2.12zm2.829-2.828l-1.415 1.414 2.122 2.121 1.414-1.414-2.121-2.121zm2.828-2.829l-1.414 1.414 2.121 2.122L19.142 9.1l-2.121-2.122z" />
    </Svg>
  );
}

export default SvgThermometerFill;
