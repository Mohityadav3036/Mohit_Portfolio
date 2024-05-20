
import {About, Contact, Experience, Feedbacks,Hero,Navbar, Tech, Works,StarsCanvas} from './components'
import { BrowserRouter } from "react-router-dom"
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
     <BrowserRouter>
      <div className='relative z-0  bg-primary'>
    
        {/* for navibar */}
       <div className='bg-cover bg-no-repeat bg-center'>
       {/* <StarsCanvas /> */}
        <Navbar/>
         
        <Hero/>
       
       </div>
       {/* middle sections */}
       <About/>
       <Experience/>
       <Tech/>
       <Works/>
       {/* <Feedbacks/> */}

       {/* For Star in the bg */}
       <div className='relative z-0'>
          <Contact/>
          {/* <StarsCanvas/> */}
       </div>
       <div className=''>
        <Footer/>
       </div>
       

      </div>
     </BrowserRouter>
    </div>
  )
}

export default App