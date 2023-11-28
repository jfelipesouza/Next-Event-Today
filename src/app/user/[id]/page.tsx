import React from 'react'

const DynamicUserPage = async (props: any) => {
  console.log({ props: props.params.id })

  return (
    <main className="w-screen min-h-screen">
      <section>
        <div>
          <img />
          <div>
            <p>Bem vindo, {}</p>
          </div>
        </div>
        <div></div>
      </section>
    </main>
  )
}

export default DynamicUserPage

const fetchData = async (): Promise<void> => {}
