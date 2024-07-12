import "./orderpage.css"
export const Orderpage = () => {
  return (
    <>
    <div className='header3'>
    <div className='header4'>
  <a href=""><img src="../../public/images/p2.png" alt="" /></a>
    <nav>
    <div className="nav-link">
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">About Us</a></li>
      <li><a href="">Testimonials</a></li>
      <li><a href="">Contact Us</a></li>
      <li ><a href="">Sign up</a></li>
      <li ><a href="">Log In</a></li>
    </ul>
    </div>
    </nav>
  </div>
  </div>
  <div className="part3">
    <button className="A">Farmer</button>
    <button className="B">Farmer</button>
  </div>
  <div className="weather">
    <h2>Meru</h2>
    <img className="pic1"  src="../../public/images/icon4.png" alt="" />
    <img className="pic2" src="../../public/images/icon6.png" alt="" />
    <img className="pic3" src="../../public/images/icon5.png" alt="" />
    <h3>June 9th</h3>
    <h4>23 Degrees</h4>
    <h5>Strong winds</h5>
  </div>
  <div className="harvests">
    <div className="harvest1">
        <form>
            <h2>Details</h2>
            <label htmlFor="name">Description</label>
            <input type="text" id="description" name="description" required />
            <label htmlFor="name">Location</label>
            <input type="text" id="location" name="location" required />
            <div className="flex">
            <label className="C" htmlFor="name">Price</label>
            <label className="D" htmlFor="name">Harvest Time</label>
            </div>
            <input className="E" type="text" id="harvesttime" name="harvesttime" required />
            <input className="F" type="text" id="price" name="price" required />
            <label htmlFor="name">Contact</label>
            <input type="tel" id="contact" name="contact" required  />
            <h3>On Track</h3>
        </form>
    </div>
    <div className="harvest1">
    <form>
            <h2>Details</h2>
            <label htmlFor="name">Description</label>
            <input type="text" id="description" name="description" required />
            <label htmlFor="name">Location</label>
            <input type="text" id="location" name="location" required />
            <div className="flex">
            <label className="C" htmlFor="name">Price</label>
            <label className="D" htmlFor="name">Harvest Time</label>
            </div>
            <input className="E" type="text" id="harvesttime" name="harvesttime" required />
            <input className="F" type="text" id="price" name="price" required />
            <label htmlFor="name">Contact</label>
            <input type="tel" id="contact" name="contact" required  />
            <h4>Late</h4>
        </form>
    </div>
    </div>
    
    <footer>
    <a href=""><img src="../../public/images/p2.png" alt="" /></a>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ducimus libero id natus asperiores ipsum consequatur, eum eveniet, ullam ipsa aut autem obcaecati. Obcaecati laborum saepe totam temporibus quasi error.</p>
    <div className="contents">
    <a href="https://www.instagram.com/"><img src="../../public/images/insta.png" alt="" /></a>
    <a href="https://twitter.com/"><img src="../../public/images/twitter.png" alt="" /></a>
    <a href="https://youtube.com/"><img src="../../public/images/youtube.png" alt="" /></a>
    <a href="https://web.whatsapp.com/"><img src="../../public/images/whatsapp.png" alt="" /></a>
    </div>
    <p className='boom'>AgriGrow © 2024 Privacy Policy</p>
    <ul>
    <li><a href="">Home</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Testimonials</a></li>
        <li><a href="">Contact Us</a></li>
        <li ><a href="">Sign up</a></li>
        <li ><a href="">Log In</a></li>
        </ul>
    </footer>
  </>
  )
}
