import colors from '../../../../styles/colors';
import { IconProps } from '../../../../types/icon';

const RadioOn = ({
  className,
  width = '40px',
  height = '40px',
  color = colors.mainColor.purple
}: IconProps) => {
  return (
    <svg
      {...{ className, width, height }}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 33C28.0751 33 33 28.0751 33 22C33 15.9249 28.0751 11 22 11C15.9249 11 11 15.9249 11 22C11 28.0751 15.9249 33 22 33ZM22 36C29.732 36 36 29.732 36 22C36 14.268 29.732 8 22 8C14.268 8 8 14.268 8 22C8 29.732 14.268 36 22 36Z"
        fill={color}
      />
      <path
        d="M29 22C29 25.866 25.866 29 22 29C18.134 29 15 25.866 15 22C15 18.134 18.134 15 22 15C25.866 15 29 18.134 29 22Z"
        fill={color}
      />
    </svg>
  );
};

export default RadioOn;
