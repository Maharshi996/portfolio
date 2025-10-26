import { Box } from "@mui/material";
import React from "react";
import { useDeviceType } from "../../utils/compatible.ts";
import Connector from "./Connector.tsx";
import ExperienceCard from "./ExperienceCard.tsx";

function ListOfExperiences(props) {
  const { experiences, onSelectExperience, setClicked } = props;
  const { isMobile } = useDeviceType();
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  React.useEffect(() => {
    if (experiences?.length && !isMobile) {
      onSelectExperience(experiences[0]?.richDescription);
      setSelectedIndex(0);
    }
  }, [experiences, isMobile]);

  return (
    <Box
      sx={{
        color: "white",
      }}
    >
      {experiences?.map((item: any, index: number) => {
        return (
          <Box
            key={item?.role + index}
            sx={{
              display: "flex",
              alignItems: "stretch",
              marginBottom: isMobile ? "3vw" : "1.5vw",
            }}
          >
            {isMobile && (
              <Connector
                isFirst={index === 0}
                isLast={index === experiences.length - 1}
                isMobile={isMobile}
                dotSizeVw={2}
                lineWidthVw={0.5}
              />
            )}
            <ExperienceCard
              item={item}
              isMobile={isMobile}
              selected={selectedIndex === index}
              onSelect={() => {
                onSelectExperience(item?.richDescription);
                setClicked(true);
                setSelectedIndex(index);
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
}

export default ListOfExperiences;
