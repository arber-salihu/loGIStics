import { AlertMessage } from "@/services/AlertService";
import { atom } from "recoil";

// Define Recoil atoms
export const viewStateAtom = atom({
  key: "viewState",
  default: "info",
});

export const clearPolygonAtom = atom({
  key: "clearPolygon",
  default: false,
});

export const alertsAtom = atom<AlertMessage[]>({
  key: "alerts",
  default: [],
});

export const subCheckValueAtom = atom({
  key: "subCheckValueAtom",
  default: false,
});

export const boundaryNameAtom = atom({
  key: "boundaryNameAtom",
  default: "",
});

export const boundaryDescriptionAtom = atom({
  key: "boundaryDescriptionAtom",
  default: "",
});

export const polygonCoordinatesAtom = atom({
  key: "polygonCoordinatesAtom",
  default: [],
});

export const boundaryDataAtom = atom({
  key: "boundaryDataAtom",
  default: [],
});

export const createCheckboxAtom = atom({
  key: 'createCheckboxAtom',
  default: false,
});

export const subscribedBoundaryAtom = atom({
  key: 'subscribedBoundaryAtom',
  default: false,
});

