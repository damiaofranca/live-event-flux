import { useEffect, useState } from "react";
import { Button, Form, FormInstance } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const SubmitButton = ({
	form,
	label,
	isLoading,
}: {
	form: FormInstance;
	label: string;
	isLoading?: boolean;
}) => {
	const [submittable, setSubmittable] = useState(false);

	const values = Form.useWatch([], form);

	useEffect(() => {
		form.validateFields({ validateOnly: true }).then(
			() => {
				setSubmittable(true);
			},
			() => {
				setSubmittable(false);
			},
		);
	}, [form, values]);

	return (
		<Button
			block
			type="primary"
			htmlType="submit"
			disabled={!submittable}
			className="login-form-button"
			icon={isLoading && submittable ? <LoadingOutlined /> : <></>}
		>
			{label}
		</Button>
	);
};
