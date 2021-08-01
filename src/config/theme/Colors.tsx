const dictionary = {
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  NAVY: '#082032',
  NAVY_LIGHT: '#334756',
  GREY: '#C4C4C4',
  GREY_LIGHT: '#D4D4D4',
  RED: '#FA0825',
  ORANGE: '#FF4C29',
  GREEN: '#32F02E',
};

const Colors = {
  ...dictionary,
  TRANSPARENT: 'rgba(0, 0, 0, 0)',
  BACKGROUND: dictionary.NAVY,
  BACKGROUND_TAB: dictionary.NAVY_LIGHT,
  PRIMARY: dictionary.NAVY,
  PRIMARY_LIGHT: dictionary.NAVY_LIGHT,
  SECONDARY: dictionary.ORANGE,
  INACTIVE: dictionary.GREY_LIGHT,
  LINE: dictionary.WHITE,
  TEXT: dictionary.WHITE,
  TEXT_SUCCESS: dictionary.GREEN,
  TEXT_DANGER: dictionary.GREEN,
};

export default Colors;
