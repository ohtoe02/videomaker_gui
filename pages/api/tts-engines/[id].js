import {API_URL} from "../../../app/constants";
import axios from "axios";

export default async function handler(req, res) {
  const { data: engines } = await axios.get(`${API_URL}/tts-engines`)

  res.status(200).json(engines.find(engine => engine._id === req.query.id))
}