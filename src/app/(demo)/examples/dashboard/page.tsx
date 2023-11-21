"use client"
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  searchParams: {
    id?: string
  }
}

export default function Dashboard({ searchParams }: Props) {
  const router = useRouter();
  return (
    <div>
      <b>Dashboard</b>
      <br />
      id: {searchParams.id}
      <br />
      <button onClick={() => router.push("/examples/about")}>About US</button>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  )
}