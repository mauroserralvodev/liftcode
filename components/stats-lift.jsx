import React from 'react'

const Stats = () => {
  return (
    <section className=" mb-0">
  <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:py-16 lg:px-6">
    <dl className="grid max-w-screen-md gap-8 mx-auto text-neutral-900 sm:grid-cols-3 ">
        <div className="flex flex-col items-center justify-center">
          <section>
              <dt className="mb-2 text-5xl md:text-5xl font-medium sm:font-bold">+20k</dt>
          </section>
          <section>
              <dd className="font-light text-neutral-900 mb-10">Usuarios</dd>
          </section>
        </div>
        <div className="flex flex-col items-center justify-center">
          <section>
              <dt className="mb-2 text-5xl md:text-5xl font-medium sm:font-bold">+10k</dt>
          </section>
          <section>
              <dd className="font-light text-neutral-900  mb-10">Tickets Resueltos</dd>
          </section>
        </div>
        <div className="flex flex-col items-center justify-center">
          <section>
              <dt className="mb-2 text-5xl md:text-5xl font-medium sm:font-bold">+700</dt>
          </section>
          <section>
              <dd className="font-light text-neutral-900 mb-10">Proyectos OpSc</dd>
            </section>
        </div>
    </dl>
  </div>
</section>
  )
}

export default Stats