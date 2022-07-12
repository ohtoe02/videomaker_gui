import {tts_engines} from "../../../app/constants";

export default function handler(req, res) {
  res.status(200).json(tts_engines)
}