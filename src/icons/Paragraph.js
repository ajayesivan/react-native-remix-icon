import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgParagraph(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 6v15h-2v-5a6 6 0 110-12h10v2h-3v15h-2V6h-3zm-2 0a4 4 0 100 8V6z" />
    </Svg>
  );
}

export default SvgParagraph;
