import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { useCurrentAsset } from "@navtrack/ui-shared/newHooks/assets/useCurrentAsset";
import { useTripsQuery } from "@navtrack/ui-shared/hooks/queries/useTripsQuery";
import { format } from "date-fns";
import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRecoilState } from "recoil";
import { TailwindColors } from "../../../tailwind";
import { NtIcon } from "../shared/NtIcon";
import { DateModal } from "./DateModal";
import { showDateModal } from "./state";
import { MapWebView } from "../shared/maps/MapWebView";
import { TripUpdateEventPublisher } from "../shared/maps/TripUpdateEventPublisher";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function TripsScreen() {
  const [showModal, setShowModal] = useRecoilState(showDateModal);
  const currentAsset = useCurrentAsset();
  const [date, setDate] = React.useState(new Date());
  const [modalDate, setModalDate] = React.useState(new Date());
  const [tripIndex, setTripIndex] = React.useState(0);

  const trips = useTripsQuery({
    assetId: currentAsset?.id,
    startDate: format(modalDate, "yyyy-MM-dd"),
    endDate: format(modalDate, "yyyy-MM-dd")
  });

  return (
    <>
      <MapWebView>
        <TripUpdateEventPublisher trip={trips.data?.items[tripIndex]} />
      </MapWebView>
      <View
        style={{
          backgroundColor: "rgba(17,24,39,.9)",
          left: 8,
          top: 8,
          right: 8
        }}
        className="absolute flex flex-row items-center justify-center rounded-md py-2 px-3">
        <TouchableOpacity
          className="flex flex-row items-center"
          onPressOut={() => setShowModal(true)}>
          <View className="flex w-8 items-center justify-center">
            <NtIcon size={16} icon={faCalendar} color={TailwindColors.white} />
          </View>
          <Text className="text-lg font-medium text-white">
            {format(date, "d MMM yyyy")}
          </Text>
          <View className="w-8" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "rgba(17,24,39,.9)",
          left: 8,
          bottom: 8,
          right: 8
        }}
        className="absolute flex items-center rounded-md p-2">
        {trips.data?.items.length === 0 ? (
          <Text className="text-base font-semibold text-white">
            No trips found. {trips.data?.items[0]?.distance}
          </Text>
        ) : (
          <View className="flex w-full flex-row items-center justify-between">
            <TouchableOpacity
              className="flex flex-row"
              onPressOut={() => {
                if (tripIndex > 0) {
                  setTripIndex(tripIndex - 1);
                }
              }}>
              <View className="flex w-8 items-center justify-center">
                <NtIcon
                  size={20}
                  icon={faArrowLeft}
                  color={TailwindColors.white}
                />
              </View>
            </TouchableOpacity>
            <Text className="text-white">
              Trip <Text className="font-bold">{tripIndex + 1}</Text> of{" "}
              <Text className="font-bold">{trips.data?.items.length}</Text>.
            </Text>
            <TouchableOpacity
              className="flex flex-row"
              onPressOut={() => {
                if (
                  trips.data?.items.length &&
                  tripIndex < trips.data?.items.length - 1
                ) {
                  setTripIndex(tripIndex + 1);
                }
              }}>
              <View className="flex w-8 items-center justify-center">
                <NtIcon
                  size={20}
                  icon={faArrowRight}
                  color={TailwindColors.white}
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <DateModal
        showModal={showModal}
        onClose={() => {
          setShowModal(false);
          setDate(modalDate);
        }}
        onChange={(date) => setModalDate(date)}
        selectedDate={modalDate}
        customTitle={<> {trips?.data?.items?.length} trips</>}
      />
    </>
  );
}
