"use server";
import { isAxiosError } from "axios";
import axiosInstance from "@/app/utils/axiosInstance";
import {
  PartnerDataType,
  AdditiveDataType,
  RestaurantDataType,
  RestaurantSelectionDataType,
} from "@/types/definitions";

export const fetchPartners = async (): Promise<PartnerDataType[]> => {
  try {
    const { data } = await axiosInstance.get("/partners");
    return data;
  } catch (error) {
    console.error("Error fetching partners:", error);
    return [];
  }
};

export const fetchAdditives = async (): Promise<AdditiveDataType[]> => {
  try {
    const { data } = await axiosInstance.get("/additives");
    return data;
  } catch (error) {
    console.error("Error fetching additives:", error);
    return [];
  }
};

// Null when the restaurant isn't validated or doesn't exist
export const fetchRestaurant = async (
  id: number,
): Promise<RestaurantDataType | null> => {
  try {
    const { data } = await axiosInstance.get(`/website/restaurants/${id}`);
    return data;
  } catch (error) {
    if (!isAxiosError(error) || error.response?.status !== 404)
      console.error("Error fetching restaurant:", error);
    return null;
  }
};

// Null when the selection isn't public or doesn't exist
export const fetchRestaurantSelection = async (
  id: number,
): Promise<RestaurantSelectionDataType | null> => {
  try {
    const { data } = await axiosInstance.get(
      `/website/restaurant-selections/${id}`,
    );
    return data;
  } catch (error) {
    if (!isAxiosError(error) || error.response?.status !== 404)
      console.error("Error fetching restaurant selection:", error);
    return null;
  }
};
