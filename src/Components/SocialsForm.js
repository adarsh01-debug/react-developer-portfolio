import React from 'react';
import './socialsForm.css';

function SocialsForm() {
    return (
        <div className="create">
            <h2>...or send me a message</h2>
            <form>
                <input 
                    type="text" 
                    placeholder="your name"
                    required
                />
                <textarea
                    placeholder="send me a message"
                    required
                >
                </textarea>
                <button>send message  &#8594;</button>
            </form>
        </div>
    )
}

export default SocialsForm
