import { Input } from "@chakra-ui/input";
import { Container, Text } from "@chakra-ui/layout";

interface CalculatorScreenProps {}

const CalculatorShadow =
	" rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset";

export function CalculatorScreen({}: CalculatorScreenProps) {
	return (
		<Container bg="white" w="full" h={20} boxShadow={CalculatorShadow} p={4} display="flex">
			<Input size="lg" variant="unstyled" mt="auto" fontWeight="bold"></Input>
		</Container>
	);
}
