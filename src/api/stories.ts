import { Story } from "@screens/Main/Home/Stories";
import axios from "axios";
import { JSON_SERVER_BASE_URL } from ".";

export const fetchStories = (): Promise<Story[]> =>
  axios.get(`${JSON_SERVER_BASE_URL}/stories`).then(response => response.data);
