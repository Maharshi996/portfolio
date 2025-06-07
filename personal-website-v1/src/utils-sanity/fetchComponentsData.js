import sanity from "../lib/sanity";

export const fetchSanityData = async () => {
  return await sanity.fetch(`*[_type=="portfolioVersions" && active == true]`);
};
