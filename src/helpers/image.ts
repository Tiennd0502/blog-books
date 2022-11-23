import { ImageLoader } from '@interfaces/image';

const imageLoader = ({ src, width, quality }: ImageLoader) => {
  return `/_next/image?url=${src}&w=${width}&q=${quality || 75}`;
};

export default imageLoader;
