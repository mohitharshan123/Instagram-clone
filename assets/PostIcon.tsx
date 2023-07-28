import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const PostIcon: React.FC<any> = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Rect
      width={20}
      height={20}
      x={2}
      y={2}
      stroke="#fff"
      strokeWidth={1.8}
      rx={5}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.8}
      d="M12.1 6.9v10.2M6.9 11.8h10.2"
    />
  </Svg>
);
export default PostIcon;
