
import { useState } from "react"
import { useNavigate } from "react-router"

const initialState = {
    boxOwner: "",
    boxSize: "",
}

const MailboxForm = ({ addBox }) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        addBox(formData);
        setFormData(initialState);
        navigate("/mailboxes")
    }
    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    return (
        <main>
            <h2>Add New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Name:</label>
                <input
                    type="text"
                    id="boxOwner"
                    name="boxOwner"
                    value={formData.boxOwner}
                    onChange={handleChange}
                />
                <label htmlFor="boxSize">Box Size:</label>
                <select
                    id="boxSize"
                    name="boxSize"
                    value={formData.boxSize}
                    onChange={handleChange}
                >
                    <option value="">Select a Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </main >

    )
}



export default MailboxForm