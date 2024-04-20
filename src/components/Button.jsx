import "../styles/Button.css";

export default function Button() {
  return (
    <>
    <h1 className="button-heading">Button</h1>
      <button
        className="button"
        onClick={() => alert("You Click Me!!")}
      >
        Click Me!
      </button>
    </>
  );
}
