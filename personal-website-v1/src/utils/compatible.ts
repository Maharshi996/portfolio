import { useEffect, useState } from "react";

export function useDeviceType() {
  const getDevice = () => {
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return { isMobile: false, isDesktop: false, isSafari: false };
    }
    const width = window.innerWidth;
    const isMobile = width <= 430;
    const isTablet = width > 430 && width <= 768;
    const isDesktop = width > 768;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    return { isMobile, isTablet, isDesktop, isSafari };
  };

  const [device, setDevice] = useState(getDevice());

  useEffect(() => {
    const handleResize = () => setDevice(getDevice());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
}
