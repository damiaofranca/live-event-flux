import { FC, useState } from "react";
import { Button } from "@fluentui/react-components";
import { AddCircle24Filled } from "@fluentui/react-icons";

import { EventList, PageHeader, RegisterEvent } from "@/components";

interface IDashboard {}

export const Dashboard: FC<IDashboard> = () => {
	const [isActionToRegisterEvent, setIsActionToRegisterEvent] =
		useState<boolean>(false);

	const onCloseActionRegisterModal = () => {
		setIsActionToRegisterEvent(false);
	};

	const onShowSetActionRegisterModal = () => {
		setIsActionToRegisterEvent(true);
	};

	return (
		<div>
			<PageHeader
				title="Eventos"
				extra={
					<Button
						appearance="primary"
						icon={<AddCircle24Filled />}
						onClick={onShowSetActionRegisterModal}
					>
						Criar evento
					</Button>
				}
			/>
			<EventList />
			{isActionToRegisterEvent ? (
				<RegisterEvent
					open={isActionToRegisterEvent}
					onClose={onCloseActionRegisterModal}
				/>
			) : null}
		</div>
	);
};
