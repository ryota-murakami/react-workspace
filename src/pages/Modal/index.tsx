import React, { Fragment, useState, Dispatch, SetStateAction } from 'react'
import { Layout, Row } from './style'
import { Button } from '@material-ui/core'
import Overlay from './ModalKit/Overlay'

export interface ModalState {
  isOpen: boolean
}

const View: React.FC<{ setState: Dispatch<SetStateAction<ModalState>> }> = ({
  setState
}) => {
  function openModal(): void {
    setState(() => {
      return { isOpen: true }
    })
  }

  return (
    <Layout>
      <Row>
        <h1>Modal</h1>
      </Row>
      <Row>
        <Button variant="contained" color="primary" onClick={openModal}>
          Open
        </Button>
      </Row>
    </Layout>
  )
}

const App: React.FC = () => {
  const [state, setState] = useState<ModalState>({ isOpen: false })

  return (
    <Fragment>
      <Overlay isOpen={state.isOpen} />
      <View setState={setState} />
    </Fragment>
  )
}

export default App
