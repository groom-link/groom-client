import colors from '../../../../styles/colors';

const Upload = ({
  className,
  width = '40px',
  color = colors.grayScale.gray06
}: IconProps) => {
  return (
    <svg
      {...{ className, width }}
      height="100%"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1316_27326)">
        <path
          d="M37.5837 23.4167V34.75C37.5837 35.1257 37.4344 35.4861 37.1687 35.7517C36.9031 36.0174 36.5427 36.1667 36.167 36.1667H7.83366C7.45794 36.1667 7.0976 36.0174 6.83192 35.7517C6.56625 35.4861 6.41699 35.1257 6.41699 34.75V23.4167C6.41699 23.041 6.56625 22.6806 6.83192 22.4149C7.0976 22.1493 7.45794 22 7.83366 22C8.20938 22 8.56972 22.1493 8.83539 22.4149C9.10107 22.6806 9.25033 23.041 9.25033 23.4167V33.3333H34.7503V23.4167C34.7503 23.041 34.8996 22.6806 35.1653 22.4149C35.4309 22.1493 35.7913 22 36.167 22C36.5427 22 36.9031 22.1493 37.1687 22.4149C37.4344 22.6806 37.5837 23.041 37.5837 23.4167ZM22.0003 30.5C22.376 30.5 22.7364 30.3508 23.0021 30.0851C23.2677 29.8194 23.417 29.4591 23.417 29.0833V12.6698L26.6654 15.9183C26.9326 16.1763 27.2904 16.3191 27.6619 16.3159C28.0333 16.3127 28.3887 16.1637 28.6513 15.901C28.914 15.6383 29.063 15.283 29.0662 14.9116C29.0694 14.5401 28.9266 14.1823 28.6686 13.9151L23.0019 8.24843C22.7362 7.98285 22.376 7.83365 22.0003 7.83365C21.6247 7.83365 21.2644 7.98285 20.9987 8.24843L15.3321 13.9151C15.1968 14.0458 15.0888 14.2021 15.0146 14.3749C14.9404 14.5478 14.9013 14.7337 14.8996 14.9218C14.898 15.1099 14.9338 15.2964 15.0051 15.4705C15.0763 15.6446 15.1815 15.8028 15.3145 15.9358C15.4475 16.0688 15.6057 16.174 15.7798 16.2453C15.9539 16.3165 16.1405 16.3523 16.3286 16.3507C16.5167 16.3491 16.7026 16.31 16.8754 16.2357C17.0482 16.1615 17.2046 16.0536 17.3352 15.9183L20.5837 12.6698V29.0833C20.5837 29.4591 20.7329 29.8194 20.9986 30.0851C21.2643 30.3508 21.6246 30.5 22.0003 30.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1316_27326">
          <rect width="44" height="44" rx="2" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Upload;