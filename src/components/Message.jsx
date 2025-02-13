import React from 'react'
import {
  bnbConcert,
  celebBday,
  chikaVMs,
  csbaby,
  firstConvo,
  firstIloveyou,
  firstTaunt
} from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
    { Image: firstConvo, title: 'First Convo', description: "First time ta mag chat wala ko nag expect manapak ka(me nga naanad gina ignore chat LOL)."},
    { Image: firstIloveyou, title: 'First I ❤️ you', description: "Until subong wala gid ko gaka umay simo nga Iloveyouuu!"},
    { Image: celebBday, title: 'After Birthday Celeb', description: "Ikaw lang gid gin sugiran ko di kay di ko tani gusto mag celebrate pero of course! nag enjoy gid ko di(naka smack bala ya :*)."},
    { Image: csbaby, title: 'CS Baby', description: "Syempre kuno abi na typo lang HAHAHAH!"},
    { Image: chikaVMs, title: 'Chika Through VMs', description: "Hays TTEC Chika minute days hehe."},
    { Image: firstTaunt, title: 'First mo nga Pangulit', description: "Kabalo ka nana aa, ako na uto-uto HHH yut."}, 
    { Image: bnbConcert, title: 'To Ben&Ben Concert', description: "First concert with you hehe syempre updon taka kay diko magpasugot sila lang may mga pares(except reniel... Brooooo!)"},  

  ]
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Our Messages
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>

        </div>
      </div>
    </div>
  )
}

export default Message