import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Nav() {
  return (
    <nav className="flex justify-center py-6 border border-b">
      <ul className="flex gap-2">
        <li>
          <Button asChild variant="outline">
            <Link to="/">Home</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="outline">
            <Link to="/builder-demo">Builder Demo</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="outline">
            <Link to="/kelvin">Kelvin</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="outline">
            <Link to="/choice">Choice</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant="outline">
            <Link to="/components">Components</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
