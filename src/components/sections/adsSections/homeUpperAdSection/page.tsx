import React from 'react'

const page = () => {
  return (
<>
<section className="w-full mt-16 px-4 md:px-16 lg:px-24">
  <div className=" rounded-2xl p-8 md:p-12 text-center shadow-lg border border-gray-700">
    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
      📢 Sponsored Airdrop Alert
    </h2>
    <p className="text-gray-300 text-base md:text-lg mb-6 max-w-3xl mx-auto">
      Discover <strong>exclusive airdrops</strong> and early-access opportunities from top-tier Web3 projects in <strong>DeFi</strong>, <strong>AI</strong>, and <strong>Solana</strong>. Stay ahead, earn more.
    </p>

    <div className="bg-[#111827] rounded-xl p-6 md:p-8 border border-gray-600 shadow-inner hover:shadow-xl transition">
      <h3 className="text-xl md:text-2xl font-semibold text-green-400 mb-2">
        🌟 Project Nebula Airdrop – Claim Now
      </h3>
      <p className="text-gray-400 text-sm md:text-base mb-4">
        A next-gen DePIN protocol rewarding early adopters. Up to <strong>10,000 NEB</strong> tokens for early signups. Backed by top VCs.
      </p>
      <a
        href="https://sponsor-website.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
      >
        Claim Airdrop
      </a>
    </div>

    <p className="text-gray-500 text-xs mt-6">
      ⚠️ This is a sponsored listing. Do your own research before participating.
    </p>
  </div>
</section>
</>
  )
}

export default page





