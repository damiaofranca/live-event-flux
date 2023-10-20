import { FC } from "react";
import {
	Dialog,
	Button,
	Spinner,
	DialogBody,
	DialogTitle,
	DialogSurface,
	DialogContent,
	DialogTrigger,
	DialogActions,
} from "@fluentui/react-components";
import { useFormik } from "formik";
import { toast } from "react-toastify";

import { InputForm, SelectLocationByMap } from "..";
import { queryClient } from "@/api";
import { registerEventSchema } from "./schema";
import { ICreateRequest } from "@/interfacers/event";

import { useStyles } from "./styles";
import { useCreateEvent } from "@/api/events";

interface IRegisterEventFormik extends Omit<ICreateRequest, "coordinate"> {
	lat: string;
	lng: string;
}

interface IRegisterEventModal {
	open: boolean;

	onClose: () => void;
}

export const RegisterEvent: FC<IRegisterEventModal> = (props) => {
	const styles = useStyles();
	const { mutateAsync: onCreate, isLoading } = useCreateEvent({
		onSuccess: () => {
			toast.success("Evento criado com sucesso.", { autoClose: 700 });
			queryClient.invalidateQueries("events");
			props.onClose();
		},
	});

	const {
		dirty,
		values,
		errors,
		touched,
		isValid,
		handleBlur,
		handleChange,
		handleSubmit,
		setFieldValue,
		setFieldTouched,
	} = useFormik<IRegisterEventFormik>({
		initialValues: {
			lat: "",
			lng: "",
			event: "",
			password: "",
		},
		validationSchema: registerEventSchema,
		onSubmit: async (values) => {
			onCreate({
				event: values.event,
				password: values.password,
				coordinate: `${values.lat},${values.lng}`,
			});
		},
	});

	const onSetValueCoordinate = async ({
		lat,
		lng,
	}: {
		lat: number;
		lng: number;
	}) => {
		await setFieldValue("lat", lat, true);
		await setFieldValue("lng", lng, true);
		setFieldTouched("lat");
		setFieldTouched("lng");
	};

	return (
		<Dialog open={props.open}>
			<DialogSurface>
				<form name="login_form" onSubmit={handleSubmit}>
					<DialogBody>
						<DialogTitle>Criar Evento</DialogTitle>
						<DialogContent>
							<div className={styles.container}>
								<div className={styles.formItem}>
									<InputForm
										required
										type="text"
										name="event"
										onBlur={handleBlur}
										error={errors.event}
										value={values.event}
										label="Empreendimento"
										onChange={handleChange}
										touched={touched.event}
										placeholder="Digite seu Nome (ou empreendimento)"
									/>
								</div>
								<div className={styles.formItem}>
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
								<div className={styles.coordinatesContainer}>
									<div className={styles.formItem}>
										<InputForm
											required
											disabled
											name="lat"
											type="text"
											label="Latitude"
											error={errors.lat}
											value={values.lat}
											touched={touched.lat}
											placeholder="Digite a latitude do evento"
										/>
									</div>
									<div
										className={styles.formItem}
										style={{ marginLeft: "8px" }}
									>
										<InputForm
											required
											disabled
											name="lng"
											type="text"
											label="Longitude"
											error={errors.lng}
											value={values.lng}
											onBlur={handleBlur}
											touched={touched.lng}
											onChange={handleChange}
											placeholder="Digite a longitude do evento"
										/>
									</div>
								</div>
								<div className={styles.formItem}>
									<SelectLocationByMap onGetcoodinates={onSetValueCoordinate} />
								</div>
							</div>
						</DialogContent>
						<DialogActions>
							<DialogTrigger disableButtonEnhancement>
								<div>
									<Button
										appearance="secondary"
										onClick={() => props.onClose()}
									>
										Fechar
									</Button>
									<Button
										type="submit"
										appearance="primary"
										iconPosition="after"
										disabled={!(isValid && dirty)}
										className={styles.submitContainer}
										{...(isLoading ? { icon: <Spinner size="tiny" /> } : {})}
									>
										Registrar
									</Button>
								</div>
							</DialogTrigger>
						</DialogActions>
					</DialogBody>
				</form>
			</DialogSurface>
		</Dialog>
	);
};
