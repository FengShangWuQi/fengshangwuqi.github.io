import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export interface IRequestOpts {
  onSuccess?: (res: AxiosResponse) => void;
  onFail?: (error: AxiosError) => void;
  onFinish?: () => void;
}

export const useRequest = (
  config: AxiosRequestConfig,
  opts: IRequestOpts,
): [(arg?: AxiosRequestConfig) => void, boolean] => {
  const [requesting, setRequesting] = useState(false);

  const request = (arg?: AxiosRequestConfig) => {
    setRequesting(true);

    axios({ ...config, ...arg })
      .then(res => {
        opts.onSuccess && opts.onSuccess(res);
      })
      .catch(error => {
        opts.onFail && opts.onFail(error);
      })
      .finally(() => {
        opts.onFinish && opts.onFinish();
        setRequesting(false);
      });
  };

  return [request, requesting];
};
