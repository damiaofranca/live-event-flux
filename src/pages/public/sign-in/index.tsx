import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";
import {
	EyeTwoTone,
	LockOutlined,
	UserOutlined,
	EyeInvisibleOutlined,
} from "@ant-design/icons";
import {
	FormItem,
	Container,
	CardCustom,
	CardHeader,
	ContainerLink,
} from "./styles";
import { RULES } from "../../../utils/rules";
import Logo from "@/assets/images/logo.svg";
const { Title } = Typography;

export const SignIn: FC = () => {
	console.log(Logo);
	return (
		<Container>
			<CardCustom>
				<CardHeader>
					<img src={Logo} alt="" />
				</CardHeader>
				<Form name="normal_login" className="login-form">
					<FormItem name="username" rules={RULES.EMAIL}>
						<Input
							prefix={<UserOutlined className="site-form-item-icon" />}
							placeholder="Username"
						/>
					</FormItem>
					<FormItem name="password" rules={RULES.PASSWORD}>
						<Input.Password
							type="password"
							prefix={<LockOutlined className="site-form-item-icon" />}
							placeholder="input password"
							iconRender={(visible) =>
								visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
							}
						/>
					</FormItem>
					<ContainerLink style={{ marginBottom: 20 }}>
						<Link
							style={{ float: "right" }}
							className="login-form-forgot"
							to="/forget-password"
						>
							Esqueceu a senha? clique aqui.
						</Link>
					</ContainerLink>
					<FormItem>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
							block
						>
							Log in
						</Button>
					</FormItem>
					<ContainerLink>
						Não têm uma conta?<Link to="/signup"> registre-se</Link>
					</ContainerLink>
				</Form>
			</CardCustom>
		</Container>
	);
};
