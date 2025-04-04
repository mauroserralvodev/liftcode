import React from 'react'
import { Sparkles, Users, Play, Clock, Mic2, Shuffle, Rocket } from 'lucide-react';


const CardLift = () => {
  return (
    <section className="">
        <div className="mx-autol">
          <div className="sm:rounded-[3rem] rounded-none bg-gradient-to-br from-black to-neutral-800/90  p-8 md:p-12 lg:p-16 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F552AB]/80 via-[#FECAB4]/40 to-neutral-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center py-24 sm:py-0">
              <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl lg:text-6xl font-medium mb-6 text-white">
                  Create components you couldn&apos;t imagine before
                </h1>
                <p className="text-gray-300 text-lg mb-8">
                  Experience the future of coding with our cutting-edge AI technology. 
                  Program, fix and deploy like never before.
                </p>
                <div className="flex flex-wrap gap-4 cursor-default">
                  <div className="flex items-center space-x-2 text-white bg-white/10 px-4 py-2 rounded-full border border-white/10 hover:border-neutral-200/50 transition-colors">
                    <Sparkles className="h-5 w-5 text-neutral-200" />
                    <span className="text-sm font-medium">AI-Powered Code</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white bg-white/10 px-4 py-2 rounded-full border border-white/10 hover:border-neutral-200/50 transition-colors">
                    <Rocket className="h-5 w-5 text-neutral-200" />
                    <span className="text-sm font-medium">Professional Quality</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white bg-white/10 px-4 py-2 rounded-full border border-white/10 hover:border-neutral-200/50 transition-colors">
                    <Users className="h-5 w-5 text-neutral-200" />
                    <span className="text-sm font-medium">Deploy Features</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-[#FFFF]/60 via-[#FFFF]/30 to-neutral-100 p-1 rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-[#282828] rounded-[1.9rem] p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Play className="h-8 w-8 text-neutral-200" />
                          <div>
                            <div className="h-3 w-32 bg-white/20 rounded-full"></div>
                            <div className="h-2 w-20 bg-white/10 rounded-full mt-2"></div>
                          </div>
                        </div>
                        <Clock className="h-5 w-5 text-white/40" />
                      </div>
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between group/item hover:bg-white/5 p-2 rounded-lg transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="h-12 w-12 rounded-md bg-gradient-to-br from-[#747474] to-green-800/10 flex items-center justify-center">
                              <Mic2 className="h-6 w-6 text-white/60" />
                            </div>
                            <div>
                              <div className="h-3 w-40 bg-white/20 rounded-full"></div>
                              <div className="h-2 w-24 bg-white/10 rounded-full mt-2"></div>
                            </div>
                          </div>
                          <Shuffle className="h-5 w-5 text-white/0 group-hover/item:text-white/60 transition-colors" />
                        </div>
                      ))}
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-gradient-to-r from-[#9c9c9c] to-[#ff86c8]/10 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CardLift