import React from "react"

const Hero = ({ name }) => {
  return (
    <div
      className="w-full bg-black h-20vh bg-cover bg-center bg-no-repeat wiggle mb-10"
      style={{
        minHeight: 250
      }}
    >
      <div className="inner-container flex h-full items-center">
        <h1 className="font-bold text-3xl text-white capitalize">{name}</h1>
      </div>
    </div>
  )
}

export default Hero
