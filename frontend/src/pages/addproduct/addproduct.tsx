import { Navbar } from "../../components/Navbar"
import "./addproduct.css"
export const Addproduct = () => {
  return (
    <> 
 <Navbar />
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
            <button>Post</button>
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
            <button>Post</button>
        </form>
    </div>
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
            <button>Post</button>
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
            <button>Post</button>
        </form>
    </div>
    </div>
   
  </>
  )
}
