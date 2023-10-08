export default function resizeImage(imageUrl: string, width: number) {
  if (imageUrl == "") {
    return '';
  }
  const url = new URL(imageUrl);
  url.searchParams.set('width', width.toString());
  return url.toString();
}