import { useParams } from 'react-router';

const MailboxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams();
    const selectedBox = mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );

    if (!selectedBox) return <h2>Mailbox not found</h2>
    return (
        <>
            <dl key={selectedBox._id}>
                <dt>Box ID:</dt>
                <dd>{selectedBox._id}</dd>
                <dt>Box Holder:</dt>
                <dd>{selectedBox.boxOwner}</dd>
                <dt>Box Size:</dt>
                <dd>{selectedBox.boxSize}</dd>
            </dl>
        </>
    )
}

export default MailboxDetails