import { FC } from "react";

import {
	EyeTwoTone,
	LockOutlined,
	UserOutlined,
	EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import {
	FormItem,
	Container,
	CardCustom,
	CardHeader,
	ContainerLink,
} from "./styles";

import LogoImg from "@assets/images/logo.svg";
import { RULES } from "../../../utils/rules";
import { SubmitButton } from "@/components/SubmitButton";
import { Logo } from "@/components/Logo";
import { ILoginRequest } from "@/interfacers/auth/request/ILoginRequest";
import { useAuth } from "@/hooks.ts/useAuth";

export const SignIn: FC = () => {
	const [form] = Form.useForm();
	const { onSignIn } = useAuth();

	const onSubmit = async (values: ILoginRequest) => {
		await onSignIn(values);
	};

	return (
		<Container>
			<CardCustom>
				<CardHeader>
					<Logo src={LogoImg} alt="Live event flux" />
				</CardHeader>
				<Form name="login_form" form={form} onFinish={onSubmit}>
					<FormItem name="email" rules={RULES.EMAIL}>
						<Input
							prefix={<UserOutlined className="site-form-item-icon" />}
							placeholder="Email"
						/>
					</FormItem>
					<FormItem name="password" rules={RULES.PASSWORD}>
						<Input.Password
							type="password"
							prefix={<LockOutlined className="site-form-item-icon" />}
							placeholder="Senha"
							iconRender={(visible) =>
								visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
							}
						/>
					</FormItem>
					<ContainerLink style={{ marginBottom: 20 }}>
						Esqueceu a senha? <Link to="/forget-password">clique aqui.</Link>
					</ContainerLink>
					<FormItem>
						<SubmitButton form={form} label="Entrar" />
					</FormItem>
					<ContainerLink>
						Não têm uma conta?<Link to="/signup"> registre-se.</Link>
					</ContainerLink>
				</Form>
			</CardCustom>
		</Container>
	);
};
