import {
	ICreateRequest,
	IDeleteRequest,
	IGetAllRequest,
	IGetOneRequest,
	IUpdateRequest,
	IGetAllResponse,
	IGetOneResponse,
	IDeleteGuestRequest,
} from "@/interfacers/event";

export abstract class EventAbstraction {
	public abstract create(payload: ICreateRequest): Promise<void>;

	public abstract getAll(payload: IGetAllRequest): Promise<IGetAllResponse>;

	public abstract getOne(payload: IGetOneRequest): Promise<IGetOneResponse>;

	public abstract update(payload: IUpdateRequest): Promise<void>;

	public abstract delete(payload: IDeleteRequest): Promise<void>;

	public abstract deleteGuest(payload: IDeleteGuestRequest): Promise<void>;
}
