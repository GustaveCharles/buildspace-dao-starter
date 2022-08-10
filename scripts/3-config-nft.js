import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x841232d25bf48ADc5B1d457446422D8C6389Fe55");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "The Best Player in the World",
                description: "This NFT will give you access to FootballDAO!",
                image: readFileSync("scripts/assets/messi.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();