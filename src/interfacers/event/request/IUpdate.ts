import { IEvent } from "../index";

export interface IUpdateRequest {
	id: string;
	data: Omit<IEvent, "id" | "link_detail" | "createdAt" | "updateAt">;
}
