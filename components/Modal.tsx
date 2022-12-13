
import { closeComments } from '../store/uiSlice'
import { useAppDispatch } from '../store/hooks'

type AppProps = {
  children: React.ReactNode
}

const Backdrop = ()=> {
  const dispatch = useAppDispatch()
  return (
    <div onClick={() => dispatch(closeComments())} className="w-full h-screen fixed z-20 top-0 left-0 bg-black/20" />
  )
}

const ModalOverlay = ({children}: AppProps) => {
  return (
    <div className="w-full lg:w-4/12 h-screen fixed bottom:0 left-0 top-60 lg:top-0 lg:bottom-0 lg:right-0 z-30 bg-white shadow shadow-black/20 rounded">
      <div className="max-w-full lg:p-3 flex flex-col gap-2 whitespace-nowrap overflow-auto">{children}</div>
    </div>
  )
}

export default function Modal({children}: AppProps) {
  return (
    <>
      <Backdrop  />
      <ModalOverlay>{children}</ModalOverlay>
    </>
  );
}
