import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShareFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.576 17.271l-5.11-2.787a3.5 3.5 0 110-4.968l5.11-2.787a3.5 3.5 0 11.958 1.755l-5.11 2.787a3.514 3.514 0 010 1.457l5.11 2.788a3.5 3.5 0 11-.958 1.755z" />
    </Svg>
  );
}

export default SvgShareFill;
