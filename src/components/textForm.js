// import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const handleupcase = (event) => {
        console.log("changed to the upper case")
        setText(event.target.value)
    }

    const changetoupper = () => {
        console.log(Text);
        const newtext = Text.toUpperCase()
        setText(newtext);
        props.ShowAlert("changed to uupercase", 'success')

    }

    const changetolower = () => {
        console.log(Text);
        const newtext = Text.toLowerCase();
        setText(newtext);
        props.ShowAlert("changed to lowercase", 'success')

    }

    function capitalizeAfterFullStop(text) {
        return Text.replace(/(?:^|\. *)([a-z])/g, function (match, group1) {
            return match.replace(group1, group1.toUpperCase());
        });
    }

    const grammerCorrect = () => {
        const newtext = capitalizeAfterFullStop();
        setText(newtext);
        props.ShowAlert("grammar is corrected", 'success')
    }

    const [Text, setText] = useState("enter text here")
    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3 ">
                    <label htmlFor="mybox" className="form-label">Example textarea</label>
                    <textarea className="form-control" value={Text} onChange={handleupcase} style={{ backgroundColor: props.mode === 'dark' ? '#6c757d' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
                    <button className='btn btn-primary mr-4 my-4' onClick={changetoupper} type='submit'>Transform to upper</button>
                    <button className='btn btn-primary mr-4' onClick={changetolower} type='submit'>Transform to lower</button>
                    <button className='btn btn-primary mr-4' onClick={grammerCorrect} type='submit'> correction in grammer</button>
                </div>
                <div className='conatiner-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                    <h2>counting words of the paragraph</h2>
                    <p>{Text.split(" ").length} words and {Text.length} are total characters in paragraph</p>
                    <p>{.008 * Text.split(" ").length} time to read each word of paragraph</p>
                </div>
                <div className='container-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h2>Preview of your text</h2>
                    <p>{Text}</p>
                </div>
            </div>
        </>
    )
}
