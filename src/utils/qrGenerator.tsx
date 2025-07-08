'use client'
import { QRCodeSVG } from 'qrcode.react'
import React from 'react'

export default function QRGenerator({ url }: { url: string }) {
  return (
    <QRCodeSVG
      bgColor="transparent"
      fgColor={'#02193A'}
      minVersion={3}
      value={url}
      size={120}
    />
  )
}
