

const Footer = () => {
    return (
        <div>
          <footer className="footer p-10 bg-base-200 text-base-content">
          <div>
          <img src="https://i.ibb.co/KWDW4V2/logo-3.png" alt="" className="w-20 h-30"/>
          <p>Web Development</p> 
          </div>
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    
  </nav> 
  <nav>
    <header className="footer-title">Adderss</header> 
    <a className="link link-hover">Sylhet</a> 
    <a className="link link-hover">Mirabazar</a> 
    <a className="link link-hover">EverGreen 7</a> 
    
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>  
        </div>
    );
};

export default Footer;