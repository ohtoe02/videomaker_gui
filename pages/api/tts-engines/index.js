// noinspection NonAsciiCharacters
import {tts_engines} from "../../../app/constants";

export const TtsEngines = [
  {
    _id: 'tiktok',
    title: 'TikTok',
    voices: {
      'Ghostface': {
        'id': 'en_us_ghostface',
        'description': ''
      },
      'Chewbacca': {
        'id': 'en_us_chewbacca',
        'description': ''
      },
      'C3PO': {
        'id': 'en_us_c3po',
        'description': ''
      },
      'Stitch': {
        'id': 'en_us_stitch',
        'description': ''
      },
      'Stormtrooper': {
        'id': 'en_us_stormtrooper',
        'description': ''
      },
      'Rocket': {
        'id': 'en_us_rocket',
        'description': ''
      },
    }
  },

  {
    _id: 'aws',
    title: 'AWS Polly',
    voices: {'Brian': {
        'id': 'Brian',
        'description': ''
      },
      'Emma': {
        'id': 'Emma',
        'description': ''
      },
      'Russell': {
        'id': 'Russell',
        'description': ''
      },
      'Joey': {
        'id': 'Joey',
        'description': ''
      },
      'Matthew': {
        'id': 'Matthew',
        'description': ''
      },
      'Joanna': {
        'id': 'Joanna',
        'description': ''
      },
      'Kimberly': {
        'id': 'Kimberly',
        'description': ''
      },
      'Amy': {
        'id': 'Amy',
        'description': ''
      },
      'Geraint': {
        'id': 'Geraint',
        'description': ''
      },
      'Nicole': {
        'id': 'Nicole',
        'description': ''
      },
      'Justin': {
        'id': 'Justin',
        'description': ''
      },
      'Ivy': {
        'id': 'Ivy',
        'description': ''
      },
      'Kendra': {
        'id': 'Kendra',
        'description': ''
      },
      'Salli': {
        'id': 'Salli',
        'description': ''
      },
      'Raveena': {
        'id': 'Raveena',
        'description': ''
      }
    }
  },

  {
    _id: 'streamlabs',
    title: 'StreamLabs Polly',
    voices: {
      'Brian': {
        'id': 'Brian',
        'description': ''
      },
      'Emma': {
        'id': 'Emma',
        'description': ''
      },
      'Russell': {
        'id': 'Russell',
        'description': ''
      },
      'Joey': {
        'id': 'Joey',
        'description': ''
      },
      'Matthew': {
        'id': 'Matthew',
        'description': ''
      },
      'Joanna': {
        'id': 'Joanna',
        'description': ''
      },
      'Kimberly': {
        'id': 'Kimberly',
        'description': ''
      },
      'Amy': {
        'id': 'Amy',
        'description': ''
      },
      'Geraint': {
        'id': 'Geraint',
        'description': ''
      },
      'Nicole': {
        'id': 'Nicole',
        'description': ''
      },
      'Justin': {
        'id': 'Justin',
        'description': ''
      },
      'Ivy': {
        'id': 'Ivy',
        'description': ''
      },
      'Kendra': {
        'id': 'Kendra',
        'description': ''
      },
      'Salli': {
        'id': 'Salli',
        'description': ''
      },
      'Raveena': {
        'id': 'Raveena',
        'description': ''
      }
    },
  },
  {
    _id: 'gtts',
    title: 'Google TTS',
    voices: {
      'Russian': {
        'id': 'ru',
        'description': ''
      },
      'English': {
        'id': 'en',
        'description': ''
      },
      'Deutsch': {
        'id': 'de',
        'description': ''
      },
    }
  }
]

export default function handler(req, res) {
  res.status(200).json(tts_engines)
}