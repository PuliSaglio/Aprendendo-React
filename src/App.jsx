import Student from "./Student.jsx";
import Button from "./Button/Button.jsx";

function App() {
  return(
    <>
      <Student name="Spongebob" age={30} isStudent ={true}/>
      <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Lula Molusco" age={48} isStudent={true}/>
      <Button></Button>
    </>
  );
}

export default App
