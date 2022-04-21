import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgThumbDownLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M9.4 16H3a2 2 0 01-2-2v-2.104a2 2 0 01.15-.762L4.246 3.62A1 1 0 015.17 3H22a1 1 0 011 1v10a1 1 0 01-1 1h-3.482a1 1 0 00-.817.423l-5.453 7.726a.5.5 0 01-.632.159L9.802 22.4a2.5 2.5 0 01-1.305-2.853L9.4 16zm7.6-2.588V5H5.84L3 11.896V14h6.4a2 2 0 011.938 2.493l-.903 3.548a.5.5 0 00.261.571l.661.33 4.71-6.672c.25-.354.57-.644.933-.858zM19 13h2V5h-2v8z" />
    </Svg>
  );
}

export default SvgThumbDownLine;
