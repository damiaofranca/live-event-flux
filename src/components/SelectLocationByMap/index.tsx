import GoogleMapReact from "google-map-react";
import { FC } from "react";

interface ISelectLocationByMap {}

export const SelectLocationByMap: FC<ISelectLocationByMap> = () => {
	return (
		<div style={{ height: "320px", width: "100%" }}>
			<GoogleMapReact
				defaultZoom={12}
				defaultCenter={{ lat: -6.2119358, lng: -38.4966223 }}
				bootstrapURLKeys={{ key: import.meta.env.KEY_GOOGLE_SECRET || "" }}
			></GoogleMapReact>
		</div>
	);
};
