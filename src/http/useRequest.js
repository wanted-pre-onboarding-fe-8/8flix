import { useState } from 'react';
import { GET, PATCH, POST } from '../utils/constants/request';

export const httpRequest = (service) => {
  async function get(url) {
    const res = await service.get(url);
    return res;
  }
  async function patch(id, data) {
    const res = await service.patch(`/${id}`, data);
    return res;
  }
  return { get, patch };
};

export function useRequest(service, { onError, onComplete }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const errorHandling = (e) => {
    setError(e);
    setData(null);
    setLoading(false);
    if (onError) {
      onError(e);
    }
  };

  const responseHandling = (res) => {
    setError(null);
    setData(res?.data ?? res);
    setLoading(false);
    if (onComplete) {
      onComplete(res);
    }
  };

  const httpRequest = async (
    method,
    url,
    id = null,
    data = null,
    config = null
  ) => {
    let res = null;
    try {
      switch (method) {
        case GET:
          res = await service.get(url);
          break;
        case POST:
          res = await service.post(url, data, config);
          break;
        case PATCH:
          res = await service.patch(`/${id}`, data);
          break;
        default:
      }
      if (res) {
        responseHandling(res);
      }
    } catch (e) {
      errorHandling(e);
      throw new Error('데이터 처리 중 에러 발생' + e);
    }
  };

  return { data, loading, error, httpRequest };
}
