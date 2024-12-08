import {useEffect, useRef, useState} from 'react'
import CloseIcon from '../SVG/CloseIcon'
import Button from '../Button'
import {classNames} from '../../utils/className.js'

export default function Modal({
  children,
  button,
  className,
  outsideClose = true,
  actionButton = false,
  modalStyle,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef(null)

  const handleEscape = e => {
    if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const handleToggle = () => {
    setIsOpen(prevState => !prevState)

    if (!isOpen) {
      document.addEventListener('keydown', handleEscape)
    } else {
      document.removeEventListener('keydown', handleEscape)
    }
  }

  function clickOutside(e) {
    if (!outsideClose) return

    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleToggle()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'

      document.addEventListener('keydown', handleEscape)
    } else {
      document.body.style.overflow = ''

      document.removeEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <>
      <div onClick={handleToggle} className={className}>
        {button}
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-[50] bg-black bg-opacity-40 flex items-center justify-center"
          onClick={clickOutside}
        >
          <div
            ref={modalRef}
            className={classNames(
              'bg-white z-50 rounded pb-10 pt-4 px-4 md:p-10 2xl:p-14 relative w-full md:w-[36rem] h-fit overflow-y-auto',
              modalStyle
            )}
          >
            <button
              type="button"
              onClick={handleToggle}
              className="absolute top-6 right-6 bg-background rounded-full size-12 flex items-center justify-center z-50"
            >
              <CloseIcon />
            </button>
            {children}
            {actionButton && (
              <ActionButtons onClose={handleToggle}>
                {actionButton}
              </ActionButtons>
            )}
          </div>
        </div>
      )}
    </>
  )
}

function ActionButtons({ children, onClose }) {
  return (
    <div className="flex gap-3 items-center max-w-xl mx-auto">
      <Button variant="third" onClick={onClose}>
        Cancel
      </Button>
      {children}
    </div>
  )
}
