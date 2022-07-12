import {tts_engines} from "../../../app/constants";

export default async function handler(req, res) {
  res.status(200).json(tts_engines.find(engine => engine._id === req.query.id))
}