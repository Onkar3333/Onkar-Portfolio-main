import React, { useEffect, useRef } from 'react'

export default function VantaBackground() {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)

  useEffect(() => {
    // Check if Vanta is available (scripts loaded)
    if (typeof window.VANTA !== 'undefined') {
      // Initialize Vanta NET effect
      vantaEffect.current = window.VANTA.NET({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x7c3aed,
        backgroundColor: 0x050509,
        points: 20.00,
        maxDistance: 23.00,
        spacing: 18.00
      })
    } else {
      // If Vanta is not loaded yet, wait for it
      const checkVanta = setInterval(() => {
        if (typeof window.VANTA !== 'undefined') {
          clearInterval(checkVanta)
          vantaEffect.current = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x7c3aed,
            backgroundColor: 0x050509,
            points: 20.00,
            maxDistance: 23.00,
            spacing: 18.00
          })
        }
      }, 100)

      // Cleanup interval after 5 seconds if still not loaded
      setTimeout(() => clearInterval(checkVanta), 5000)
    }

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy()
      }
    }
  }, [])

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  )
}
