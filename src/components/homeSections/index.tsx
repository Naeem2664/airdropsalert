"use client";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import Featured from "@/components/homeSections/featured/index";
import Potentials from "@/components/homeSections/potentials/index";
import Upcoming from "@/components/homeSections/upcoming/index";

export default function Home() {
  const [searchActive, setSearchActive] = useState("featured");

  const homeLinks = [
    { name: "Featured", href: "featured" },
    { name: "Potentials", href: "potentials" },
    { name: "Upcoming", href: "upcoming" },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            maxWidth: "1200px",
            px: 2,
          }}
        >
          <nav style={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                py: 4,
              }}
            >
              {homeLinks.map((link) => (
                <Button
                  onClick={() => setSearchActive(link.href)}
                  key={link.href}
                  id={link.href}
                  sx={{
                    px: 3,
                    py: 1,
                    mx: 1,
                    color: searchActive === link.href ?"#10B981": "white",
                    fontSize: "1rem",
                    position: "relative",
                    textTransform: "none",
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: searchActive === link.href ? "80%" : "0%",
                      height: "2px",
                      backgroundColor: "#10B981",
                      transition: "width 0.3s ease, background-color 0.3s ease",
                    },
                    "&:hover": {
                      "&:after": {
                        width: "80%",
                        backgroundColor:"#10B981",
                      }
                    }
                  }}
                >
                  {link.name}
                </Button>
              ))}
            </Box>
          </nav>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {searchActive === "featured" && <Featured />}
        {searchActive === "potentials" && <Potentials />}
        {searchActive === "upcoming" && <Upcoming />}
      </Box>
    </>
  );
}