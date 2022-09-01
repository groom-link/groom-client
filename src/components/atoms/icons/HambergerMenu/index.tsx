import colors from '../../../../styles/colors';

const HambergerMenu = ({
  className,
  width = '40px',
  color = colors.grayScale.gray05
}: IconProps) => {
  return (
    <svg
      {...{ className, width }}
      height="100%"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1665 13.3333C11.1665 13.046 11.2806 12.7705 11.4838 12.5673C11.687 12.3641 11.9625 12.25 12.2498 12.25H31.7498C32.0372 12.25 32.3127 12.3641 32.5159 12.5673C32.719 12.7705 32.8332 13.046 32.8332 13.3333C32.8332 13.6207 32.719 13.8962 32.5159 14.0994C32.3127 14.3025 32.0372 14.4167 31.7498 14.4167H12.2498C11.9625 14.4167 11.687 14.3025 11.4838 14.0994C11.2806 13.8962 11.1665 13.6207 11.1665 13.3333ZM12.2498 23.0833H31.7498C32.0372 23.0833 32.3127 22.9692 32.5159 22.766C32.719 22.5629 32.8332 22.2873 32.8332 22C32.8332 21.7127 32.719 21.4371 32.5159 21.234C32.3127 21.0308 32.0372 20.9167 31.7498 20.9167H12.2498C11.9625 20.9167 11.687 21.0308 11.4838 21.234C11.2806 21.4371 11.1665 21.7127 11.1665 22C11.1665 22.2873 11.2806 22.5629 11.4838 22.766C11.687 22.9692 11.9625 23.0833 12.2498 23.0833ZM12.2498 31.75H31.7498C32.0372 31.75 32.3127 31.6359 32.5159 31.4327C32.719 31.2295 32.8332 30.954 32.8332 30.6667C32.8332 30.3794 32.719 30.1038 32.5159 29.9006C32.3127 29.6975 32.0372 29.5833 31.7498 29.5833H12.2498C11.9625 29.5833 11.687 29.6975 11.4838 29.9006C11.2806 30.1038 11.1665 30.3794 11.1665 30.6667C11.1665 30.954 11.2806 31.2295 11.4838 31.4327C11.687 31.6359 11.9625 31.75 12.2498 31.75Z"
        fill={color}
      />
    </svg>
  );
};

export default HambergerMenu;
