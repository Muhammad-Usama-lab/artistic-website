import { ART_LIVE_AXIOS_INSTANCE } from "../config/axios";

const postIncident = async (data) => {
  try {
    const response = await ART_LIVE_AXIOS_INSTANCE.post("/ords/art/wb_header/create_wb_header", 
      {
        wb:[{
          master:data
        }]
      }
    );
    return response;
  } catch (error) {
    console.error("Error posting incident:", error);
    throw error;
  }
};

export { postIncident };
