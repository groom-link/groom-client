import colors from '../../../../styles/colors';

const RadioOff = ({
  className,
  width = '40px',
  height = '40px',
  color = colors.grayScale.gray02
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
    </svg>
  );
};

export default RadioOff;
