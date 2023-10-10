/* eslint-disable no-mixed-spaces-and-tabs */
import { FC, useState } from "react";
import { Button, Field, Input } from "@fluentui/react-components";
import { Eye24Regular, EyeOff24Regular } from "@fluentui/react-icons";

interface IInputForm {
	name: string;
	label: string;
	value: string;
	error?: string;
	touched?: boolean;
	required?: boolean;
	className?: string;
	placeholder: string;
	type: "text" | "password";
	onBlur?: React.FocusEventHandler<HTMLDivElement> | undefined;
	onChange?: React.FormEventHandler<HTMLDivElement> | undefined;
}

export const InputForm: FC<IInputForm> = ({
	type,
	name,
	label,
	error,
	touched,
	required,
	className,
	placeholder,

	value,
	onBlur,
	onChange,
}) => {
	const [hidePassword, setHidePassword] = useState<boolean>(true);

	const onChangeHide = () => {
		setHidePassword((_val) => {
			return !_val;
		});
	};

	return (
		<Field
			label={label}
			required={required}
			className={className}
			validationMessage={error && touched ? error : ""}
			validationState={error && touched ? "error" : "none"}
		>
			<Input
				{...(type === "password"
					? {
							contentAfter: (
								<Button
									onClick={onChangeHide}
									appearance="transparent"
									icon={hidePassword ? <EyeOff24Regular /> : <Eye24Regular />}
								/>
							),
					  }
					: {})}
				type={
					type === "text" ? "text" : hidePassword === true ? "password" : "text"
				}
				name={name}
				value={value}
				onBlur={onBlur}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</Field>
	);
};
