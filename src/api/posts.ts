import axios from "axios";
import { PostObject } from "@components/Post";
import { BASE_URL } from ".";
import { ImageObject } from "@screens/Main/Search";

const fetchPosts = (): Promise<PostObject[]> =>
  axios.get(`${BASE_URL}/posts`).then(response => response.data);

const fetchSearchImages = (): Promise<ImageObject[]> =>
  axios.get(`${BASE_URL}/images`).then(response => response.data);

export { fetchPosts, fetchSearchImages };
