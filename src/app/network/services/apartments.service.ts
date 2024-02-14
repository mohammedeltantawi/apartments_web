import { Apartment} from "../../models/apartment.model";
import client from "../client";
import { APARTMENTS_URLS } from "../urls/apartments";
import axios from "axios";

export async function getApartments(
): Promise<{ status: number; data: [Apartment] }> {
		const result = await client
		.get({url: APARTMENTS_URLS.APARTMENTS_LIST})
		.then((res) => {
			console.log(res);
			return {
				status: res.status,
				data: res.data
			};
		})
		.catch((err) => {
			console.log(err);
			return { status: err.response.status, data: err.response.data };
		});
	return result;
}

export async function getApartment( id: string
	): Promise<{ status: number; data: Apartment }> {
		const result = await client
			.get({
				url: `${APARTMENTS_URLS.APARTMENTS_LIST}${APARTMENTS_URLS.APARTMENT}/${id}`
			})
			.then((res) => {
				return {
					status: res.status,
					data: res.data
				};
			})
			.catch((err) => {
				return { status: err.response.status, data: err.response.data };
			});
		return result;
	}