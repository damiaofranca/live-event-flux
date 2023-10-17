import api from "..";
import {
	IGetAllRequest,
	IGetOneRequest,
	IGetAllResponse,
	IGetOneResponse,
	ICreateRequest,
	IDeleteRequest,
	IUpdateRequest,
} from "@/interfacers/event";
import { ApiRepository } from "./repository";
import { EventAbstraction } from "./abstraction";

export class EventService implements EventAbstraction {
	private repo = new ApiRepository(api);

	constructor() {}
	public create(payload: ICreateRequest): Promise<void> {
		return this.repo.create(payload);
	}

	public getAll(payload: IGetAllRequest): Promise<IGetAllResponse[]> {
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
