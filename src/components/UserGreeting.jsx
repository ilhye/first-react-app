export default function UserGreeting(props) {
  const welcome = <h1>Logged In {props.username}</h1>;
  const logPrompt = <h1>Please logged in {props.username}</h1>;

  return props.isLoggedIn ? welcome : logPrompt;
}
