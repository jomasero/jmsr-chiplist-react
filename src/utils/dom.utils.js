export const getACleanedTagName = (tag = 'div') => {
  const cleanTagStr = anyToCleanString(tag);
  return (validateHtmlTag(cleanTagStr)) ? cleanTagStr : 'div';
}

export const validateHtmlTag = (htmlString) => {
  const validTagExp = /^<\/?[A-Za-z]+>$/;
  return validTagExp.test(`<${anyToCleanString(htmlString)}>`);
}

export const anyToCleanString = (something) =>
  (typeof something !== 'string') ? '' : something.trim();
