'use client'
import { QRCodeSVG } from 'qrcode.react'
import React from 'react'

export default function QRGenerator({ url }: { url: string }) {
  return <QRCodeSVG value={url} size={120} />
}
