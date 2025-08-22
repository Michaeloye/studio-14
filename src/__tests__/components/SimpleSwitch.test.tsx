import { render, screen, fireEvent } from '@testing-library/react'

// react-toastify
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
  },
}))

// Chakra UI Switch
jest.mock('@chakra-ui/react', () => ({
  Switch: {
    Root: ({ children, checked, onCheckedChange }: any) => (
      <button 
        role="switch" 
        aria-checked={checked}
        onClick={() => onCheckedChange({ checked: !checked })}
      >
        {children}
      </button>
    ),
    HiddenInput: () => null,
    Control: () => <div data-testid="switch-control" />,
    Label: ({ children }: any) => <span>{children}</span>,
  },
}))

import SwitchRole from '@/components/layout/navigation/SwitchRole'
import { toast } from 'react-toastify'

describe('SwitchRole Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    const { container } = render(<SwitchRole />)
    expect(container.firstChild).toBeTruthy()
  })

  it('shows initial text', () => {
    render(<SwitchRole />)
    expect(screen.getByText('Switch to Employee')).toBeTruthy()
  })

  it('toggles text when clicked', () => {
    render(<SwitchRole />)
    
    const switchElement = screen.getByRole('switch')
    fireEvent.click(switchElement)
    
    expect(screen.getByText('Switch to Employer')).toBeTruthy()
  })

  it('calls toast when switching', () => {
    render(<SwitchRole />)
    
    const switchElement = screen.getByRole('switch')
    fireEvent.click(switchElement)
    
    expect(toast.success).toHaveBeenCalled()
  })
})
