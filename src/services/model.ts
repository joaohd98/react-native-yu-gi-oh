export enum ServiceStatus {
  noAction = "noAction",
  exception = "exception",
  noInternetConnection = "noInternetConnection",
  loading = "loading",
  success = "success",
}

export class ServiceStatusException extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ServiceStatusException"; // (2)
  }
}

export interface ServiceResponse<Type> {
  status?: ServiceStatus;
  data?: Type;
}
