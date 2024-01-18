import React from 'react'
import { useParams } from 'react-router-dom'

type Props = {}

export default function EditTask({}: Props) {

    const {id } = useParams()
  return (
    <div>Task {id}</div>
  )
}