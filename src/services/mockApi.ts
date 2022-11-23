import { RequestPayload, ResponsePayload } from '@interfaces/apis';
import MESSAGES from '@constants/messages';

const fetchAPI = async <T>({
  method,
  url,
  dataRequest,
}: RequestPayload<T>): Promise<ResponsePayload<T>> => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(dataRequest),
    });

    if (!response.ok) {
      const message = `An error has occurred: ${response.status}`;
      return {
        error: message,
      };
    }

    return {
      data: await response.json(),
    };
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(MESSAGES.DEFAULT_ERROR_APIS);
    }

    return {
      error: MESSAGES.DEFAULT_ERROR_APIS,
    };
  }
};

const getAll = async <T>(url: string): Promise<ResponsePayload<T>> => {
  const response = await fetchAPI<T>({ method: 'GET', url });

  return response as ResponsePayload<T>;
};

const getById = async <T>(
  url: string,
  id: string
): Promise<ResponsePayload<T>> => {
  const response = await fetchAPI<T>({ method: 'GET', url: `${url}/${id}` });

  return response as ResponsePayload<T>;
};

const update = async <T>(
  url: string,
  id: string,
  dataRequest: T
): Promise<ResponsePayload<T>> => {
  const response = await fetchAPI<T>({
    method: 'PUT',
    url: `${url}/${id}`,
    dataRequest,
  });

  return response as ResponsePayload<T>;
};

export { getAll, getById, update };
