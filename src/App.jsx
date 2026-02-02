import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router";
import NavBar from './components/NavBar/NavBar';

function App() {
  const [mailboxes, setMailboxes] = useState([])

  return (
    <>
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>}></Route>
        <Route path="/mailboxes" element={<MailboxList />}></Route>
        <Route path="/new-mailbox" element={<MailboxForm />}></Route>
        <Route path="mailboxes/:mailboxId" element={<MailboxDetails />}></Route>
      </Routes>
    </>
  )
}

export default App
