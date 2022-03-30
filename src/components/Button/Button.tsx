import { Button } from "./styles";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	variant: string;
}

const ButtonComponent = ({ children, onClick, ...props }: ButtonProps) => {
	return (
		<Button onClick={onClick} {...props}>
			{children}
		</Button>
	);
}

export default ButtonComponent;
