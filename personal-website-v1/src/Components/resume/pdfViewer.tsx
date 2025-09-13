import React from "react";
import { Box } from "@mui/material";

export default function PdfViewer(props: any) {
  const { fileUrl } = props;
  if (!fileUrl) return <p>Loading PDF...</p>;
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "70vw",
        height: "80vh",
        bgcolor: "background.paper",
        borderRadius: "8px",
        border: "1px solid #ccc",
        // bgcolor:
        //   "linear-gradient(to right, rgba(215, 202, 202, 0), rgb(0, 0, 0))",
        boxShadow: 24,
        p: 4,
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
  );
}
