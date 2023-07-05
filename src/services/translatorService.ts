export default function t(text: string, obj?: any) {
  const translationKey = `${text}`;
  if (obj !== undefined) {
    if (obj.count) return translatePlural(translationKey, obj);

    return window.Translator?.trans(translationKey, obj) || text;
  }

  return window.Translator?.trans(translationKey) || text;
}

function translatePlural(text: string, obj: any) {
  return window.Translator.transChoice(text, obj.count, obj);
}
