import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({translateText, lang}) => {

        const [translatedText, setTranslatedText] = useState('');
        const [debTranslateText, debSetTranslateText] = useState(translatedText);
        const [translationResult, setTranslationResult] = useState('');

        useEffect(() => {

            const axiosConfig = {
                baseURL: 'https://translation.googleapis.com/language/translate/v2',
                params: {
                    q: debTranslateText,
                    target: lang.val,
                    format: 'text',
                    source: 'en',
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            }
            const translate = async () => {
                const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, axiosConfig);
                setTranslationResult(data.data.translations[0].translatedText);
            };
            if(debTranslateText){
                translate();
            }

        }, [debTranslateText, lang])

        useEffect(() => {
            const timer = setTimeout(() => {
                debSetTranslateText(translateText);
            }, 500)
            return () => {
                clearTimeout(timer);
            }
        }, [translateText])

        return (
            <div>
                {translationResult}
            </div>
        );
    }
;

export default Convert;