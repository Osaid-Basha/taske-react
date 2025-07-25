import po from './About.module.css'
function About() {
  return <>
  
  <div className={`d-flex flex-column justify-content-center align-items-center mt-5 ${po.colorBg}`}>
      <h1 className={`text-center text-uppercase text-white fs-1 fw-bold ${po.colorH1}`}>About</h1>
       <div className={`d-flex justify-content-center align-items-center mt-3 `}>
    <span ><div className={po.str}></div></span>
    <svg className={`svg-inline--fa fa-star ${po.soso}`} width="3em" height="3em" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>
    <span><div className={po.str}></div></span>
  </div>
  <div className='d-flex justify-content-center align-items-center mt-5 mb-5 w-50 gap-5'>
    <div className='d-flex justify-content-center align-items-center mt-3 '>
        <p className='text-white fs-5 fw-bold'>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
    <div className='d-flex justify-content-center align-items-center mt-3 '>
        <p className=' text-white fs-5 fw-bold'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
    </div>
  </div>
  <div className=''>
    <button className={`${po.colorH2} text-white fs-5 fw-bold`}>Free Download!</button>
  </div>
  </div>
  </>
}
export default About;