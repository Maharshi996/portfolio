import imageUrlBuilder from "@sanity/image-url";
import { sanity } from "../lib/sanity";

const builder = imageUrlBuilder(sanity);

export function urlFor(source) {
  return builder.image(source);
}
