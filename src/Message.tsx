function Message() {
  const name = 'Mosh';
  if(name)
    return <h1>Hello World {name}</h1>;
  return <h1>Hello desconhecido</h1>;
}

export default Message;