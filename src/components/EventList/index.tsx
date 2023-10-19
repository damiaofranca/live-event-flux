import { FC } from "react";
import {
	Button,
	Table,
	Tooltip,
	TableRow,
	TableBody,
	TableCell,
	TableHeader,
	TableHeaderCell,
	TableCellLayout,
} from "@fluentui/react-components";

import {
	Map20Filled,
	Edit20Regular,
	SlideSearch20Regular,
	Accessibility20Filled,
	DeleteDismiss20Regular,
	PeopleCheckmark20Filled,
} from "@fluentui/react-icons";

import { SkeletonEvent } from "..";
import { useGetAll } from "@/api/events";
import { IEvent } from "@/interfacers/event";
import { formatDate } from "@/utils/format-date";
import { copyToClipboard } from "@/utils/clipboard";

import { useStyles } from "./styles";

interface IEventList {}

const columns = [
	{ columnKey: "event", label: "Nome" },
	{ columnKey: "link_detail", label: "Link para convidados" },
	{ columnKey: "coordinates", label: "Coordenadas" },
	{ columnKey: "createAt", label: "Criado em" },
	{ columnKey: `actions`, label: "Ações" },
];

export const EventList: FC<IEventList> = () => {
	const styles = useStyles();
	const { data, isLoading } = useGetAll({});

	const onCopyLink = (link: string) => {
		copyToClipboard(link, "Link copiado com sucesso.");
	};

	const onDelete = (id: string) => {
		console.log(id);
	};
	const onDetail = (id: string) => {
		console.log(id);
	};
	const onUpdate = (values: IEvent) => {
		console.log(values);
	};

	if (!data || isLoading) {
		return <SkeletonEvent />;
	}

	return (
		<>
			{data ? (
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
									<TableCellLayout>
										{formatDate(item.createdAt)}
									</TableCellLayout>
								</TableCell>
								<TableCell className={styles.tableCell}>
									<TableCellLayout>
										<Tooltip
											content="Verificar convidados"
											relationship="label"
										>
											<Button
												onClick={() => {}}
												icon={<PeopleCheckmark20Filled />}
												className={styles.containerAction}
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
												onClick={() => onDelete(item.id)}
												icon={<DeleteDismiss20Regular />}
												className={styles.containerAction}
											/>
										</Tooltip>
									</TableCellLayout>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			) : (
				<></>
			)}
		</>
	);
};
