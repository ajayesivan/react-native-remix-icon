import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUploadCloudFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 20.981a6.5 6.5 0 01-2.936-12 8.001 8.001 0 0115.872 0 6.5 6.5 0 01-2.936 12V21H7v-.019zM13 13h3l-4-5-4 5h3v4h2v-4z" />
    </Svg>
  );
}

export default SvgUploadCloudFill;
