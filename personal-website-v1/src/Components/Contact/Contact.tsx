import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import ContactForm from "./ContactForm.tsx";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Contact(props) {
  const { contact, id } = props?.data;
  const contactData = { ...contact?.[0] };
  const { tabs } = contactData;
  const [tabValue, setTabValue] = React.useState(0);

  return (
    <Box
      sx={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
      id={id}
    >
      <Tabs
        value={tabValue}
        onChange={(_event, newValue) => setTabValue(newValue)}
        aria-label="contact tabs"
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "black",
          justifyContent: "center",
        }}
      >
        {tabs?.map((tab, index) => (
          <Tab
            key={index}
            label={tab?.tabName}
            sx={{
              color: "white",
              width: "fit-content",
            }}
          />
        ))}
      </Tabs>

      {tabs?.map((tab, index) => (
        <CustomTabPanel key={index} value={tabValue} index={index}>
          <ContactForm
            id={`${id}-${tab?.tabName}`}
            buttons={tab?.buttons}
            inputFields={tab?.inputFields}
          />
        </CustomTabPanel>
      ))}
    </Box>
  );
}

export default Contact;
