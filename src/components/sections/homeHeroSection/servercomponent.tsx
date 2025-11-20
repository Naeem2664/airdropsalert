import React, { useMemo } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { useGetAirdrops } from "@/hooks/getAirdrops";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Discover the Latest Crypto Airdrops – AirdropX",
    description:
        "Stay ahead in Web3 with real-time updates on top airdrops from DeFi, AI, DeSci, DePIN, and Solana. Claim the latest sponsored crypto airdrops now!",
    openGraph: {
        title: "Discover the Latest Crypto Airdrops – AirdropX",
        description:
            "Stay ahead in Web3 with real-time updates on top airdrops from DeFi, AI, DeSci, DePIN, and Solana. Claim the latest sponsored crypto airdrops now!",
        url: "https://yourdomain.com/airdrops",
        siteName: "AirdropX",
        type: "website",
    },
};

const Page = () => {
    const { data: allAirdrops } = useGetAirdrops();

    const sponsoredAirdropsToShow = useMemo(() => {
        if (!allAirdrops || allAirdrops.length === 0) return [];
        return allAirdrops.filter((airdrop) => airdrop.sponsored);
    }, [allAirdrops]);

    const airdrop = sponsoredAirdropsToShow[0];

    return (
       
    );
};