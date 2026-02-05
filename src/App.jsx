import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router";
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';

function App() {
  const [mailboxes, setMailboxes] = useState([])
  const addBox = (box) => {
    setMailboxes([...mailboxes, { ...box, _id: mailboxes.length + 1 }])
  }

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>}></Route>
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />}></Route>
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />}></Route>
        <Route path="mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />}></Route>
      </Routes>
    </>
  )
}

export default App
