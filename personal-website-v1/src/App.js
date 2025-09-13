import "./App.css";
import React, { useState, useEffect } from "react";
import { PageContext } from "./Context/pageContext.ts"; // Adjust the import path as necessary
import { fetchSanityData } from "./utils-sanity/fetchComponentsData.js"; // Adjust the import path as necessary
import { renderComponent } from "./Components/index.jsx";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js"; // Adjust the import path as necessary

function App(props) {
  const [pageData, setPageData] = useState(null);
  const [renderResume, setRenderResume] = useState({});
  const [renderModel, setRenderModel] = useState({});

  const { components } = pageData || {};

  const fetchData = async () => {
    try {
      const data = await fetchSanityData();
      if (data && data.length > 0) {
        setPageData(data[0]);
      } else {
        console.error("No active portfolio versions found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  const handleMouseMove = (e) => {
    const cursor = document.querySelector(".custom-cursor");
    if (cursor) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    }
  };

  useEffect(() => {
    handleMouseMove();
    fetchData();
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  console.log("Page Data:", pageData);

  if (!pageData) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or skeleton
  }
  if (pageData.length === 0 || !pageData?.active) {
    return <div>No active portfolio versions found.</div>;
  }

  return (
    <div className="App">
      <div className="custom-cursor"></div>
      <PageContext.Provider
        value={{
          ...pageData,
          renderResume,
          setRenderResume,
          renderModel,
          setRenderModel,
        }}
      >
        <ThemeProvider theme={theme}>
          {components?.map((component, index) => {
            return renderComponent({
              type: component.variant,
              data: { ...component },
              key: index,
            });
          })}
        </ThemeProvider>
      </PageContext.Provider>
    </div>
  );
}

export default App;
