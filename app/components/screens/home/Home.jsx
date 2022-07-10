import Meta from "../../../utils/Meta";
import styles from "./Home.module.scss"
import {
    Autocomplete,
    Button,
    Divider,
    FormControl,
    InputLabel, MenuItem, Select,
    TextField,
    ToggleButton,
    ToggleButtonGroup
} from "@mui/material";
import {useEffect, useState} from "react";

const Home = ({ tts_engines }) => {
    const [currentVoices, setCurrentVoices] = useState([])
    const [tts_engine, setTtsEngine] = useState('tiktok')
    const [currentVoice, setCurrentVoice] = useState('')
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
        client_id: '',
        client_secret: '',
        subreddit: '',
        subreddit_post_id: '',
        comment_length: '',
        times_to_run: '',
        comment_opacity: '',
        voice: '',
    })

    useEffect(() => {
        const voices = tts_engines.find(item => item._id === tts_engine).voices
        const currentVoices = Object.keys(voices)
        setCurrentVoices(currentVoices)
    }, [tts_engine, tts_engines])

    const handleInputUpdate = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(e.target)
        setInputs(values => ({...values, [name]: value}))
    }

    const handleTTSEngineUpdate = (e) => {
        setTtsEngine(e.target.value)
        setCurrentVoice('')
    }

    const handleVoiceChange = (e, value) => {
        setCurrentVoice(value)
    }

    const submitHandler = () => {

    }

    return (
    <div style={ {padding: '16px 0'} }>
        <Meta title={'Главная'} description={"Описание"} />
        <section className={styles.wrapper}>
            <h1>RedditVideoMaker 🎥</h1>
            <form className={styles.form} onSubmit={submitHandler}>
                <section className={styles['input-section']}>
                    <TextField
                      required
                      name={'username'}
                      id="username-input"
                      label="Reddit username"
                      value={inputs.username}
                      onChange={e => handleInputUpdate(e)}
                    />
                    <TextField
                      required
                      name={'password'}
                      id="password-input"
                      label="Reddit password"
                      type="password"
                      value={inputs.password}
                      onChange={e => handleInputUpdate(e)}
                    />
                    <TextField
                      required
                      name={'client_id'}
                      id="client-id-input"
                      label="Reddit client ID"
                      value={inputs.client_id}
                      onChange={e => handleInputUpdate(e)}
                    />
                    <TextField
                      required
                      name={'client_secret'}
                      id="client-secret-input"
                      label="Reddit client secret"
                      value={inputs.client_secret}
                      onChange={e => handleInputUpdate(e)}
                    />
                    <TextField
                      required
                      name={'subreddit'}
                      id="subreddit-input"
                      label="Subreddit"
                      placeholder={"r/subreddit"}
                      className={styles.wide}
                      value={inputs.subreddit}
                      onChange={e => handleInputUpdate(e)}
                    />
                    <Divider className={styles.wide}/>
                    <TextField
                      name={'subreddit_post_id'}
                      id="post-id-input"
                      label="Subreddit post ID"
                      type={"number"}
                      value={inputs.subreddit_post_id}
                      onChange={e => handleInputUpdate(e)}
                    />
                    <TextField
                      name={'times_to_run'}
                      id="times-to-run-input"
                      label="Times to run"
                      type={"number"}
                      placeholder={'Default - 1'}
                      value={inputs.times_to_run}
                      onChange={e => handleInputUpdate(e)}
                    />
                    <TextField
                      name={'comment_length'}
                      id="max-comment-length-input"
                      label="Max comment length"
                      type={"number"}
                      placeholder={'Default - 500'}
                      value={inputs.comment_length}
                      onChange={e => handleInputUpdate(e)}
                    />
                    <TextField
                      name={'comment_opacity'}
                      id="opacity-input"
                      label="Comment opacity"
                      type={"number"}
                      placeholder={'0.0 - 1.0'}
                      value={inputs.comment_opacity}
                      onChange={e => handleInputUpdate(e)}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="tts-select-label">TTS Engine</InputLabel>
                        <Select
                          name={'tts_engine'}
                          labelId="tts-select"
                          id="demo-simple-select"
                          value={tts_engine}
                          label="TTS Engine"
                          onChange={e => handleTTSEngineUpdate(e)}
                        >
                            <MenuItem value={'tiktok'}>TikTok</MenuItem>
                            <MenuItem value={'gtts'}>Google TTS</MenuItem>
                            <MenuItem value={'aws'}>AWS Polly</MenuItem>
                            <MenuItem value={'streamlabs'}>StreamLabs Polly</MenuItem>
                        </Select>
                    </FormControl>
                    <Autocomplete
                      name={'voice'}
                      disablePortal
                      id={"voice-box"}
                      options={currentVoices}
                      renderInput={(params) => <TextField {...params} label="Voice" />}
                      value={currentVoice}
                      onChange={(e, value) => handleVoiceChange(e, value)}
                    />
                    <ToggleButtonGroup >
                        <ToggleButton value='light'>Light</ToggleButton>
                        <ToggleButton value='dark'>Dark</ToggleButton>
                    </ToggleButtonGroup>
                </section>
                <Button
                  sx={{fontWeight: '800', marginTop: '24px', position: 'absolute', bottom: '3rem', right: '2rem'}}
                  variant="contained"
                  type={"submit"}
                >
                    Accept
                </Button>
            </form>
        </section>
    </div>
    )
}

export default Home
