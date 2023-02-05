import { Container } from "@chakra-ui/layout";
import { Calculator } from "../../components/Calculator";

export function App() {
	return (
		<Container display="flex" minH="100vh" justifyContent="center" alignItems="center">
			<Calculator></Calculator>
		</Container>
	);
}
