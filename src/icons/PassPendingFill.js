import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPassPendingFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2 4a1 1 0 00-1 1v14a1 1 0 001 1h20a1 1 0 001-1V5a1 1 0 00-1-1H2zm7 6a1 1 0 10-2 0 1 1 0 002 0zm2 0a3 3 0 11-6 0 3 3 0 016 0zm-5.473 7.025l-1.414-1.414A5.486 5.486 0 018.003 14c1.518 0 2.894.617 3.888 1.61l-1.414 1.415A3.486 3.486 0 008.002 16c-.967 0-1.84.39-2.475 1.025zM13 15V9h2v6h-2zm4 0V9h2v6h-2z" />
    </Svg>
  );
}

export default SvgPassPendingFill;
