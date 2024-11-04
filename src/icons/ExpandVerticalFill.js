import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExpandVerticalFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 .5l4.95 4.95L13 5.447V10h-2V5.448l-3.948-.001L12 .5zM11 14v4.55H7.05L12 23.5l4.95-4.95H13V14h-2z" />
    </Svg>
  );
}

export default SvgExpandVerticalFill;
