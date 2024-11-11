export const isValidEmail = (email: string) => {
  const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  return emailRegex.test(email);
};

export const isValidStringLength = (str: string, minLength: number = 8, maxLength: number = 64) => {
  const length = str.length;

  return length >= minLength && length <= maxLength;
};
