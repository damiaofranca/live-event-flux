/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	ICreateRequest,
	IDeleteRequest,
	IGetAllRequest,
	IGetAllResponse,
	IGetOneRequest,
	IGetOneResponse,
	IUpdateRequest,
} from "@/interfacers/event";
import { EventAbstraction } from "../abstraction";
import { AxiosInstance } from "axios";

export class ApiRepository implements EventAbstraction {
	constructor(private _api: AxiosInstance) {}

	public create(_payload: ICreateRequest): Promise<void> {
		return this._api.post(`/event`, _payload);
	}

	public getAll(_payload: IGetAllRequest): Promise<IGetAllResponse[]> {
		return this._api.get("/event", { params: _payload.filters });
	}

	public getOne(_payload: IGetOneRequest): Promise<IGetOneResponse> {
		return this._api.get(`/event/${_payload.id}`);
	}

	public update(_payload: IUpdateRequest): Promise<void> {
		return this._api.put(`/event/${_payload.id}`, _payload.data);
	}

	public delete(_payload: IDeleteRequest): Promise<void> {
		return this._api.delete(`/event/${_payload.id}`);
	}
}
