import { IEvent } from "../index";

export interface IUpdateRequest {
	id: string;
	data: Omit<IEvent, "id" | "createdAt" | "updateAt">;
}
