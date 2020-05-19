export enum ServiceStatus {
  noAction = "noAction",
  exception = "exception",
  noInternetConnection = "noInternetConnection",
  loading = "loading",
  success = "success",
}

export class ServiceStatusException extends Error {
  constructor(message) {
    super(message);
    this.name = "ServiceStatusException";
  }
}

export interface ServiceResponse<Type> {
  status?: ServiceStatus;
  response?: Type;
}
