import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({translateText, lang}) => {

        const [translatedText, setTranslatedText] = useState('');

        useEffect(() => {

            const axiosConfig = {
                baseURL: 'https://translation.googleapis.com/language/translate/v2',
                params: {
                    q: translateText,
                    target: lang.val,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            }

            const translate = async () => {
                const res = await axios.post('https://translation.googleapis.com/language/translate/v2', '', axiosConfig);
                console.log(res);
                // setTranslatedText(res);
            }
            translate();
        }, [translateText, lang])

        return (
            <div>

            </div>
        );
    }
;

export default Convert;