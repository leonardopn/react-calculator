import { extendTheme } from "@chakra-ui/react";

const global = {
	body: {
		minHeight: "100vh",
		bg: "gray.100",
	},
};

const theme = extendTheme({ styles: { global } });

export default theme;
