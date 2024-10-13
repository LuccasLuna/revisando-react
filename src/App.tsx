import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Nova York", "São Paulo", "Tokyo", "Londre", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cidades" />
    </div>
  );
}

export default App;
