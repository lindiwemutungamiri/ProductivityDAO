import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xC1175E54289F61fa1031Ef6011fF305eAa3e28dB");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Productivity Baton",
        description: "This NFT will give you access to the ProductivityDAO!",
        image: readFileSync("scripts/assets/productivity_baton.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();