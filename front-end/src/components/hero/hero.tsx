import { LuLibrary } from "react-icons/lu";
import { FcIdea } from "react-icons/fc";
import { GrTechnology } from "react-icons/gr";
import { Spronsors } from "..";

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='h-[90vh] bg-gradient-to-t from-[#042548] from-0% via-[#5a87ac] via-50% to-[#fff] to-100%'>
      <div className="container">
        <div className="mx-auto flex items-center justify-center gap-0 py-[6.4rem] ">
          <div className='w-[40%] p-4 '>
              <h1 className='text-5xl font-bold hero__subtitle_1'>Assalomu alaykum</h1>
              <h3 className='text-2xl font-bold my-2 '><span className='hero__subtitle_1'>JA Blog</span> saytiga xush kelibsiz.</h3>
              <p className="text-lg text-black-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit impedit necessitatibus sunt cupiditate assumenda soluta possimus officiis aliquam quo dolores.</p>
              <ul className="mt-3 flex items-center gap-2 rounded-md p-3 bg-[#ffffff3d]">
                <li className="flex items-center gap-2 border-r-2 last:border-r-0">
                  <LuLibrary color={'#444'} size={'3.2rem'}/>
                  <span className="text-[14px]">Hayotiy situatsiyalar</span>
                </li>
                <li className="flex items-center gap-2 border-r-2 last:border-r-0">
                  <GrTechnology color={'#444'} size={'3.2rem'}/>
                  <span className="text-[14px]">Zamonaviy texnologiyalar</span>
                </li>
                <li className="flex items-center gap-2 border-r-2 last:border-r-0">
                  <FcIdea color={'#4a95f7'} size={'3.2rem'}/>
                  <span className="text-[14px]">Bizzness g'oyalar</span>
                </li>
              </ul>
          </div>
          <div className='w-[45%] p-3'>
              <div className='w-[80%] mx-auto'>
                  <img src="next.svg" alt="logo" className='mix-blend-darken' />
              </div>
          </div>
        </div>
        <Spronsors />
      </div>
    </div>
  )
}

export default Hero