import { Footer } from 'flowbite-react'
import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function FooterCom() {
  return (
   <Footer container className='border border-t-8 border-teal-500'>
    <div className='w-full max-w-7xl mx-auto'>
      <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
        <div className='mt-5'>
           <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-pink-500 rounded-lg text-white'>
            Fullstack
            </span>
            Blog
          </Link>
        </div>
        <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
           <div>
            <Footer.Title title='ABOUT' />
            <Footer.LinkGroup col>
              <Footer.Link href=''
              target='_blank'
              rel='noopener noreferrer'
              >
                Mern Stack
              </Footer.Link>
              <Footer.Link href=''
              target='_blank'
              rel='noopener noreferrer'
              >
                Double Js
              </Footer.Link>
            </Footer.LinkGroup>
           </div>
           <div>
           <Footer.Title title='FOLLOW US' />
            <Footer.LinkGroup col>
              <Footer.Link href=''
              target='_blank'
              rel='noopener noreferrer'
               >
                GitHub
              </Footer.Link>
              <Footer.Link href=''
              target='_blank'
              rel='noopener noreferrer'
              >
                GitLab
              </Footer.Link>
            </Footer.LinkGroup>
           </div>
           <div>
           <Footer.Title title='LEGAL' />
            <Footer.LinkGroup col>
              <Footer.Link href=''
              target='_blank'
              rel='noopener noreferrer'
              >
                Privacy Policy
              </Footer.Link>
              <Footer.Link href=''
              target='_blank'
              rel='noopener noreferrer'
              >
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
            </div>
        </div>
      </div>
      <Footer.Divider />
      <div className='w-full sm:flex sm:items-center sm:justify-between'>
         <Footer.Copyright  href='#' by='RamsesCorp@@' year={new Date().getFullYear()}/>
         <div className=' flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsInstagram} />
            <Footer.Icon href='#' icon={BsTwitter} />
            <Footer.Icon href='#' icon={BsGithub} />
         </div>
      </div>
    </div>
   </Footer>
  )
}
