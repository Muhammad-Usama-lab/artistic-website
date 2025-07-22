import axios from "axios";
import { ART_LIVE_AXIOS_INSTANCE } from "../config/axios";

const postIncident = async (data) => {
  try {
    const response = await ART_LIVE_AXIOS_INSTANCE.post(
      "/ords/art/wb_header/create_wb_header",
      {
        wb: [
          {
            master: data,
          },
        ],
      }
    );
    return response;
  } catch (error) {
    console.error("Error posting incident:", error);
    throw error;
  }
};

const postImage = async (string, formData) => {
  try {
    const response = await axios.post(
      `https://artlive.artisticmilliners.com:8081/ords/art/wb_header/upload/image?${string}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart-formdata",
        },
      }
    );

    return response;
  } catch (error) {
    console.error("Error posting image:", error);
    throw error;
  }
};

export { postIncident, postImage };
