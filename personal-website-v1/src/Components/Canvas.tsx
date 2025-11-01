import React, { useEffect, useContext } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
import { urlFor } from "../utils-sanity/imageBuilder";
import Seperator from "./seperator.tsx";
import { handleSroll } from "./helpers/goToComponent.ts";
import { PageContext } from "../Context/pageContext.ts";
import PdfViewer from "../Components/resume/pdfViewer.tsx";
import { getFileUrl } from "../utils-sanity/fetchComponentsData.js";
import { useDeviceType } from "../utils/compatible.ts";

const RESUME_BUTTON_URL = "display-resume";

function Canvas(props: any) {
  const { longDescription, shortDescription, name, buttons, images, id } =
    props?.data;
  const { renderResume, setRenderResume } = useContext(PageContext) || {};
  const [openResume, setOpenResume] = React.useState(false);
  const { isMobile, isTablet, isDesktop } = useDeviceType();

  useEffect(() => {
    if (!buttons || buttons.length === 0 || !setRenderResume) return;

    const pdfButtons = buttons.filter(
      (button: any) => button?.url === RESUME_BUTTON_URL && button?.pdfFile
    );

    if (pdfButtons.length > 0) {
      const url = getFileUrl(pdfButtons[0]?.pdfFile?.asset);
      setRenderResume({ fileUrl: url });
    }
  }, [buttons, PageContext, setRenderResume]);

  const handleClick = () => setOpenResume(true);

  return (
    <Box id={id}>
      <Box
        sx={{
          display: isMobile || isTablet ? "flex" : "grid",
          flexDirection: isMobile || isTablet ? "column-reverse" : "unset",
          alignItems: isMobile || isTablet ? "center" : "unset",
          gridTemplateColumns: "60% 40%",
          height: "fit-content",
          gap: isMobile ? "10vw" : isTablet ? "3vw" : "3vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "left",
            height: "100%",
            gap: isMobile ? "5vw" : isTablet ? "2vw" : "5vw",
            padding: isMobile
              ? "8vw 8vw 10vw "
              : isTablet
              ? "0 8vw 6vw"
              : " 4vw 8vw",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              gap: isMobile ? "3vw" : isTablet ? "2vw" : "3vw",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile || isTablet ? "center" : "left",
                height: "fit-content",
                alignItems: "baseline",
                gap: "1vw",
              }}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontFamily: " IBM Plex Mono, monospace",
                  fontSize: isMobile ? "7vw" : isTablet ? "5vw" : "4vw",
                }}
              >
                {shortDescription}
              </Typography>
              <Box
                sx={{
                  backgroundColor: "violet",
                  fontWeight: "bold",
                  height: "0.5vw",
                  width: "0.5vw",
                  borderRadius: "50%",
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: isMobile || isTablet ? "center" : "left",
                gap: "4vw",
              }}
            >
              {isDesktop && (
                <Box
                  sx={{
                    width: "15vw",
                    height: "0.3vw",
                    backgroundColor: "violet",
                  }}
                />
              )}
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  textAlign: "center",
                  letterSpacing: "0.3vw",
                  fontSize: isMobile ? "8vw" : isTablet ? "5vw" : "3vw",
                }}
              >
                {name}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#FFFFFF",
                textAlign: isMobile || isTablet ? "center" : "left",
                fontSize: isMobile ? "4vw" : isTablet ? "2vw" : "1.3vw",
                fontFamily: "IBM Plex Mono, monospace",
              }}
            >
              {longDescription}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile || isTablet ? "center" : "left",
                gap: isMobile || isTablet ? "5vw" : "2vw",
                marginTop: isMobile ? "5vw" : isTablet ? "2vw" : "unset",
              }}
            >
              {buttons?.map((button: any, idx: number) => {
                const isResumeButton = button?.url === RESUME_BUTTON_URL;
                return (
                  <Button
                    key={idx}
                    variant="contained"
                    color={button?.variant}
                    data-e2e={button?.url}
                    onClick={
                      isResumeButton
                        ? () => handleClick()
                        : (e) => handleSroll(e)
                    }
                    sx={{
                      borderRadius: "0px",
                      fontSize: isMobile ? "3vw" : isTablet ? "1.8vw" : "unset",
                    }}
                  >
                    {button.label}
                  </Button>
                );
              })}
            </Box>
          </Box>
        </Box>
        {renderResume && openResume && (
          <Modal
            open={openResume}
            onClose={() => setOpenResume(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              padding: "0vw",
            }}
          >
            <PdfViewer {...renderResume} />
          </Modal>
        )}
        <Box
          sx={{
            position: "relative",
            width: isMobile || isTablet ? "50vw" : "35vw",
            height: isMobile || isTablet ? "50vw" : "33vw",
            display: "flex",
            alignItems: isMobile || isTablet ? "center" : "unset",
            justifyContent: isMobile || isTablet ? "center" : "unset",
            marginTop: isMobile ? "15vw" : isTablet ? "5vw" : "unset",
          }}
        >
          <Box
            component="img"
            src={urlFor(images?.[0]?.asset?._ref).url()}
            alt="Maharshi-photo"
            sx={{
              height: isMobile ? "50vw" : isTablet ? "40vw" : "27vw",
              width: isMobile ? "50vw" : isTablet ? "40vw" : "27vw",
              objectFit: isMobile || isTablet ? "cover" : "contain",
              position: isMobile || isTablet ? "unset" : "absolute",
              border: "1px solid purple",
              backdropFilter: "blur(10px)",
              borderRadius: "50%",
              boxShadow: "0px 0px 50px rgba(255, 255, 255, 0.5)",
              top: isMobile || isTablet ? "5vw" : "5vw",
              left: isMobile || isTablet ? "5vw" : "1vw",
            }}
          />
        </Box>
      </Box>
      <Seperator />
    </Box>
  );
}

export default Canvas;
