import { Box, Typography } from "@mui/material";
import Seperator from "../seperator.tsx";
import Experience from "./experience.tsx";
import { useDeviceType } from "../../utils/compatible.ts";

function Experiences(props: any) {
  const { experience, id } = props?.data;
  const { isMobile } = useDeviceType();

  return (
    <Box>
      <Box
        sx={{
          padding: isMobile ? "8vw" : "4vw 8vw",
          display: "flex",
          flexDirection: "column",
          gap: "4vw",
        }}
        id={id}
      >
        {experience?.map((item: any, index: number) => {
          return <Experience {...item} key={item?.companyName + index} />;
        })}
      </Box>
      <Seperator />
    </Box>
  );
}

export default Experiences;
