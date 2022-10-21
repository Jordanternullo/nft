import { Children, Fragment, useEffect, useState } from 'react'
import {
  Dialog as MuiDialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react'
import { Button, ButtonStyle } from '../button/button'

export interface DialogProps {
  className?: string
  open?: boolean
  children?: React.ReactNode
  title: string
  onClick?: (e: React.MouseEvent) => void
}

export const Dialog = (props: DialogProps) => {
  const { open = false, onClick, children, title } = props

  const handleOpenChange = () => {
    onClick && onClick()
  }
  return (
    <MuiDialog open={open} handler={() => handleOpenChange} size={'lg'}>
      <DialogHeader>{title}</DialogHeader>
      <DialogBody divider>{children}</DialogBody>
      <DialogFooter>
        <Button
          buttonStyle={ButtonStyle.Secondary}
          onClick={handleOpenChange}
          className='mr-1'
        >
          <span>Close</span>
        </Button>
      </DialogFooter>
    </MuiDialog>
  )
}
