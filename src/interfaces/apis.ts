export interface RequestPayload<T> {
  method: string;
  url: string;
  dataRequest?: T;
}

export interface ResponsePayload<T> {
  data?: T;
  error?: string;
}
