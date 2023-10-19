/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from "react";

import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Label, Spinner, Text } from "@fluentui/react-components";

import { useAuth } from "@/hooks/useAuth";
import { registerSchema } from "./schema";
import { InputForm, Logo } from "@/components";
import { IRegisterRequest } from "@/interfacers/auth/ILogin";

import { useStyles } from "./styles";

interface IRegisterSchema extends IRegisterRequest {
	passwordConfirmation: string;
}

export const SignUp: FC = () => {
	const classes = useStyles();
	const { onSignUp } = useAuth();
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
	} = useFormik<IRegisterSchema>({
		initialValues: {
			email: "",
			nickname: "",
			password: "",
			passwordConfirmation: "",
		},
		validationSchema: registerSchema,
		onSubmit: async ({ passwordConfirmation, ...rest }) => {
			setIsLoading(true);
			await onSignUp(rest);
			navigate("/login");
			setIsLoading(false);
		},
	});

	return (
		<div className={classes.root}>
			<Card className={classes.card}>
				<div className={classes.header}>
					<Logo />
				</div>
				<Text as="h3" size={600} weight="medium">
					Registre-se
				</Text>
				<form name="login_form" onSubmit={handleSubmit}>
					<div className={classes.formItem}>
						<InputForm
							required
							type="text"
							name="nickname"
							onBlur={handleBlur}
							label="Empreendimento"
							error={errors.nickname}
							value={values.nickname}
							onChange={handleChange}
							touched={touched.nickname}
							placeholder="Digite seu Nome (ou empreendimento)"
						/>
					</div>
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
					<div className={classes.formItem}>
						<InputForm
							required
							type="password"
							onBlur={handleBlur}
							onChange={handleChange}
							label="Confirmar senha"
							name="passwordConfirmation"
							error={errors.passwordConfirmation}
							value={values.passwordConfirmation}
							touched={touched.passwordConfirmation}
							placeholder="Digite sua senha novamente"
						/>
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
							Registrar
						</Button>
					</div>
					<div className={classes.containerlink}>
						<Label>
							Já têm uma conta?
							<Link to="/login" className={classes.link}>
								clique aqui.
							</Link>
						</Label>
					</div>
				</form>
			</Card>
		</div>
	);
};
