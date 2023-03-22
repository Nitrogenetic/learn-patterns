import React, { FC, memo, useState } from 'react'
import { RouteComponentProps } from '@reach/router'

interface HomeProps extends RouteComponentProps {}

const Home: FC<HomeProps> = () => {
  const [rerender, setRerender] = useState(false)
  console.log('------------------------------------------------')
  // TODO

  // TODO
  return (
    <div className="absolute-center text-center">
      <div className="text-50 font-bold font-sans mb-50">Patterns!!!</div>
      <button className="not-boring-button" onClick={() => setRerender(!rerender)}>
        Button!
      </button>
    </div>
  )
}

export default memo(Home)
