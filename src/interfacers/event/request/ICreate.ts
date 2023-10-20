import { IEvent } from "./../index";

export interface ICreateRequest
	extends Omit<
		IEvent,
		"id" | "link_detail" | "guests" | "coordinate" | "createdAt" | "updateAt"
	> {
	coordinate: string;
}
