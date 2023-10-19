import { IGetOneRequest } from "./request/IGetOne";
import { IGetAllRequest } from "./request/IGetAll";
import { ICreateRequest } from "./request/ICreate";
import { IUpdateRequest } from "./request/IUpdate";
import { IDeleteRequest } from "./request/IDelete";
import { IGetOneResponse } from "./response/IGetOne";
import { IGetAllResponse } from "./response/IGetAll";
import { IDeleteGuestRequest } from "./request/IDeleteGuest";
import { IDeleteGuestResponse } from "./response/IDeleteGuest";

export interface IEvent {
	id: string;
	event: string;
	guests: string[];
	link_detail: string;
	coordinate: [string, string];
	createdAt: string;
	updateAt: string;
}

export type {
	ICreateRequest,
	IUpdateRequest,
	IGetOneRequest,
	IGetAllRequest,
	IDeleteRequest,
	IGetAllResponse,
	IGetOneResponse,
	IDeleteGuestRequest,
	IDeleteGuestResponse,
};
