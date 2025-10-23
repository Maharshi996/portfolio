import sanity from "../lib/sanity";

export const fetchSanityData = async () => {
  return await sanity.fetch(`*[_type=="portfolioVersions" && active == true]`);
};

export const getFileUrl = (asset) => {
  if (!asset || !asset._ref) {
    return null;
  }

  const ref = asset._ref;
  const [type, id, extension] = ref.split("-");

  if (type !== "file" || !id || !extension) {
    return null;
  }

  return `https://cdn.sanity.io/files/${sanity.config().projectId}/${
    sanity.config().dataset
  }/${id}.${extension}`;
};
