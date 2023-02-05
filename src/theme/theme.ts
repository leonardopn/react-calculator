import { extendTheme } from "@chakra-ui/react";

const global = {
	body: {
		minHeight: "100vh",
		bg: "gray.100",
	},
};

const colors = {
	numberButton: {
		500: "#ffffff",
		600: "#f3f3f3",
		700: "#e6e6e6",
	},
	operationButton: {
		500: "#FBB6CE",
		600: "#F687B3",
		700: "#F35C8D",
	},
};

const theme = extendTheme({ styles: { global }, colors });

export default theme;
