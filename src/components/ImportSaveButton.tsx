import { Button, ButtonProps } from "@chakra-ui/react";
import { atom, useAtom, useAtomValue } from "jotai";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { SaveData, useSetSaveData } from "@/save-data/saveData";
import SaveImportWorker from "@/workers/saveImport.worker?worker";

const saveImportWorkerAtom = atom(new SaveImportWorker());
const isLoadingAtom = atom(false);

export function ImportSaveButton(props: ButtonProps) {
  const setSaveData = useSetSaveData();
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const saveImportWorker = useAtomValue(saveImportWorkerAtom);
  const navigate = useNavigate();

  const onFileSelect = (file: File | null) => {
    if (file === null) {
      // No file selected
      return;
    }
    setIsLoading(true);
    saveImportWorker.postMessage(file);
  };

  // Multiple instances will redefine this, should be safe due to atoms?
  saveImportWorker.onmessage = useCallback(
    (e: MessageEvent<SaveData>) => {
      setIsLoading(false);
      setSaveData(e.data);
      navigate("/factions");
    },
    [setIsLoading, setSaveData, navigate]
  );

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop(acceptedFiles) {
      if (acceptedFiles.length > 0) onFileSelect(acceptedFiles[0]);
    },
    accept: { "application/gzip": [".gz"] },
  });

  return (
    <Button {...getRootProps()} {...props} isLoading={isLoading}>
      {props.children ?? "Import Save"}
      <input {...getInputProps()} />
    </Button>
  );
}
