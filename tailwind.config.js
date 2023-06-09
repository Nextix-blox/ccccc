/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				pageGreen: "#00D00F",
				pageBlue: "#4375FE",
				pageLightBlue: "#1EB9FF",
				pagePink: "#FF2978",
				pageRed: "#FE343A",
				pageOrange: "#FE9D43",
				pageBg: "#F3F5F7",
				pageBlack: "#2B2B2B",
				blurImg: "#97adb5",
				heroBannerBG: "#E8ECF1",
				heroTextGrey: "#7E7E7E",
				timeDone: "#9D9D9D",
				counterRed: "#FF294A",
				articleGrey: "#555555",
			},
			spacing: {
				formButton: "0.938rem",
				spacing30: "1.875rem",
				spacing34: "2.125rem",
				spacing40: "2.5rem",
				spacing50: "3.125rem",
				spacing60: "3.75rem",
				spacing70: "4.375rem",
				spacing100: "6.25rem",
				switcherHeight: "3.75rem",
				secondaryHeight: "2.5rem",
				inputSwitcherHeight: "80%",
				inputSwitcherWidth: "99%",
				messageW: "41.25rem",
				messageH: "20.5rem",
				agreementW: "62.5rem",
				agreementH: "44.5rem",
				profileInfoW: "41.25rem",
				profileInfoH: "43.31rem",
			},
			padding: {
				"1/3": "33.33333%",
				"2/3": "66.66667%",
			},
			maxWidth: {
				max100: "6.25rem",
				agreementW: "62.5rem",
			},
			maxHeight: {
				max100: "6.25rem",
				agreementW: "62.5rem",
			},
			gridTemplateColumns: {
				mobile: "1rem 1fr 1rem",
				desktop: "6.25rem 1fr 6.25rem",
			},
			gridTemplateRows: {
				default: "auto 1fr auto",
			},
			lineHeight: {
				12: "3rem",
				title: "3.25rem",
			},
			backgroundImage: {
				discord: "linear-gradient(180deg, #7F89FF 0%, #5864F5 99.58%)",
				twitter: "linear-gradient(180deg, #1EB9FF 0%, #00ADFB 99.58%)",
				yt: "linear-gradient(180deg, #FF4141 0%, #FF0000 99.58%)",
				roblox: "linear-gradient(180deg, #83f274 0%, #33d61e 99.58%)",
				gradientBottom: "linear-gradient(90deg, rgba(208,208,208,1) 0%, rgba(249,249,249,0) 60%)",
			},
			fontSize: {
				size18: "1.125rem",
				size22: "1.375rem",
				size24: "1.5rem",
				size26: "1.625rem",
				size28: "1.75rem",
				size34: "2.125rem",
				size36: "2.25rem",
				size38: "2.125rem",
				size40: "2.5rem",
				size50: "3.125rem",
				size70: "4.375rem",
			},
			boxShadow: {
				boxL: "inset 49px 0px 59px 43px rgba(218, 221, 228, 1);",
				monsters: "0px 0px 30px 5px rgba(54, 70, 76, 1);",
				monstersInner: "inset 1px 0px 100px 6px rgba(73, 97, 105, 1);",
				default: "0px 5px 100px 40px rgba(54, 70, 76, 0.3);",
				glowGreen: "0px 3px 6px rgba(54, 70, 76, 0.15), 0px 0px 20px 5px rgba(0, 208, 15, 0.4);",
				glowPink: "0px 5px 10px rgba(54, 70, 76, 0.05), 0px 0px 20px 4px rgba(255, 41, 120, 0.5);",
				glowBlue: "0px 5px 10px rgba(54, 70, 76, 0.05), 0px 0px 20px 4px rgba(67, 117, 254, 0.5);",
				glowLightBlue: "0px 3px 6px rgba(54, 70, 76, 0.15), 0px 0px 10px 3px rgba(0, 173, 251, 0.3);",
				glowOrange: "0px 0px 35px 5px rgba(254, 157, 67, 0.5), 0px 5px 10px rgba(54, 70, 76, 0.05);",
				glowRed: "0px 3px 6px rgba(54, 70, 76, 0.15), 0px 0px 10px 3px rgba(255, 0, 0, 0.3);",
				joinCommunity: "0px 0px 30px 5px rgba(54, 70, 76, 0.15);",
				hideText: "0px -18px 48px 0px rgba(170, 177, 177, 1);",
			},
			dropShadow: {
				monsters: "0 15px 30px 5px rgba(54,70,76,0.30);",
			},
			scale: {
				130: "1.30",
				135: "1.35",
			},
			borderRadius: {
				blog: "35px",
			},
		},
	},
	plugins: [],
};
