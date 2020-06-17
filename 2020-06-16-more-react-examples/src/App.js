import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';

// note: same thing as ternary line below
// let classStr = ''
// if (props.isActive === true) classStr = 'is-active'

function Tab (props) {
  const classStr = props.isActive === true ? 'is-active' : ''

  return (
    <li className={classStr}><a onClick={props.clickFn}>{props.label}</a></li>
  )
}

function Tabs (props) {
  const [activeTabId, setActiveTabId] = useState("TAB_MON")

  const clickMonTab = () => { setActiveTabId("TAB_MON") }
  const clickTueTab = () => { setActiveTabId("TAB_TUE") }
  const clickWedTab = () => { setActiveTabId("TAB_WED") }
  const clickThuTab = () => { setActiveTabId("TAB_THU") }

  return (
    <div class="tabs is-boxed is-medium">
      <ul>
        <Tab label="Monday" isActive={activeTabId === 'TAB_MON'} clickFn={clickMonTab} />
        <Tab label="Tuesday" isActive={activeTabId === 'TAB_TUE'} clickFn={clickTueTab} />
        <Tab label="Wednesday" isActive={activeTabId === 'TAB_WED'} clickFn={clickWedTab} />
        <Tab label="Thursday" isActive={activeTabId === 'TAB_THU'} clickFn={clickThuTab} />
      </ul>
    </div>
  )
}

function MainPageContent (props) {
  return (
    <h1>TODO: main page content</h1>
  )
}

function App () {
  return (
    <section className="section">
      <div className="container">
        <Tabs />
        <MainPageContent />
      </div>
    </section>
  );
}

export default App;
