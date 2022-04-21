import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDownloadCloudLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M1 14.5a6.496 6.496 0 013.064-5.519 8.001 8.001 0 0115.872 0 6.5 6.5 0 01-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 002.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 00-11.903 0l-.12.942-.805.503a4.5 4.5 0 002.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z" />
    </Svg>
  );
}

export default SvgDownloadCloudLine;
