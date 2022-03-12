export function parseText(text){
  let parsedText = text.replace(/<\/?[^>]+(>|$)/g, "");
  return parsedText
}
