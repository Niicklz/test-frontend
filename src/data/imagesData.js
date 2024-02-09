import { cloudinaryImgURLBuilder } from "../utils/cloudinaryImgURLBuilder";

export const imagesData = [
  { section: 1, index: 1 },
  { section: 1, index: 2 },
  { section: 1, index: 3 },
  { section: 2, index: 1 },
  { section: 2, index: 2 },
  { section: 2, index: 3 },
  { section: 3, index: 1 },
  { section: 3, index: 2 },
  { section: 3, index: 3 },
].map((img) => cloudinaryImgURLBuilder(img.section, img.index));
