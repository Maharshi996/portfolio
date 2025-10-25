import React from "react";
import { Box } from "@mui/material";
import { urlFor } from "../utils-sanity/imageBuilder.js";
import { useDeviceType } from "../utils/compatible.ts";
function SocialLinks(props: any) {
  const data = props?.data;
  const { isMobile } = useDeviceType();
  // Normalize: support either data.links (array) or data itself as a single link object
  const links = Array.isArray(data?.links)
    ? data.links
    : data && data._type === "linkWithImage"
    ? [data]
    : [];

  const normalizeHref = (path?: string) => {
    if (!path) return undefined;
    if (/^https?:\/\//i.test(path)) return path;
    return `https://${path}`;
  };

  return (
    <Box
      sx={{
        padding: isMobile ? " 8vw" : "4vw",
        display: "flex",
        justifyContent: "center",
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9))",
      }}
    >
      <Box sx={{ display: "flex", gap: 12, alignItems: "center" }}>
        {links?.map((link: any) => {
          const ref = link?.images?.[0]?.asset?._ref;
          const src = ref ? urlFor(ref).url() : undefined;
          const href = normalizeHref(link?.path);
          const alt = link?.images?.[0]?.alt || link?.label || "link";
          return (
            <Box
              key={link?._key}
              id={link?._key}
              role="link"
              aria-label={link?.label}
              tabIndex={0}
              onClick={() =>
                href && window.open(href, "_blank", "noopener,noreferrer")
              }
              sx={{
                display: "flex",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={src}
                alt={alt}
                sx={{
                  width: isMobile ? "10vw" : "3vw",
                  height: isMobile ? "10vw" : "3vw",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  padding: isMobile ? "0.5vw" : "0.3vw",
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default SocialLinks;
