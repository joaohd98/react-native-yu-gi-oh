import {ShowCardsScreenActionConst, ShowCardsScreenActionType} from "./action-type";
import {ServiceResponse, ServiceStatus} from "../../../services/model";
import {AllCardsResponse} from "../../../services/get-all-cards/response";

type Response = ShowCardsScreenActionType;
type Service<T> = ServiceResponse<T>;

export class ShowCardsScreenAction {
  static getAllCard = (): Response => ({
    type: ShowCardsScreenActionConst.fetchGetAllCards,
    status: ServiceStatus.loading,
  });

  static receiveAllCard = (service: Service<AllCardsResponse[]>): Response => ({
    type: ShowCardsScreenActionConst.finishGetAllCards,
    status: service.status!,
    cards: service.response!,
  });

  static cancelAllCard = (status: ServiceStatus): Response => ({
    type: ShowCardsScreenActionConst.errorGetAllCards,
    status,
  });

  static addLimitCard = (limit: number, offset: number): Response => ({
    type: ShowCardsScreenActionConst.addLimitCards,
    limit,
    offset,
  });
}
