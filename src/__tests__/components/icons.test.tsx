import { render } from '@testing-library/react'
import LinkIcon from '@/components/icons/LinkIcon'
import VideoIcon from '@/components/icons/VideoIcon'
import PdfIcon from '@/components/icons/PdfIcon'

describe('Icon Components', () => {
  it('LinkIcon renders', () => {
    const { container } = render(<LinkIcon />)
    expect(container.firstChild).toBeTruthy()
    expect(container.querySelector('svg')).toBeTruthy()
  })

  it('VideoIcon renders', () => {
    const { container } = render(<VideoIcon />)
    expect(container.firstChild).toBeTruthy()
    expect(container.querySelector('svg')).toBeTruthy()
  })

  it('PdfIcon renders', () => {
    const { container } = render(<PdfIcon />)
    expect(container.firstChild).toBeTruthy()
    expect(container.querySelector('svg')).toBeTruthy()
  })
})
