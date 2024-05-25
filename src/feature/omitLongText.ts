export const omitLongText = (text: string, length: number) => {
  // 改行(\n)が三回以上ある場合、最初の２回目の改行までを表示し、３行目は省略記号(...)を表示する関数を作成してください。
  if (!text) return null
  const breakCount = text.split('\n').length
  if (breakCount >= 3) {
    const lines = text.split('\n')
    return lines.slice(0, 3).join('\n') + '...'
  }

  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}
