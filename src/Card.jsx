import React from 'react'
import QR from './assets/image-qr-code.png'

export default function Card() {
  return (
    <div>
        <div 
        className="group flex-col rounded-3xl drop-shadow-md hover:drop-shadow-xl bg-white
        w-80 ml-auto mr-auto mt-10 hover:bg-sky-800">
            <a href="#!">
                <img
                className="rounded-3xl p-4"
                src={QR}
                alt="qr code" />
            </a>
            <div className="p-9 text-center">
                <h5
                className="mb-2 text-xl font-bold leading-tight text-darkblue group-hover:text-blue-50 ">
                Improve your front-end skills by building projects
                </h5>
                <p className="mb-4 text-base text-grayishblue group-hover:text-blue-200">
                Scan the QR code to visit Frontend Mentor and take your coding 
                skills to the next level
                </p>
            </div>
        </div>
    </div>
  )
}
