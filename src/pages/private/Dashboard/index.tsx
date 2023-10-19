import { FC } from "react";
import { Button } from "@fluentui/react-components";
import { AddCircle24Filled } from "@fluentui/react-icons";

import { EventList, PageHeader } from "@/components";

interface IDashboard {}

export const Dashboard: FC<IDashboard> = () => {
	return (
		<div>
			<PageHeader
				title="Eventos"
				extra={
					<Button appearance="primary" icon={<AddCircle24Filled />}>
						Criar evento
					</Button>
				}
			/>
			<EventList />
		</div>
	);
};
