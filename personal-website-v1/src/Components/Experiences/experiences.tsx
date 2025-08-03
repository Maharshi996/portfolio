import { Box } from "@mui/material";
import Seperator from "../Seperator.tsx";
import Experience from "./experience.tsx";

function Experiences(props) {
  const { experience, id } = props?.data;

  return (
    <Box
      sx={{
        backgroundColor: "black",
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

      <Seperator />
    </Box>
  );
}

export default Experiences;
