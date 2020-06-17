import React, { useState} from 'react';
import Tabs from './Tabs.js';
import ThursdayContent from './Thursday.js';
import './App.css';

function MainPageContent (props) {
  let cmp = <h1 style={{backgroundColor: 'red', padding: '20px', fontWeight: 600, color: '#fff'}}>Developer Error: invalid tabId!</h1>
  if (props.activeTabId === 'TAB_MON') cmp = <MondayContent />
  else if (props.activeTabId === 'TAB_TUE') cmp = <TuesdayContent />
  else if (props.activeTabId === 'TAB_WED') cmp = <WednesdayContent />
  else if (props.activeTabId === 'TAB_THU') cmp = <ThursdayContent />

  return (
    <main>{cmp}</main>
  )
}

function App () {
  const [activeTabId, setActiveTabId] = useState("TAB_THU")

  return (
    <section className="section">
      <div className="container">
        <Tabs activeTabId={activeTabId} setActiveTabId={setActiveTabId} />
        <MainPageContent activeTabId={activeTabId} />
      </div>
    </section>
  );
}

export default App;

function MondayContent () {
  return (
    <h1>TODO: the Monday content</h1>
  )
}

function TuesdayContent () {
  return (
    <h1>TODO: the Tuesday content</h1>
  )
}

function WednesdayContent () {
  return (
    <h1>TODO: the Wednesday content</h1>
  )
}
