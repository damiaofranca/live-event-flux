import { FC, useState } from "react";

import {
	Text,
	Card,
	Button,
	Dialog,
	Tooltip,
	DialogBody,
	DialogTitle,
	DialogTrigger,
	DialogContent,
	DialogSurface,
	DialogActions,
} from "@fluentui/react-components";
import { toast } from "react-toastify";
import { DeleteDismiss20Filled } from "@fluentui/react-icons";

import { queryClient } from "@/api";
import { IEvent } from "@/interfacers/event";
import { useDeleteGuest } from "@/api/events";

import { useStyles } from "./styles";

interface IGuestList extends Pick<IEvent, "guests" | "event" | "id"> {
	onClose: () => void;
}

export const GuestList: FC<IGuestList> = (props) => {
	const styles = useStyles();
	const [open] = useState<boolean>(props.guests ? true : false);
	const { mutateAsync: onRemove } = useDeleteGuest({
		onSuccess: () => {
			toast.success("Convidado removido com sucesso.", { autoClose: 700 });
			queryClient.invalidateQueries("events");
			props.onClose();
		},
	});

	return (
		<Dialog open={open}>
			<DialogSurface>
				<DialogBody>
					<DialogTitle>Lista de convidados: {props.event}</DialogTitle>
					<DialogContent>
						<div className={styles.list}>
							{props.guests.length ? (
								props.guests.map((guest) => (
									<Card
										key={guest.guest}
										className={styles.card}
										orientation="horizontal"
									>
										<Text weight="semibold">{guest.guest}</Text>

										<Tooltip content="Remover convidado" relationship="label">
											<Button
												appearance="transparent"
												aria-label="More options"
												icon={<DeleteDismiss20Filled />}
												onClick={() =>
													onRemove({ guest: guest.guest, id: props.id })
												}
											/>
										</Tooltip>
									</Card>
								))
							) : (
								<div className={styles.notFound}>
									<Text>Nenhum convidado encontrado.</Text>
								</div>
							)}
						</div>
					</DialogContent>
					<DialogActions>
						<DialogTrigger disableButtonEnhancement>
							<Button appearance="secondary" onClick={() => props.onClose()}>
								Fechar
							</Button>
						</DialogTrigger>
					</DialogActions>
				</DialogBody>
			</DialogSurface>
		</Dialog>
	);
};
