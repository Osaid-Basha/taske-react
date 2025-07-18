
import st from "./Navbar.module.css";
function Navbar() {
  return (
    <div>
      <nav className= {`navbar ${st.navbg}`}>
        <div className="container">
          <a className="navbar-brand text-white text-mb-0 fw-bold fs-3">Start Bootstrap</a>
          <div className="d-flex gap-2 gap-md-3">
            <div>
            <a href="/home"  className={`${st.colorB} btn  btn-lg text-white text-mb-0 fw-bold fs-5 me-2  `}>PORTFOLIO</a>
            </div>
             <div>
            <a href="/home"  className={`${st.colorB} btn  btn-lg text-white text-mb-0 fw-bold fs-5 me-2  `}>ABOUT</a>
            </div>
             <div>
            <a href="/about" className={`${st.colorB} btn  btn-lg text-white text-mb-0 fw-bold fs-5 me-2  `}>CONTACT</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;