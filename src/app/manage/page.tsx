"use client";

import Loader from "@/components/shared/Loading";
import storageApi from "@/lib/redux/storage/storage.api";
import {Logger, convertFileSize} from "@/lib/utils";

const Page = () => {
  const {data, isLoading} = storageApi.useListAllFilesQuery();
  Logger.info(`Drive Api Response:`, data);

  if (isLoading) return <Loader />;

  return (
    <>
      {data?.map(file => (
        <ul key={file.id!}>
          <li>Name: {file.name}</li>
          <li>Size: {convertFileSize(Number.parseInt(file.size!))}</li>
          <li>Owned by: Tuanna</li>
        </ul>
      ))}
    </>
  );
};

export default Page;
