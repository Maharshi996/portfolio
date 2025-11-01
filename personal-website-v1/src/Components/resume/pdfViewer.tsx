import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useDeviceType } from "../../utils/compatible.ts";

export default function PdfViewer(props: any) {
  const { fileUrl } = props;
  const { isMobile, isDesktop, isTablet } = useDeviceType();

  useEffect(() => {
    if ((isMobile || isTablet) && fileUrl) {
      window.location.href = fileUrl;
    }
  }, [isMobile, fileUrl, isTablet]);
  if (!fileUrl) return <p>Loading PDF...</p>;
  return (
    <Box>
      {isDesktop && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transition: "all 0.3s ease-in-out",
            bgcolor: "background.paper",
            backdropFilter: "blur(10px)",
            width: "70vw",
            height: "80vh",
            borderRadius: "2vw",
            border: "1px solid violet",
            p: isMobile ? 0 : 4,
            zIndex: 1000,
          }}
        >
          <iframe
            src={fileUrl}
            width="100%"
            height="100%"
            style={{ border: "1px solid #ccc", borderRadius: "5px" }}
            title="PDF Viewer"
          />
        </Box>
      )}
    </Box>
  );
}
