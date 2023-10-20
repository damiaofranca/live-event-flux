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

import { InputForm } from "..";
import { queryClient } from "@/api";
import { updateEventSchema } from "./schema";
import { ICreateRequest, IEvent } from "@/interfacers/event";
import { useUpdateEvent } from "@/api/events/hooks/Update";

import { useStyles } from "./styles";

interface IUpdateEventFormik extends Omit<ICreateRequest, "coordinate"> {
	lat: string;
	lng: string;
}

interface IUpdateEventModal {
	open: boolean;
	initialValues: IEvent;

	onClose: () => void;
}

export const UpdateEvent: FC<IUpdateEventModal> = (props) => {
	const styles = useStyles();
	const { mutateAsync: onUpdate, isLoading } = useUpdateEvent({
		onSuccess: () => {
			toast.success("Evento atualizado com sucesso.", { autoClose: 700 });
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
	} = useFormik<IUpdateEventFormik>({
		initialValues: {
			event: props.initialValues.event,
			lat: props.initialValues.coordinate[0],
			lng: props.initialValues.coordinate[1],
			password: props.initialValues.password,
		},
		enableReinitialize: true,
		validationSchema: updateEventSchema,
		onSubmit: async (values) => {
			onUpdate({
				id: props.initialValues.id,
				data: {
					event: values.event,
					password: values.password,
					guests: props.initialValues.guests,
					coordinate: `${values.lat},${values.lng}`,
				},
			});
		},
	});

	return (
		<Dialog open={props.open}>
			<DialogTrigger disableButtonEnhancement>
				<Button>Open dialog</Button>
			</DialogTrigger>
			<DialogSurface>
				<form name="login_form" onSubmit={handleSubmit}>
					<DialogBody>
						<DialogTitle>Atualizar Evento</DialogTitle>
						<DialogContent>
							<div className={styles.container}>
								<div className={styles.formItem}>
									<InputForm
										required
										type="text"
										name="event"
										onBlur={handleBlur}
										label="Empreendimento"
										error={errors.event}
										value={values.event}
										onChange={handleChange}
										touched={touched.event}
										placeholder="Digite seu Nome (ou empreendimento)"
									/>
								</div>
								<div className={styles.coordinatesContainer}>
									<div className={styles.formItem}>
										<InputForm
											required
											type="text"
											name="lat"
											label="Latitude"
											onBlur={handleBlur}
											error={errors.lat}
											value={values.lat}
											touched={touched.lat}
											onChange={handleChange}
											placeholder="Digite a latitude do evento"
										/>
									</div>
									<div
										className={styles.formItem}
										style={{ marginLeft: "8px" }}
									>
										<InputForm
											required
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
										Atualizar
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
