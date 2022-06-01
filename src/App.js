import React, {useState} from 'react';
import './App.css';
import { getMonth } from './util'
import CalendarHeader from 'components/CalendarHeader';
import Siderbar from 'components/Siderbar';
import Month from 'components/Month';

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  return (
    <React.Fragment>
      <div className="h-screen flex flex-columns">
        <CalendarHeader />
        <div className="flex flex-1">
          <Siderbar />
          <Month month={ currentMonth }/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
