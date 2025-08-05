import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/builder-demo">Builder Demo</Link>
        </li>
        <li>
          <Link to="/kelvin">Kelvin</Link>
        </li>
        <li>
          <Link to="/choice">Choice</Link>
        </li>
      </ul>
    </nav>
  );
}
