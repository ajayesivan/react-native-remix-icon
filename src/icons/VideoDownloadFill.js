import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVideoDownloadFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16 4a1 1 0 011 1v4.2l5.213-3.65a.5.5 0 01.787.41v12.08a.5.5 0 01-.787.41L17 14.8V19a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1h14zm-6 4H8v4H5l4 4 4-4h-3V8z" />
    </Svg>
  );
}

export default SvgVideoDownloadFill;
