import {
	ICreateRequest,
	IDeleteRequest,
	IGetAllRequest,
	IGetAllResponse,
	IGetOneRequest,
	IGetOneResponse,
	IUpdateRequest,
} from "@/interfacers/event";

export abstract class EventAbstraction {
	public abstract create(payload: ICreateRequest): Promise<void>;

	public abstract getAll(payload: IGetAllRequest): Promise<IGetAllResponse[]>;

	public abstract getOne(payload: IGetOneRequest): Promise<IGetOneResponse>;

	public abstract update(payload: IUpdateRequest): Promise<void>;

	public abstract delete(payload: IDeleteRequest): Promise<void>;
}
