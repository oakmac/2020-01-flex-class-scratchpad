import React from 'react';

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
  const clickMonTab = () => { props.setActiveTabId("TAB_MON") }
  const clickTueTab = () => { props.setActiveTabId("TAB_TUE") }
  const clickWedTab = () => { props.setActiveTabId("TAB_WED") }
  const clickThuTab = () => { props.setActiveTabId("TAB_THU") }

  return (
    <div className="tabs is-boxed is-medium">
      <ul>
        <Tab label="Monday" isActive={props.activeTabId === 'TAB_MON'} clickFn={clickMonTab} />
        <Tab label="Tuesday" isActive={props.activeTabId === 'TAB_TUE'} clickFn={clickTueTab} />
        <Tab label="Wednesday" isActive={props.activeTabId === 'TAB_WED'} clickFn={clickWedTab} />
        <Tab label="Thursday" isActive={props.activeTabId === 'TAB_THU'} clickFn={clickThuTab} />
      </ul>
    </div>
  )
}

export default Tabs;
