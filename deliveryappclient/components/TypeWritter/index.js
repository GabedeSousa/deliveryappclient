import { useState, useEffect } from 'react';

export default function TypeWritter(props) {
    const [phrase, setPhrase] = useState('');

    useEffect(() => {
        let currentText = '';
        props.text.split('').forEach((char, index) => {
            setTimeout(() => {
                currentText = currentText.slice(0, -1);
                console.log(currentText)
                currentText += char;
                if(props.text.lenght != index +1)
                    currentText += '❙'
                setPhrase(currentText);
            }, 200 + (index * 100));
        })
    }, [])

    return (
        <>{phrase}</>
    )
}