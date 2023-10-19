import {
	IGetAllRequest,
	IGetOneRequest,
	ICreateRequest,
	IDeleteRequest,
	IUpdateRequest,
	IGetOneResponse,
	IGetAllResponse,
} from "@/interfacers/event";
import { EventAbstraction } from "./abstraction";

export class EventService implements EventAbstraction {
	constructor(private repo: EventAbstraction) {}

	public create(payload: ICreateRequest): Promise<void> {
		return this.repo.create(payload);
	}

	public getAll(payload: IGetAllRequest): Promise<IGetAllResponse> {
		return this.repo.getAll(payload);
	}

	public getOne(payload: IGetOneRequest): Promise<IGetOneResponse> {
		return this.repo.getOne(payload);
	}

	public update(payload: IUpdateRequest): Promise<void> {
		return this.repo.update(payload);
	}

	public delete(payload: IDeleteRequest): Promise<void> {
		return this.repo.delete(payload);
	}
}
