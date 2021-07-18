import React from 'react';
import ExpensesState from './store/state/expensesState';
import AddTransections from './components/AddTransections';
import ShowTransections from './components/ShowTransections';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expenses Tracker</h1>
        <ExpensesState>
          <AddTransections />
          <ShowTransections />
        </ExpensesState>
      </header>
    </div>
  );
}

export default App;
