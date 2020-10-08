import React, { useState } from 'react';

function AddATask(props) {
    const [name, setName] = useState("")
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();

        console.log(status);
        let res = await actions.addapost({
            name,
            start,
            end,
            description,
            status,
        });
        console.log(res);
    }

    return (
        <div>

        </div>
    );
}

export default AddATask;