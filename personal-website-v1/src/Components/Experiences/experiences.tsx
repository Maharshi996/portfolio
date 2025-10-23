import { Box, Typography } from "@mui/material";
import Seperator from "../Seperator.tsx";
import Experience from "./experience.tsx";

function Experiences(props: any) {
  const { experience, id } = props?.data;

  return (
    <Box>
      <Box
        sx={{
          padding: "4vw 8vw",
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
