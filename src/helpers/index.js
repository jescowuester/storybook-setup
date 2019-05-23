const checkDefined = (name, prop) => {
  if (!prop) console.warn(`name is not defined!`);
};

export const get = (prop, value) => ({ theme }) => {
  if (theme && theme[prop] && value) {
    return theme[prop][value];
  }
  checkDefined('theme', theme);
  checkDefined('theme[prop]', theme[prop]);
  checkDefined('value', value);
  return undefined;
};

export const getColor = ({ theme, color }) => {
  if (theme && theme.colors && color) {
    return theme.colors[color];
  }
  checkDefined('theme', theme);
  checkDefined('theme.colors', theme.colors);
  checkDefined('color', color);
  return theme.colors.brand;
};
