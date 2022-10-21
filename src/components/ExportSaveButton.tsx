import { Button, ButtonProps } from "@chakra-ui/react";
import { gzipSync, strToU8 } from "fflate";
import { saveAs } from "file-saver";
import { stringify } from "@/json/stringify";
import { useSaveDataValue } from "@/save-data/saveData";

export function ExportSaveButton(props: ButtonProps) {
  const saveData = useSaveDataValue();

  if (!saveData) return null;

  const onExportSave = () => {
    const buffer = gzipSync(strToU8(stringify(saveData, 4)));
    const blob = new Blob([buffer], { type: "application/gzip" });
    saveAs(blob, "exported.gz");
  };

  return (
    <Button {...props} onClick={onExportSave}>
      Export Save
    </Button>
  );
}
