import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCopilotLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.4 7.8c0-2.088 1.178-3 3.172-3 1.196 0 2.129.264 2.129 1.6 0 1.814-.575 3.75-2.7 3.75-1.229 0-1.798-.176-2.09-.424-.247-.21-.51-.67-.51-1.926zm3.172-5C5.497 2.8 3.4 4.626 3.4 7.8c0 .999.137 1.89.53 2.605l-.183.364a6.263 6.263 0 00-1.425 1.107c-1.061 1.126-.973 2.389-.973 3.824 0 2.267 2.512 3.62 4.315 4.373 2.133.89 4.677 1.427 6.336 1.427 1.658 0 4.202-.537 6.335-1.427 1.803-.753 4.315-2.106 4.315-4.373 0-1.435.088-2.698-.973-3.824a6.265 6.265 0 00-1.425-1.107l-.182-.364c.392-.716.53-1.606.53-2.605 0-3.174-2.097-5-5.172-5-1.24 0-2.618.259-3.428 1.283C11.19 3.059 9.813 2.8 8.57 2.8zM8 12.15c1.692 0 3.224-.815 4-2.334.775 1.519 2.307 2.334 4 2.334.894 0 1.769-.074 2.517-.38.511.596 1.17.911 1.705 1.478.639.678.428 1.585.428 2.452 0 1.272-2.166 2.143-3.086 2.527-1.942.81-4.223 1.273-5.565 1.273-1.341 0-3.623-.463-5.565-1.273-.919-.384-3.085-1.255-3.085-2.527 0-.867-.21-1.774.428-2.452.56-.594 1.341-.75 1.705-1.478.748.306 1.623.38 2.518.38zm5.3-5.75c0-1.336.932-1.6 2.128-1.6 1.994 0 3.171.912 3.171 3 0 1.257-.263 1.715-.51 1.926-.292.248-.861.424-2.09.424-2.125 0-2.7-1.936-2.7-3.75zm-4.638 8.084a1.001 1.001 0 112.002 0v1.997a1.001 1.001 0 11-2.002 0v-1.997zm6.675 0a1.001 1.001 0 10-2.003 0v1.997a1.001 1.001 0 102.003 0v-1.997z" />
    </Svg>
  );
}

export default SvgCopilotLine;
