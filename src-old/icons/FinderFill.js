import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFinderFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm-1 2h-8.465c-.69 1.977-1.035 4.644-1.035 8h3c-.115.92-.15 1.878-.107 2.877 1.226-.211 2.704-.777 4.027-1.71l1.135 1.665c-1.642 1.095-3.303 1.779-4.976 2.043.052.37.113.745.184 1.125H20V5zM6.555 14.168l-1.11 1.664C7.602 17.27 9.792 18 12 18v-2c-1.792 0-3.602-.603-5.445-1.832zM17 7a1 1 0 011 1v1a1 1 0 01-2 0V8a1 1 0 011-1zM7 7c-.552 0-1 .452-1 1v1a1 1 0 002 0V8a1 1 0 00-1-1z" />
    </Svg>
  );
}

export default SvgFinderFill;
