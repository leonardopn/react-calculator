import { Container } from "@chakra-ui/layout";
import { CalculatorScreen } from "./CalculatorScreen";

interface CalculatorProps {}

export function Calculator({}: CalculatorProps) {
	return (
		<Container bg="pink.100" padding={10} borderRadius={10} h={500}>
			<CalculatorScreen></CalculatorScreen>
		</Container>
	);
}
