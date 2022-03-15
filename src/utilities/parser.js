export function parseText(text){
  const parsedText = text.replace(/<\/?[^>]+(>|$)/g, "");
  return parsedText
}
