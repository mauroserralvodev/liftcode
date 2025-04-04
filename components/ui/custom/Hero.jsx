"use client"
import React from 'react'

function Hero() {
  return (
    <div>
        <section className="relative h-[50rem] sm:h-[59rem] w-full">
            <div className="absolute inset-0 z-0">
                {/* Mobil */}
                <img 
                    src='/back12.png' 
                    className="w-full h-full sm:hidden object-cover"
                    alt="Mobile Banner"
                    loading="eager"
                />
                {/* Ordenador */}
                <img 
                    src='/back12.png' 
                    className="h-full w-full hidden sm:block object-cover"
                    alt="Desktop Banner"
                    loading="eager"
                />
                <div className="absolute inset-0 object-cover" />
            </div>
            <div className="relative z-10 flex h-full flex-col items-start justify-center p-8 text-white">
                <div className="mx-auto max-w-8xl">
                    <span className="rounded-full bg-white/20 border border-white/60 text-neutral-200 px-5 py-1 text-sm my-2">
                        BETA VERSION
                    </span>
                    <h2 className="text-white text-4xl sm:text-5xl font-medium sm:font-bold leading-tight md:text-8xl my-2">
                        The best fullstack
                    <br />
                    <span>
                        AI code generator
                    </span>
                    </h2>
                    <p className="text-xl text-neutral-200 md:text-2xl my-4">
                        Crafting exceptional digital experiences through innovative
                    <br />
                        design and cutting-edge technology.
                    </p>
                    <a href="/chat" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-neutral-200 bg-neutral-200 text-neutral-900 hover:text-neutral-200 hover:border hover:border-neutral-200 hover:bg-transparent transition focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                        Start your project
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </a>
                </div>
            </div>
        </section>
    </div>

  )
}

export default Hero