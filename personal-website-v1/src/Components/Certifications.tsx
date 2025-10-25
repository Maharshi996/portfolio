import { Box, Typography } from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { urlFor } from "../utils-sanity/imageBuilder";
import Seperator from "./seperator.tsx";
import { useDeviceType } from "../utils/compatible.ts";

const Certifications = (props: any) => {
  const { images, id } = props?.data;
  const slides: { url: string; alt: string }[] = useMemo(() => {
    if (!images || !Array.isArray(images)) return [];
    return images
      .map((img: any, idx: number) => {
        if (!img) return null;
        if (typeof img === "string") {
          return { url: img, alt: `slide-${idx + 1}` };
        }
        // Prefer Sanity image reference when available
        const sanityRef = img?.asset?._ref;
        const u = sanityRef
          ? urlFor(sanityRef).url()
          : img?.url || img?.src || img?.asset?.url;
        const a = img?.alt || img?.title || `slide-${idx + 1}`;
        if (!u) return null;
        return { url: u, alt: a };
      })
      .filter(Boolean) as { url: string; alt: string }[];
  }, [images]);

  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [pausedUntil, setPausedUntil] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState(0);
  const intervalMs = 3000;

  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || (navigator as any)?.maxTouchPoints > 0);
  const isPaused = hover || pausedUntil > Date.now();

  const { isMobile, isTablet, isDesktop } = useDeviceType();
  const slideHeight = isMobile ? 220 : isTablet ? 320 : 480;
  const dotSize = isMobile ? 6 : 8;
  const dotGap = isMobile ? 6 : 8;
  const swipeThreshold = isMobile ? 40 : 60;

  // Measure container width for pixel-perfect slide sizing and drag transforms
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current)
        setContainerWidth(containerRef.current.clientWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (!slides.length || isPaused) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [slides.length, isPaused]);

  // Auto-resume when pausedUntil elapses
  useEffect(() => {
    const now = Date.now();
    if (pausedUntil > now) {
      const t = setTimeout(() => {
        // Clear pause to allow autoplay to resume
        setPausedUntil(0);
      }, pausedUntil - now);
      return () => clearTimeout(t);
    }
  }, [pausedUntil]);

  if (!slides.length) {
    return (
      <Box>
        <Typography>certifications</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Box
        sx={{
          padding: isMobile || isTablet ? "8vw 7vw" : "4vw 15vw",
        }}
        id={id}
      >
        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          ref={containerRef}
          onTouchStart={(e) => {
            if (!e.touches || !e.touches.length) return;
            setTouchStartX(e.touches[0].clientX);
            setTouchDeltaX(0);
          }}
          onTouchMove={(e) => {
            if (touchStartX == null) return;
            const currentX = e.touches[0].clientX;
            setTouchDeltaX(currentX - touchStartX);
          }}
          onTouchEnd={() => {
            if (touchStartX == null) return;
            const threshold = swipeThreshold;
            if (touchDeltaX > threshold) {
              setIndex((prev) => (prev - 1 + slides.length) % slides.length);
            } else if (touchDeltaX < -threshold) {
              setIndex((prev) => (prev + 1) % slides.length);
            }
            setTouchStartX(null);
            setTouchDeltaX(0);
          }}
          onClick={() => {
            if (isTouchDevice) {
              setPausedUntil(Date.now() + 60 * 1000);
            }
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: containerWidth ? slides.length * containerWidth : "100%",
              transform: `translate3d(${
                -(index * (containerWidth || 0)) +
                (touchStartX != null ? touchDeltaX : 0)
              }px, 0, 0)`,
              transition: touchStartX != null ? "none" : "transform 600ms ease",
              height: slideHeight,
              margin: "auto",
            }}
          >
            {slides.map((s, i) => (
              <Box
                key={`${s.url}-${i}`}
                sx={{
                  flex: containerWidth ? `0 0 ${containerWidth}px` : `0 0 100%`,
                  position: "relative",
                  height: slideHeight,
                  width: containerWidth || "100%",
                }}
              >
                <Box
                  component="img"
                  src={s.url}
                  alt={s.alt}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: 12,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: dotGap,
              bgcolor: "rgba(0,0,0,0.35)",
              borderRadius: 9999,
              px: 1,
              py: 0.5,
              my: 3,
            }}
          >
            {slides.map((_, i) => (
              <Box
                key={`dot-${i}`}
                onClick={() => {
                  setIndex(i);
                  if (isTouchDevice) setPausedUntil(Date.now() + 10 * 1000);
                }}
                sx={{
                  width: dotSize,
                  height: dotSize,
                  borderRadius: "50%",
                  cursor: "pointer",
                  bgcolor: i === index ? "#fff" : "rgba(255,255,255,0.5)",
                  transition: "background-color 200ms",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Seperator />
    </Box>
  );
};

export default Certifications;
