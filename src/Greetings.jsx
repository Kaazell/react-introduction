export function Greetings(props) {
  console.log(props);

  return (
    <>
      <p>Hello {props.firstName}</p>
      <p>You are {props.age} years old</p>
    </>
  );
}
