import beeLogo from '../images/beeLogo.png'
import githubLogo from '../assets/icons/githubLogo.png'
import linkedin from '../assets/icons/linkedin.png'
import portfolio from '../assets/icons/portfolio.png'

const Footer = () => {
  return (
    <footer  className="text-white flex sm:flex-row sm:justify-between bg-zinc-900 p-1 w-screen min-w-fit max-w-screen flex-wrap items-center gap-x-4 justify-center">
        <div className='flex gap-2 items-center ml-2'>
            <p className='text-xl p-2'>BeeCommerce</p>
        </div>
        <div>
            <h2 className='text-sm'>© Full stack project developed by Javier Sepic</h2>
        </div>
        <div className='flex gap-2'>
          <a href="https://github.com/jsepic89" target="_blank"><img src={githubLogo} className='hover:bg-slate-400 p-2 rounded-md cursor-pointer w-12' alt="" /></a>
          <a href="https://www.linkedin.com/in/javier-sepic/" target="_blank"><img src={linkedin} className='hover:bg-slate-400 p-2 rounded-md cursor-pointer w-12' alt="" /></a>
          <a href="#"><img src={portfolio} className='hover:bg-slate-400 p-2 rounded-md cursor-pointer w-12' alt="" /></a>   
        </div>
    </footer>
  )
}

export default Footer