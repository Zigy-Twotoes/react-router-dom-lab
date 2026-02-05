
import { Link } from "react-router"


const MailboxList = ({ mailboxes }) => {
    return (
        <>
            <h2>Mailboxes</h2>
            <ul>
                {mailboxes.map((selectedBox, index) => (
                    <li className="mail-box" key={selectedBox._id}>
                        <Link to={`/mailboxes/${index + 1}`}>
                            <p>{selectedBox._id}</p>
                            <p>{selectedBox.boxOwner}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MailboxList