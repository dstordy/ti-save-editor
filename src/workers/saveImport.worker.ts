import { gunzip, strFromU8 } from "fflate";
import json5 from "json5";

onmessage = (e: MessageEvent<File>) => {
  const file = e.data;
  void file.arrayBuffer().then((buffer) => {
    console.log("Decompressing Save");
    gunzip(new Uint8Array(buffer), (err, uncompressed) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Parsing Save");
      const data = json5.parse<unknown>(strFromU8(uncompressed));
      console.log("Done");
      postMessage(data);
    });
  });
};

export {};
