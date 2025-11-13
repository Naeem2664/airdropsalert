"use client";

import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useGetAirdrops } from "@/hooks/getAirdrops";
import { useGetCategories } from "@/hooks/getCategories";
import { useGetAirdropType } from "@/hooks/getAirdropType";
import AirdropTypeSection from "@/components/homeSections/type";
import { Category } from "@/contracts/category.type";

export default function Home() {
  const [searchActive, setSearchActive] = useState<string>("");

  const { data: airdrops } = useGetAirdrops();
  const { data: categories } = useGetCategories();
  const { data: airdropTypes, isLoading, error } = useGetAirdropType();

  // Set default active tab after data is loaded
  if (!searchActive && airdropTypes && airdropTypes.length > 0) {
    setSearchActive(airdropTypes[0].name.toLowerCase());
  }

  return (
    <>
      {/* Tabs Section */}
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
              {isLoading && <p>Loading types...</p>}
              {error && <p>Failed to load types.</p>}

              {airdropTypes?.map((type: Category) => (
                <Button
                  key={type.id}
                  onClick={() => setSearchActive(type.name.toLowerCase())}
                  sx={{
                    px: 3,
                    py: 1,
                    mx: 1,
                    color:
                      searchActive === type.name.toLowerCase()
                        ? "#10B981"
                        : "white",
                    fontSize: "1rem",
                    position: "relative",
                    textTransform: "none",
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width:
                        searchActive === type.name.toLowerCase()
                          ? "80%"
                          : "0%",
                      height: "2px",
                      backgroundColor: "#10B981",
                      transition:
                        "width 0.3s ease, background-color 0.3s ease",
                    },
                    "&:hover": {
                      "&:after": {
                        width: "80%",
                        backgroundColor: "#10B981",
                      },
                    },
                  }}
                >
                  {type.name}
                </Button>
              ))}
            </Box>
          </nav>
        </Box>
      </Box>

      {/* Dynamic Airdrop Type Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {searchActive && (
          <AirdropTypeSection
            typeName={searchActive}
            airdrops={airdrops}
            categories={categories}
          />
        )}
      </Box>
    </>
  );
}
