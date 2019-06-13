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
): [() => void, boolean] => {
  const [requesting, setRequesting] = useState(false);

  const request = () => {
    setRequesting(true);

    axios(config)
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
