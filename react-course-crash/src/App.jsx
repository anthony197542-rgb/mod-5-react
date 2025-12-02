import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from './components/Modal.jsx'


function App() {
  return (
    <div>
       <Title />
       <div className="todo__wrqpper">
       <Todo
        title="Finish Frontend Simplified" 
        paragraph="Code anlong with Frontend Simplified step by step."
         />
      <Todo
       title="Finish the interview section" 
      paragraph="Finish every interview question in the next 6 weeks."
      />
       <Todo
        title="Land a $100k job" 
        paragraph="Apply to 100 Jobs" />
 </div>
{/*} <Modal title="Are you want to delete?" /> */}

</div>
  );
}

export default App;
