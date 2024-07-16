import { ArrowUpIcon, ArrowDownIcon, ChevronRightIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";

import { RiverState } from "../hooks/types";

export const decodeData = (data: string) => {
    const decodedString = atob(data);
    const jsonObject = JSON.parse(decodedString);

    return jsonObject;
};

export const getTempColour = (temp: number): string => {
    if (temp > 10) {
        return "bg-red-100";
    } else if (temp <= 0) {
        return "bg-blue-100";
    } else {
        return "bg-orange-100";
    }
};

export const getBatteryColour = (battery: number): string => {
    if (battery > 50) {
        return "bg-green-100";
    } else if (battery <= 25) {
        return "bg-red-100";
    } else {
        return "bg-orange-100";
    }
};

export const getSecondaryBatteryColour = (battery: number): string => {
    if (battery > 50) {
        return "bg-green-800";
    } else if (battery <= 25) {
        return "bg-red-800";
    } else {
        return "bg-orange-800";
    }
};

export const getStateIcon = (state: RiverState) => {
    if (state === "Rising") {
        return ArrowUpIcon;
    } else if (state === "Falling") {
        return ArrowDownIcon;
    }
}

export const getSpeedIcon = (speed: number) => {
    if (speed >= 15) {
        return DoubleArrowRightIcon;
    } else {
        return ChevronRightIcon;
    }
}