import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMarkupFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm5.051-3.796l-.862-3.447a1 1 0 00-.97-.757H8.781a1 1 0 00-.97.757l-.862 3.447A7.967 7.967 0 0012 19.997a7.967 7.967 0 005.051-1.796zM10 11.997h4v-1.5l-1.039-3.635a1 1 0 00-1.922 0L10 10.497v1.5z" />
    </Svg>
  );
}

export default SvgMarkupFill;
