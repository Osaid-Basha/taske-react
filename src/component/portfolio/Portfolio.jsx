import po from './Portfolio.module.css'
import aboutImage1 from '../../assets/circus.png';
import aboutImage2 from '../../assets/cake.png';
import aboutImage3 from '../../assets/cabin.png';
import aboutImage4 from '../../assets/game.png';
import aboutImage5 from '../../assets/safe.png';
import aboutImage6 from '../../assets/submarine.png';
function Portfolio() {
   
  return <div><div className='d-flex flex-column justify-content-center align-items-center mt-5 mb-5'>
    <h1 className={`text-mb-0 fw-bold fs-1 ${po.colorH1}`}>PORTFOLIO</h1>
     <div className={`d-flex justify-content-center align-items-center mt-3 `}>
  <span ><div className={po.str}></div></span>
  <svg className="svg-inline--fa fa-star" width="3em" height="3em" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
  <span><div className={po.str}></div></span>
</div>

     </div>
     <div className='container mt-3 mb-3 w-100'>
  <div className='row justify-content-center align-items-center mb-3'>
    <div className='col-12 col-md-4 '><img src={aboutImage3} className='rounded' alt="" width="400" height="280" /></div>
    <div className='col-12 col-md-4'><img src={aboutImage2}className='rounded' alt="" width="400" height="280" /></div>
    <div className='col-12 col-md-4'><img src={aboutImage1} className='rounded'alt="" width="400" height="280" /></div>
  </div>
  <div className='row justify-content-center align-items-center'>
    <div className='col-12 col-md-4'><img src={aboutImage4}className='rounded' alt="" width="400" height="280" /></div>
    <div className='col-12 col-md-4'><img src={aboutImage5} className='rounded'alt="" width="400" height="280" /></div>
    <div className='col-12 col-md-4'><img src={aboutImage6} className='rounded' alt="" width="400" height="280" /></div>
  </div>
</div>
    </div>
  
}
export default Portfolio;