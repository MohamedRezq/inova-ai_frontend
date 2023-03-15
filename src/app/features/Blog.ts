import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../hooks'

import { } from '../slices/blogSlice'

export function Blog() {
  // The `state` arg is correctly typed as `RootState` already
  const title = useAppSelector((state) => state.blogs.title)
  const dispatch = useAppDispatch()

  // omit rendering logic
}