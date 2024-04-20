import ListGroup from "./components/ListGroup";
import Card from "./components/Card";
import Button from "./components/Button";
import Student from "./components/Student";
import UserGreeting from "./components/UserGreeting";

export default function App() {
  return (
    <>
      <ListGroup />
      <Card />
      <Button />
      <Student name="Tina" age={19} isStudent={true}/>
      <Student name="Ash" age={19} isStudent={true}/>
      <Student name="Erin" age={19} isStudent={true}/>
      <Student name="Erica" age={19} isStudent={true}/>
      <Student name="Queenie" age={19} isStudent={true}/>
      <Student name="Bedj" age={19} isStudent={true}/>
      <Student name="Danny" age={19} isStudent={true}/>
      <Student name="Kyrelle" age={19} isStudent={true}/>
      <Student name="Shai" age={19} isStudent={true}/>
      <Student/>
      <UserGreeting isLoggedIn={false} username="ilhye"/>
    </>
  );
}
