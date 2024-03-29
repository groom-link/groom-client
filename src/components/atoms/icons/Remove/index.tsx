import colors from '../../../../styles/colors';

const Remove = ({
  className,
  width = '40px',
  color = colors.grayScale.gray05
}: IconProps) => {
  return (
    <svg
      {...{ className, width }}
      height="100%"
      viewBox="0 0 44 44"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="7" y="20.5" width="30" height="3" rx="1.5" fill={color} />
    </svg>
  );
};

export default Remove;
