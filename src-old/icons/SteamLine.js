import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSteamLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17 4a5 5 0 11-.892 9.92l-2.651 1.989A3.999 3.999 0 019.5 20.5a3.999 3.999 0 01-3.966-4.524L1.708 14.43l.75-1.854 3.826 1.545a3.996 3.996 0 013.696-1.592l2.042-3.061A5 5 0 0117 4zM9.5 14.5c-.464 0-.892.158-1.231.424l1.606.649a1 1 0 11-.75 1.854L7.52 16.78a2.001 2.001 0 003.981-.279 2 2 0 00-2-2zm3.364-2.69l-.983 1.476c.284.21.54.458.758.735l1.36-1.02a5.056 5.056 0 01-1.135-1.191zM17 6a3 3 0 100 6 3 3 0 000-6zm0 1a2 2 0 11.001 3.999A2 2 0 0117 7z" />
    </Svg>
  );
}

export default SvgSteamLine;
