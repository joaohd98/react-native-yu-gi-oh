import {AllCardsResponse} from "./response";
import {ServiceResponse} from "../model";
import {GenericService} from "../generic-service";
import {URL} from "../url";

type PromiseType = Promise<ServiceResponse<AllCardsResponse[]>>;

export const getAllCards = async (): PromiseType => {
  const headers = {
    "accept": "application/json",
    "Content-Type": "application/json",
  };

  return new Promise((resolve, reject) => {
    GenericService.makePostRequest<AllCardsResponse[]>(URL.getAllCard, {}, headers).then(
      data => resolve({response: data.response!.map(value => new AllCardsResponse(value))}),
      error => reject(error)
    );
  });
};
