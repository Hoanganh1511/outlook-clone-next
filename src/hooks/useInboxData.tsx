"use client";
import useSWR from "swr";
import axios from "axios";
import { IInbox } from "@/types";
import { useEffect } from "react";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const useInboxData = (filter: string, sortBy: string, sortOrder: string) => {
  const { data, error, isValidating, mutate } = useSWR<IInbox[]>(
    [
      `http://localhost:8000/email?filter=${filter}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
    ],
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      refreshInterval: 10000,
    }
  );
  useEffect(() => {
    mutate();
  }, [filter, sortBy, sortOrder]);
  const isLoading = !data && !error;
  const inboxes = data || [];
  return { inboxes, isLoading, error, isValidating };
};

export default useInboxData;
