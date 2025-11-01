import { Box, Typography, Dialog, IconButton } from "@mui/material";
import React from "react";
import { urlFor } from "../../utils-sanity/imageBuilder.js";
import ListOfExperiences from "./ListOfExperiences.tsx";
import { PortableText } from "@portabletext/react";
import { useDeviceType } from "../../utils/compatible.ts";

function Experience(item: any) {
  const [content, setContent] = React.useState<any[]>([]);
  const [open, setOpen] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const { isMobile } = useDeviceType();

  // Initialize with first experience content so it's not empty by default
  React.useEffect(() => {
    const first = item?.experience?.[0]?.richDescription;
    if (first && (!content || content.length === 0)) {
      setContent(first);
    }
  }, [item?.experience]);

  // Shared styles and renderer to keep things DRY
  const scrollbarStyles = {
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "violet",
      borderRadius: "10px",
    },
    "&::-webkit-scrollbar": {
      width: isMobile ? "1.2vw" : "0.3vw",
    },
  } as const;

  const renderRichContent = () => (
    <PortableText
      value={content}
      components={{
        block: ({ children }) => (
          <Typography
            sx={{
              color: "white",
            }}
          >
            {children}
          </Typography>
        ),
      }}
    />
  );

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: isMobile ? "100%" : " 35% 65%",
        height: "fit-content",
        gap: "3vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4vw",
        }}
        key={item?.companyName}
      >
        <Box sx={{ display: "flex", gap: "2vw", alignItems: "center" }}>
          <Box
            component="img"
            src={urlFor(item?.images?.[0]?.asset?._ref).url()}
            alt={`${item?.companyName}-photo`}
            sx={{
              width: isMobile ? "15vw" : "5vw",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: isMobile ? "flex-start" : "center",
              flexDirection: "column",
              color: "white",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: isMobile ? "4.5vw" : "1.5vw",
                fontWeight: "bold",
                marginTop: "1vw",
              }}
            >
              {item?.companyName}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "1vw",
              }}
            >
              <Typography
                sx={{
                  fontSize: isMobile ? "3vw" : "1.5vw",
                }}
              >
                {` From ${item?.startDate} - `}
              </Typography>
              {item?.present ? (
                <Typography sx={{ fontSize: isMobile ? "3vw" : "1.5vw" }}>
                  Present
                </Typography>
              ) : (
                <Typography sx={{ fontSize: isMobile ? "3vw" : "1.5vw" }}>
                  {item?.endDate}
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
        <ListOfExperiences
          experiences={item?.experience}
          setClicked={setClicked}
          onSelectExperience={(rich: any) => {
            setContent(rich);
            if (isMobile && clicked) setOpen(true);
          }}
        />
      </Box>
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "start",
            marginX: "3vw",
            padding: "1vw 2vw",
            color: "white",
            maxHeight: "28vw",
            backdropFilter: "blur(0.08vw)",
            overflowY: "auto",
            ...scrollbarStyles,
          }}
        >
          {renderRichContent()}
        </Box>
      )}

      {isMobile && (
        <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              position: "relative",
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.8)",
              padding: "4vw",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <IconButton
              aria-label="close"
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                top: "2vw",
                right: "2vw",
                color: "white",
              }}
            >
              <Typography sx={{ fontSize: "6vw", lineHeight: 1 }}>×</Typography>
            </IconButton>

            <Box
              sx={{
                marginTop: "8vw",
                color: "white",
                overflowY: "auto",
                ...scrollbarStyles,
              }}
            >
              {renderRichContent()}
            </Box>
          </Box>
        </Dialog>
      )}
    </Box>
  );
}

export default Experience;
