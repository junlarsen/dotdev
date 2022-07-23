import { Heading } from '../atoms/heading';
import { Text } from '../atoms/text';
import { Link } from '../atoms/link';
import { Navigation } from '../organisms/navigation';

export default function App(): JSX.Element {
  return (
    <div>
      <Navigation />

      <Heading as="h1" size="h1">
        Hello world
      </Heading>
      <Text>Hello world</Text>
      <Link href="https://google.com">Link to Google</Link>
    </div>
  );
}
