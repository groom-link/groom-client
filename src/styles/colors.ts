const colors = {
  grayScale: {
    white: '#FFFFFF',
    gray01: '#F2F4F8',
    gray02: '#DDE1E6',
    gray03: '#A2A9B0',
    gray04: '#697077',
    gray05: '#343A3F',
    gray06: '#121619'
  },
  mainColor: {
    purple: '#AE71FF',
    purpleLight: '#DABDFF',
    navy: '#50539F',
    navyLight: '#8689C7'
  },
  etcColor: {
    alertRed: '#FF655C',
    dim: '#343A3F' // alpha 0.6
  },
  toDoColor: {
    redText: '#D9484E',
    red: '#F7C8CB',
    redLight: '#FCEEEF',
    greenText: '#56AE6F',
    green: '#B4E2C2',
    greenLight: '#ECF9F0',
    orangeText: '#FF8452',
    orange: '#FCCEBC',
    orangeLight: '#FCF2EE',
    gray: '#CCCCE4',
    grayLight: '#E7E7EE'
  }
} as const;

export default colors;
