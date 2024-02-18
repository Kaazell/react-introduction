export function Greetings(props) {
  console.log(props);
  if (props.age > 100) {
    return <p>Tu n'es pas jeune</p>;
  } else {
    return (
      <>
        <p>Hello {props.firstName}</p>
        <p>You are {props.age} years old</p>
        <p>{props.isSunny ? <ItsSunny /> : <ItsRainy />}</p>
      </>
    );
  }
}

function ItsSunny() {
  return <h1>Il fait beau</h1>;
}
function ItsRainy() {
  return <h1>Il pleut </h1>;
}
