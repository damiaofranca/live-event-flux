/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect } from "react";
import { Spinner, tokens } from "@fluentui/react-components";
import { Status, Wrapper } from "@googlemaps/react-wrapper";

interface IDetailOfEventInMap {
	initialCoordinates?: { lat: number; lng: number };
}

const Map: React.FC<IDetailOfEventInMap> = ({ initialCoordinates }) => {
	useEffect(() => {
		new window.google.maps.Map(document.getElementById("map")!, {
			tilt: 0,
			zoom: 13,
			mapTypeId: "satellite",
			streetViewControl: false,
			center: initialCoordinates,
		});

		// const marker = new google.maps.Marker({
		// 	map,
		// 	draggable: false,
		// 	...(initialCoordinates ? { position: initialCoordinates } : {}),
		// });
	}, []);

	return (
		<div
			style={{
				width: "75%",
				height: "100%",
			}}
		>
			<div
				id="map"
				key={"map-creation"}
				style={{
					width: "100%",
					height: "100%",
					borderRadius: tokens.borderRadiusLarge,
				}}
			></div>
		</div>
	);
};

export const DetailOfEventInMap: FC<IDetailOfEventInMap> = ({
	initialCoordinates,
}) => {
	const renderMap = (status: Status) => {
		switch (status) {
			case Status.LOADING:
				return <Spinner size="extra-large" />;

			case Status.FAILURE:
				return <div>Erro</div>;

			case Status.SUCCESS:
				return <Map initialCoordinates={initialCoordinates} />;
		}
	};

	return (
		<Wrapper
			render={renderMap}
			key={"wrapper-criation"}
			libraries={["drawing", "visualization", "places"]}
			apiKey={import.meta.env.VITE_KEY_GOOGLE_SECRET}
		></Wrapper>
	);
};

export default DetailOfEventInMap;
