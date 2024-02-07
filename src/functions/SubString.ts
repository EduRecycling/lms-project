function SubString(text: string, maxLenght: number) {
  return text.length < maxLenght ? text : `${text.substring(0, maxLenght)} ...`;
}

export default SubString;
