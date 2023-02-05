import { Button, ButtonProps } from "@chakra-ui/button";
import { Icon } from "@iconify/react";
import { ReactNode, useMemo } from "react";

interface CalculatorButtonProps extends ButtonProps {
	children?: ReactNode;
	variant?: "operation" | "number" | "special";
	icon?: string;
}

export function CalculatorButton({
	children,
	variant = "number",
	icon,
	...rest
}: CalculatorButtonProps) {
	const styleByVariant = useMemo(() => {
		switch (variant) {
			case "special":
				return {
					colorScheme: "pink",
				};
			case "operation":
				return { colorScheme: "operationButton", color: "white" };
			case "number":
				return {
					colorScheme: "numberButton",
					color: "pink.500",
				};
		}
	}, []);

	return (
		<Button fontWeight="light" {...styleByVariant} {...rest}>
			{!!icon && <Icon icon={icon} width={25} height={25}></Icon>}
			{children}
		</Button>
	);
}
