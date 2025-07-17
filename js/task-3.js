function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingValue = parseFloat(padding);
  const borderValue = parseFloat(border);

  const totalWidth = contentWidth + 2 * paddingValue + 2 * borderValue;
  return totalWidth;
}