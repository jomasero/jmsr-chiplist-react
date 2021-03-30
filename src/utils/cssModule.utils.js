export const getAllTheClasses = (cssModule, classNames) =>
  classNames.split(' ').reduce(
    (names, className) => {
      const transformedName = cssModule[className];
      return `${names} ${transformedName ? `${transformedName}` : `${className}`}`;
    }, '');
