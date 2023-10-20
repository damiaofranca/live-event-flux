/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect } from "react";
import { Spinner, tokens } from "@fluentui/react-components";
import { Status, Wrapper } from "@googlemaps/react-wrapper";

interface ISelectLocationByMap {
	initialCoordinates?: { lat: number; lng: number };
	onGetcoodinates: ({ lat, lng }: { lat: number; lng: number }) => void;
}

const Map: React.FC<ISelectLocationByMap> = ({
	onGetcoodinates,
	initialCoordinates,
}) => {
	useEffect(() => {
		const map = new window.google.maps.Map(document.getElementById("map")!, {
			tilt: 0,
			zoom: 13,
			mapTypeId: "satellite",
			streetViewControl: false,
			...(initialCoordinates
				? { center: initialCoordinates }
				: { center: { lat: -6.2142503, lng: -38.4960816 } }),
		});

		const marker = new google.maps.Marker({
			map,
			draggable: false,
			...(initialCoordinates ? { position: initialCoordinates } : {}),
		});

		map.addListener("click", (click: google.maps.MapMouseEvent) => {
			onGetcoodinates({
				lat: click.latLng?.lat() || 0,
				lng: click.latLng?.lng() || 0,
			});
			marker.setPosition({
				lat: click.latLng?.lat() || 0,
				lng: click.latLng?.lng() || 0,
			});
		});
	}, []);

	return (
		<div
			style={{
				width: "100%",
				height: "320px",
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

export const SelectLocationByMap: FC<ISelectLocationByMap> = ({
	initialCoordinates,
	onGetcoodinates,
}) => {
	const renderMap = (status: Status) => {
		switch (status) {
			case Status.LOADING:
				return <Spinner size="extra-large" />;

			case Status.FAILURE:
				return <div>Erro</div>;

			case Status.SUCCESS:
				return (
					<Map
						onGetcoodinates={onGetcoodinates}
						initialCoordinates={initialCoordinates}
					/>
				);
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

export default SelectLocationByMap;
