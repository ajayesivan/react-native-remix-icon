import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCollageFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11.189 13.264l1.383 7.842H4a1 1 0 01-1-1V14.71l8.189-1.445zM20 3.107a1 1 0 011 1v16a1 1 0 01-1 1l-5.398-.001-3.174-18H20zM9.398 3.106l1.444 8.188L3 12.678V4.107a1 1 0 011-1l5.398-.001z" />
    </Svg>
  );
}

export default SvgCollageFill;
