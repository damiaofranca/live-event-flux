import { isFunction } from "@/utils/checker";
import { eventService } from "..";
import { useQuery } from "react-query";
import { IGetAllRequest } from "@/interfacers/event";

export const useGetAll = (payload: IGetAllRequest | (() => IGetAllRequest)) => {
	return useQuery(
		["events", isFunction(payload) ? payload() : payload],
		() => eventService.getAll(isFunction(payload) ? payload() : payload),
		{
			refetchOnWindowFocus: false,
		},
	);
};
