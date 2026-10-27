// Define the data Greeting expects so TypeScript can check every use of it.
interface GreetingProps {
  name: string
}

function Greeting({ name }: GreetingProps) {
  return <div>Hello, {name}!</div>
}

export default Greeting
