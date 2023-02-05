import { Box, Container, Grid, HStack } from "@chakra-ui/layout";
import { CalculatorButton } from "../Buttons/CalculatorButton";
import { CalculatorScreen } from "./CalculatorScreen";
import { Icon } from "@iconify/react";

interface CalculatorProps {}

export function Calculator({}: CalculatorProps) {
	return (
		<Container bg="pink.100" padding={10} borderRadius={10}>
			<CalculatorScreen></CalculatorScreen>
			<Box mt="5">
				<HStack>
					<Grid templateColumns="repeat(3, 1fr)" gap={2} flex={1}>
						<CalculatorButton
							variant="special"
							icon="ph:backspace-thin"></CalculatorButton>
						<CalculatorButton variant="special">AC</CalculatorButton>
						<span></span>
						<CalculatorButton>7</CalculatorButton>
						<CalculatorButton>8</CalculatorButton>
						<CalculatorButton>9</CalculatorButton>
						<CalculatorButton>4</CalculatorButton>
						<CalculatorButton>5</CalculatorButton>
						<CalculatorButton>6</CalculatorButton>
						<CalculatorButton>1</CalculatorButton>
						<CalculatorButton>2</CalculatorButton>
						<CalculatorButton>3</CalculatorButton>
						<CalculatorButton>.</CalculatorButton>
						<CalculatorButton>0</CalculatorButton>
						<CalculatorButton>%</CalculatorButton>
					</Grid>
					<Grid templateColumns="repeat(2, 1fr)" gap={2} alignSelf={"end"}>
						<CalculatorButton
							variant="operation"
							icon="ph:divide-thin"></CalculatorButton>
						<CalculatorButton
							variant="operation"
							icon="iwwa:square-root"></CalculatorButton>
						<CalculatorButton
							variant="operation"
							icon="uit:multiply"></CalculatorButton>
						<CalculatorButton variant="operation">X²</CalculatorButton>
						<CalculatorButton
							variant="operation"
							icon="ph:minus-thin"></CalculatorButton>
						<CalculatorButton
							icon="ph:equals-thin"
							variant="special"
							gridRow={"span 2"}
							gridColumn={2}
							h={"full"}></CalculatorButton>
						<CalculatorButton
							variant="operation"
							icon="ph:plus-thin"></CalculatorButton>
					</Grid>
				</HStack>
			</Box>
		</Container>
	);
}
