import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAdvertisementFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zM9.399 8h-2l-3.2 8h2.154l.4-1h3.29l.4 1h2.155L9.399 8zM19 8h-2v2h-1a3 3 0 00-.176 5.995L16 16h3V8zm-2 4v2h-1l-.117-.007a1 1 0 010-1.986L16 12h1zm-8.601-1.115L9.244 13H7.552l.847-2.115z" />
    </Svg>
  );
}

export default SvgAdvertisementFill;
