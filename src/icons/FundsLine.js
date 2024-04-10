import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFundsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.41 14.526l3.402-3.402 2.829 2.829 3.157-3.157-1.793-1.793h5v5l-1.793-1.793-4.571 4.571-2.829-2.828-2.474 2.474a8 8 0 10-.927-1.9zm-1.537 1.558l-.01-.01.004-.004a9.965 9.965 0 01-.862-4.067c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c-4.07 0-7.57-2.43-9.132-5.919z" />
    </Svg>
  );
}

export default SvgFundsLine;
