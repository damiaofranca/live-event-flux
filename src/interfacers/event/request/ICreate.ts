import { IEvent } from "./../index";

export interface ICreateRequest
	extends Omit<IEvent, "id" | "createdAt" | "updateAt"> {}
