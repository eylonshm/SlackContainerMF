import { mount } from 'homePage/HomePage'
import React, { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default () => {
  let location = useLocation()

  const ref = useRef(null)

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current)
    onParentNavigate(location)
  }, [location])

  return <div ref={ref} />
}
