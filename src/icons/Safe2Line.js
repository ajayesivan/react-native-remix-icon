import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSafe2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.005 20.333V22h-2v-1.334l-7.418 1.237a.5.5 0 01-.582-.493V20h-4v2h-2v-2h-1a1 1 0 01-1-1V4a1 1 0 011-1h7V1.59a.5.5 0 01.582-.493L21.17 2.86a1 1 0 01.836.986V6h1v2h-1v7h1v2h-1v2.153a1 1 0 01-.836.986l-1.164.194zM4.005 5v13h6V5h-6zm8 14.639l8-1.334V4.694l-8-1.333v16.278zm4.5-5.64c-.828 0-1.5-1.119-1.5-2.5 0-1.38.671-2.5 1.5-2.5.828 0 1.5 1.12 1.5 2.5 0 1.381-.672 2.5-1.5 2.5z" />
    </Svg>
  );
}

export default SvgSafe2Line;
