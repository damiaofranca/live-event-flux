import { FC, useState } from "react";
import {
	Menu,
	Table,
	Button,
	MenuItem,
	TableRow,
	MenuList,
	TableBody,
	TableCell,
	MenuButton,
	MenuPopover,
	MenuTrigger,
	TableHeader,
	TableCellLayout,
	TableHeaderCell,
} from "@fluentui/react-components";
import { toast } from "react-toastify";

import {
	Map20Filled,
	Link20Filled,
	Edit20Regular,
	Password20Filled,
	SlideSearch20Regular,
	Accessibility20Filled,
	DeleteDismiss20Regular,
	PeopleCheckmark20Filled,
	AppsListDetail20Regular,
} from "@fluentui/react-icons";

import { queryClient } from "@/api";
import { IEvent } from "@/interfacers/event";
import { formatDate } from "@/utils/format-date";
import { copyToClipboard } from "@/utils/clipboard";
import { GuestList, NoData, SkeletonEvent, UpdateEvent } from "..";
import { useDeleteEvent, useGetAllEvent } from "@/api/events";

import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";

interface IEventList {}

interface ISelectedGuestsEvent
	extends Pick<IEvent, "guests" | "event" | "id"> {}

const columns = [
	{ columnKey: "event", label: "Nome" },
	{ columnKey: "password", label: "Senha" },
	{ columnKey: "link_detail", label: "Link para convidados" },
	{ columnKey: "coordinates", label: "Coordenadas" },
	{ columnKey: "createAt", label: "Criado em" },
	{ columnKey: `actions`, label: "Ações" },
];

export const EventList: FC<IEventList> = () => {
	const styles = useStyles();
	const navigate = useNavigate();
	const { data, isLoading } = useGetAllEvent({});
	const [selectedGuestsEvent, setSelectedGuestsEvent] =
		useState<ISelectedGuestsEvent | null>(null);
	const [selectedEventUpdate, setSelectedEventUpdate] = useState<IEvent | null>(
		null,
	);
	const { mutateAsync: onDelete } = useDeleteEvent({
		onSuccess: () => {
			toast.success("Evento deletado com sucesso.", { autoClose: 700 });
			queryClient.invalidateQueries("events");
		},
	});
	if (!data || isLoading) {
		return <SkeletonEvent />;
	}

	const onCloseDetailsGuests = () => {
		setSelectedGuestsEvent(null);
	};

	const onShowDetailsGuests = (values: IEvent) => {
		setSelectedGuestsEvent({
			id: values.id,
			event: values.event,
			guests: values.guests,
		});
	};

	const onDetail = (id: string) => {
		navigate(`/app/event/${id}`);
	};

	const onUpdate = (values: IEvent) => {
		setSelectedEventUpdate(values);
	};

	const onCancelUpdate = () => {
		setSelectedEventUpdate(null);
	};

	const onCopyLink = (link: string) => {
		copyToClipboard(link, "Link copiado com sucesso.");
	};

	return (
		<>
			{data.items.length ? (
				<Table arial-label="Default table">
					<TableHeader>
						<TableRow>
							{columns.map((column) => (
								<TableHeaderCell key={column.columnKey}>
									{column.label}
								</TableHeaderCell>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{data.items.map((item) => (
							<TableRow key={item.id} style={{}}>
								<TableCell className={styles.tableCell}>
									<TableCellLayout media={<Accessibility20Filled />}>
										{item.event}
									</TableCellLayout>
								</TableCell>
								<TableCell className={styles.tableCell}>
									<TableCellLayout media={<Password20Filled />}>
										{item.password}
									</TableCellLayout>
								</TableCell>
								<TableCell className={styles.tableCell}>
									<TableCellLayout media={<Link20Filled />}>
										<Button
											appearance="transparent"
											onClick={() => onCopyLink(item.link_detail)}
										>
											{item.link_detail.substring(0, 26) + "..."}
										</Button>
									</TableCellLayout>
								</TableCell>
								<TableCell className={styles.tableCell}>
									<TableCellLayout media={<Map20Filled />}>
										{item.coordinate[0]} <br />
										{item.coordinate[1]}
									</TableCellLayout>
								</TableCell>
								<TableCell className={styles.tableCell}>
									<TableCellLayout>
										{formatDate(item.createdAt)}
									</TableCellLayout>
								</TableCell>
								<TableCell className={styles.tableCell}>
									<TableCellLayout>
										<Menu positioning="below-end">
											<MenuTrigger disableButtonEnhancement>
												<MenuButton icon={<AppsListDetail20Regular />} />
											</MenuTrigger>
											<MenuPopover>
												<MenuList>
													<MenuItem
														icon={<PeopleCheckmark20Filled />}
														onClick={() => {
															onShowDetailsGuests(item);
														}}
													>
														Verificar convidados
													</MenuItem>
													<MenuItem
														icon={<SlideSearch20Regular />}
														onClick={() => onDetail(item.id)}
													>
														Detalhes
													</MenuItem>
													<MenuItem
														icon={<Edit20Regular />}
														onClick={() => onUpdate(item)}
													>
														Editar evento
													</MenuItem>
													<MenuItem
														onClick={() => onDelete({ id: item.id })}
														icon={<DeleteDismiss20Regular />}
													>
														Cancelar evento
													</MenuItem>
												</MenuList>
											</MenuPopover>
										</Menu>
									</TableCellLayout>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			) : (
				<NoData sizeIcon={400} />
			)}
			{selectedGuestsEvent ? (
				<GuestList {...selectedGuestsEvent} onClose={onCloseDetailsGuests} />
			) : null}
			{selectedEventUpdate ? (
				<UpdateEvent
					onClose={onCancelUpdate}
					initialValues={selectedEventUpdate}
					open={selectedEventUpdate ? true : false}
				/>
			) : null}
		</>
	);
};
