import { FC, useState } from "react";
import {
	Card,
	Text,
	Body1,
	Button,
	Tooltip,
	Caption1Stronger,
} from "@fluentui/react-components";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { DeleteDismiss20Filled } from "@fluentui/react-icons";
import { ArrowHookDownLeft24Regular } from "@fluentui/react-icons";

import { formatDate } from "@/utils/format-date";
import { handleQRCodeGeneration } from "@/utils/generate-qr";
import { useDeleteGuest, useGetOneEvent } from "@/api/events";
import { PageHeader, SkeletonEventDetail } from "@/components";

import { useStyles } from "./styles";
import { queryClient } from "@/api";
import DetailOfEventInMap from "@/components/DetailOfEventInMap";

interface IDetailEvent {}
export const DetailEvent: FC<IDetailEvent> = () => {
	const styles = useStyles();
	const { id } = useParams();
	const navigate = useNavigate();
	const [urlLink, setUrlLink] = useState<string | null>(null);

	const { mutateAsync: onRemove } = useDeleteGuest({
		onSuccess: () => {
			toast.success("Convidado removido com sucesso.", { autoClose: 700 });
			queryClient.invalidateQueries("events-unique");
		},
	});

	const { isLoading, data } = useGetOneEvent({ id: id || "" });

	if (isLoading || !data || !id) {
		return <SkeletonEventDetail />;
	}

	if (!urlLink) {
		handleQRCodeGeneration(data.link_detail, setUrlLink);
	}

	const goBack = () => {
		navigate("/app");
	};

	return (
		<div className={styles.root}>
			<PageHeader
				title="Detalhes"
				beforeAction={
					<Button
						onClick={goBack}
						appearance="transparent"
						style={{ marginRight: "8px" }}
						icon={<ArrowHookDownLeft24Regular />}
					/>
				}
			/>

			<div className={styles.content}>
				<div className={styles.containerWrapper + " left"}>
					<div className={styles.containerInfo}>
						<Body1>Nome do evento:</Body1>
						<Caption1Stronger>{data.event}</Caption1Stronger>
					</div>
					<div className={styles.containerInfo}>
						<Body1>Senha:</Body1>
						<Caption1Stronger>{data.password}</Caption1Stronger>
					</div>
					<div className={styles.containerInfo}>
						<Body1>Criado em:</Body1>
						<Caption1Stronger>{formatDate(data.createdAt)}</Caption1Stronger>
					</div>
					<div className={styles.containerInfo}>
						<Body1>Lista de convidados:</Body1>
						{data.guests.length ? (
							data.guests.map((guest) => (
								<div className={styles.list}>
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
												onClick={() => onRemove({ guest: guest.guest, id: id })}
											/>
										</Tooltip>
									</Card>
								</div>
							))
						) : (
							<Caption1Stronger>Nenhum convidado encontrado</Caption1Stronger>
						)}
					</div>
					<div className={styles.containerInfo}>
						<Body1 style={{ marginBottom: "12px" }}>
							Link de compartilhamento:
						</Body1>
						<img
							src={urlLink || ""}
							className={styles.qrCodeImg}
							alt="Link de compartilhamento"
						/>
					</div>
				</div>
				<div className={styles.containerWrapper}>
					<DetailOfEventInMap
						initialCoordinates={{
							lat: Number(data.coordinate[0]),
							lng: Number(data.coordinate[1]),
						}}
					/>
				</div>
			</div>
		</div>
	);
};
