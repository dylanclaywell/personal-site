import React from 'react'

import IconLink from './IconLink'

export default function NavigationMenu(): JSX.Element {
  return (
    <div>
      <IconLink name="face" label="About Me" url="/about-me" />
      <IconLink name="work" label="Work" url="/" />
    </div>
  )
}
