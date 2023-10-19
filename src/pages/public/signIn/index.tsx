import { FC, useState } from "react";

import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Label, Spinner } from "@fluentui/react-components";

import { useAuth } from "@/hooks";
import { loginSchema } from "./schema";
import { Logo, InputForm } from "@/components";

import { useStyles } from "./styles";

export const SignIn: FC = () => {
	const classes = useStyles();
	const { onSignIn } = useAuth();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const {
		dirty,
		values,
		errors,
		touched,
		isValid,
		handleSubmit,
		handleBlur,
		handleChange,
	} = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: loginSchema,
		onSubmit: async (values) => {
			setIsLoading(true);
			try {
				await onSignIn(values);
				navigate("/app");
			} finally {
				setIsLoading(false);
			}
		},
	});

	return (
		<div className={classes.root}>
			<Card className={classes.card}>
				<div className={classes.header}>
					<Logo />
				</div>
				<form name="login_form" onSubmit={handleSubmit}>
					<div className={classes.formItem}>
						<InputForm
							required
							type="text"
							name="email"
							label="Email"
							onBlur={handleBlur}
							error={errors.email}
							value={values.email}
							touched={touched.email}
							onChange={handleChange}
							placeholder="Digite seu Email"
						/>
					</div>
					<div className={classes.formItem}>
						<InputForm
							required
							label="Senha"
							name="password"
							type="password"
							onBlur={handleBlur}
							onChange={handleChange}
							error={errors.password}
							value={values.password}
							touched={touched.password}
							placeholder="Digite sua senha"
						/>
					</div>
					<div className={classes.containerlink}>
						<Label>
							Esqueceu a senha?{" "}
							<Link to="/forget-password" className={classes.link}>
								clique aqui.
							</Link>
						</Label>
					</div>
					<div>
						<Button
							type="submit"
							appearance="primary"
							iconPosition="after"
							className={classes.submitBtn}
							disabled={!(isValid && dirty)}
							icon={isLoading ? <Spinner size="tiny" /> : <></>}
						>
							Entrar
						</Button>
					</div>
					<div className={classes.containerlink}>
						<Label>
							Não têm uma conta?{" "}
							<Link to="/register" className={classes.link}>
								registre-se.
							</Link>
						</Label>
					</div>
				</form>
			</Card>
		</div>
	);
};
