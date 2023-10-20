import { FC, useState } from "react";
import {
	Menu,
	Table,
	Button,
	Tooltip,
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
	Edit20Regular,
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
import { GuestList, SkeletonEvent, UpdateEvent } from "..";
import { useDeleteEvent, useGetAllEvent } from "@/api/events";

import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";

interface IEventList {}

interface ISelectedGuestsEvent
	extends Pick<IEvent, "guests" | "event" | "id"> {}

const columns = [
	{ columnKey: "event", label: "Nome" },
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
								<TableCellLayout>
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
								<TableCellLayout>{formatDate(item.createdAt)}</TableCellLayout>
							</TableCell>
							<TableCell className={styles.tableCell}>
								<TableCellLayout className={styles.actionsDesktop}>
									<Tooltip content="Verificar convidados" relationship="label">
										<Button
											icon={<PeopleCheckmark20Filled />}
											className={styles.containerAction}
											onClick={() => {
												onShowDetailsGuests(item);
											}}
										/>
									</Tooltip>
									<Tooltip content="Detalhes" relationship="label">
										<Button
											icon={<SlideSearch20Regular />}
											onClick={() => onDetail(item.id)}
											className={styles.containerAction}
										/>
									</Tooltip>
									<Tooltip content="Editar evento" relationship="label">
										<Button
											icon={<Edit20Regular />}
											onClick={() => onUpdate(item)}
											className={styles.containerAction}
										/>
									</Tooltip>
									<Tooltip content="Cancelar evento" relationship="label">
										<Button
											icon={<DeleteDismiss20Regular />}
											className={styles.containerAction}
											onClick={() => onDelete({ id: item.id })}
										/>
									</Tooltip>
								</TableCellLayout>
								<TableCellLayout className={styles.actionsMobile}>
									<Menu>
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
