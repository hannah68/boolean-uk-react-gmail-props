import { useState } from 'react'
import Header from './components/Header'
import Emails from './components/Emails'
import initialEmails from './data/emails'
import './styles/app.css'
import LeftMenu from './components/LeftMenu'

const getReadEmails = emails => emails.filter(email => !email.read)
const getStarredEmails = emails => emails.filter(email => email.starred)


const App = () =>{
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [search, setSearch] = useState('')

  // filtered functions==================
  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)
  const searchedEmails = emails.filter(email => {
    if(email.title.toLowerCase().includes(search.toLowerCase())){
      return email
    }
  });
  
  // toggle star=========================
  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }
  // toggle read===========================
  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  // conditional state===================
  let filteredEmails = emails
  if (hideRead) filteredEmails = getReadEmails(filteredEmails)
  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)
  if(search) filteredEmails = searchedEmails

  return (
    <div className="app">
      <Header setSearch={setSearch} search={search}/>
      <LeftMenu 
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        setHideRead={setHideRead}
        hideRead={hideRead}/>
        
      <main className="emails">
        <Emails 
          filteredEmails={filteredEmails}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
          />
      </main>
    </div>
  )
}

export default App