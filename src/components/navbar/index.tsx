import "./index.scoped.sass";

function Navbar() {
  return (
    <div className="container">
      <h1>Cinematographer</h1>
      <ul>
        <li className="active">Home</li>
        <li>Projects</li>
        <li>Tech</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
