import React, { useRef } from 'react'
import {animate,motion} from "framer-motion"
import Typewriter from "typewriter-effect"
import {BsArrowUpRight, BsChevronDown} from "react-icons/bs"
import me from "../assets/logo.svg"


const Home = () => {

    const clientCount = useRef(null);
    const projectCount = useRef(null);






    const animationClientCount =()=>{
animate(0,100,{
    duration:3,
    onUpdate:(v)=>(clientCount.current.textContent=v.toFixed()),
})
}

const animationProjectCount =()=>{
    animate(0,300,{
        duration:4,
        onUpdate:(v)=>(projectCount.current.textContent=v.toFixed()),
    })
    }

    const animation = {
        h1:{
            initial:{
                x: "-100%",
                opacity:0,
              },

              whileInView:{
                x:0,opacity:1
             }
            },

        button:{
            initial:{
                x: "-100%",
                opacity:0,
              },

              whileInView:{
                x:0,opacity:1
             }
            }  
        }


  return (
    <div id='home'>
        <section>
            <div>
              <motion.h1  {...animation.h1}>
                Hi, I Am <br/>
                Shivam Gupta
              </motion.h1>

              <Typewriter options={{
                strings:["A Developer","A Designer","A Creator"],
                autoStart:true,
                loop:true,
                
                wrapperClassName:"typewriterpara",
              }}/>
            

            <div >
                <a href="mailto:shivamrdr6502@gmail.com">
                    Hire Me
                </a>

                <a href="#work">
                    Projects<BsArrowUpRight />
                </a>
            </div>

            <article>
                <p>
                    +<motion.span whileInView={animationClientCount} ref={clientCount}></motion.span>
                </p>
                <span>Client Worldwide</span>
            </article>

            <aside>
            <article>
                <p>
                    +<motion.span whileInView={animationProjectCount} ref={projectCount}></motion.span>
                </p>
                <span>Projects Done</span>
            </article>

            <article data-special>
                <p>
                   Contact
                </p>
                <span>shivamrdr6502@gmail.com</span>
            </article>
            </aside>
            </div>
        </section>



        <section>
            <img src={me} alt="Shivam" />
            <BsChevronDown/>
        </section>

    </div>
  )
}

export default Home