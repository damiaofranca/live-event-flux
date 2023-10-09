import { Card, Form } from "antd";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	height: 100vh;
	align-items: center;
	justify-content: center;

	background-color: #edf7f6;
`;

export const CardCustom = styled(Card)`
	width: 500px;

	@media screen and (max-width: 620px) {
		width: 100%;
		max-width: calc(100% - 40px);
	}
`;

export const FormItem = styled(Form.Item)`
	margin-bottom: 20px;
`;

export const CardHeader = styled.div`
	display: flex;
	justify-content: center;
`;

export const ContainerLink = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;
