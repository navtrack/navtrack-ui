import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { AUTH_AXIOS_INSTANCE } from "@navtrack/ui-shared/api/authAxiosInstance";
import { useCurrentAsset } from "@navtrack/ui-shared/newHooks/assets/useCurrentAsset";
import { useAxiosRequestLogging } from "@navtrack/ui-shared/hooks/axios/useAxiosRequestLogging";
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

export default function TripsScreen() {
  const [showModal, setShowModal] = useRecoilState(showDateModal);
  const currentAsset = useCurrentAsset();
  const [date, setDate] = React.useState(new Date());
  const [modalDate, setModalDate] = React.useState(new Date());

  const trips = useTripsQuery({
    assetId: currentAsset?.id,
    startDate: format(modalDate, "yyyy-MM-dd"),
    endDate: format(modalDate, "yyyy-MM-dd")
  });

  return (
    <>
      <MapWebView>
        <TripUpdateEventPublisher trip={trips.data?.items[0]} />
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
        <Text className="text-base font-semibold text-white">
          No trips found. {trips.data?.items[0]?.distance}
        </Text>
      </View>
      <DateModal
        showModal={showModal}
        onClose={() => {
          setShowModal(false);
          setDate(modalDate);
        }}
        onChange={(date) => setModalDate(date)}
        selectedDate={modalDate}
        customTitle={trips?.data?.items?.length}
      />
    </>
  );
}
