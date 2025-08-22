# Testing Setup

This project uses Jest and React Testing Library for testing React components and functionality.

## Testing Stack

- **Jest**: JavaScript testing framework
- **React Testing Library**: Testing utilities for React components
- **@testing-library/jest-dom**: Custom Jest matchers for DOM elements
- **@testing-library/user-event**: Advanced user interaction simulation

## Test Structure

```
src/
  __tests__/
    utils/
      test-utils.tsx           # Custom render function with providers
    components/
      SwitchRole.test.tsx      # Component unit tests
      SearchInput.test.tsx     # Input component tests
      icons.test.tsx           # Icon component tests
    context/
      ResourcesContext.test.ts # Context hook tests
    features/
      ResourceItem.test.tsx    # Feature component tests
    data/
      index.test.ts            # Data structure tests
    integration/
      resources.test.tsx       # Integration tests
    snapshots/
      components.test.tsx      # Snapshot tests
```

## Available Scripts

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Testing Utilities

### Custom Render Function

The `test-utils.tsx` file provides a custom render function that includes all necessary providers:

```tsx
import { render } from '../utils/test-utils'

render(<YourComponent />)
```

### Mocked Dependencies

The following dependencies are mocked globally in `jest.setup.js`:

- `next/navigation` - Router hooks
- `react-toastify` - Toast notifications
- `window.scrollTo` - Scroll behavior
- `getBoundingClientRect` - DOM measurements

## Test Categories

### Unit Tests

Test individual components in isolation:

```tsx
describe('SwitchRole Component', () => {
  it('renders with initial state as Employee', () => {
    render(<SwitchRole />)
    expect(screen.getByText('Switch to Employee')).toBeInTheDocument()
  })
})
```

### Integration Tests

Test multiple components working together:

```tsx
describe('Resources Integration Tests', () => {
  it('filters resources when searching', async () => {
    render(<TestResourcesApp />)
  })
})
```

### Context Tests

Test React Context providers and hooks:

```tsx
describe('ResourcesContext', () => {
  it('provides initial values', () => {
    const { result } = renderHook(() => useResourcesContext(), { wrapper })
    expect(result.current.searchQuery).toBe('')
  })
})
```

### Snapshot Tests

Capture component output for regression testing:

```tsx
it('Component matches snapshot', () => {
  const { container } = render(<Component />)
  expect(container.firstChild).toMatchSnapshot()
})
```

## Testing Best Practices

### 1. Write Descriptive Test Names

```tsx
it('shows success toast when switching from Employee to Employer')

it('works correctly')
```

### 2. Test User Interactions

```tsx
fireEvent.click(screen.getByRole('button'))
fireEvent.change(input, { target: { value: 'search term' } })
```

### 3. Use Semantic Queries

```tsx
screen.getByRole('button')
screen.getByLabelText('Search')
screen.getByPlaceholderText('Enter text')

screen.getByTestId('button-element')
```

### 4. Test Behavior, Not Implementation

```tsx
expect(mockFunction).toHaveBeenCalledWith('expected-value')

expect(component.state.internalValue).toBe('something')
```

### 5. Clean Up After Tests

```tsx
beforeEach(() => {
  jest.clearAllMocks()
})
```

## Coverage Goals

The test suite aims for:

- **Statements**: 80%+
- **Branches**: 75%+
- **Functions**: 80%+
- **Lines**: 80%+

## Common Testing Patterns

### Testing Components with Context

```tsx
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <ResourcesProvider>{children}</ResourcesProvider>
)

const { result } = renderHook(() => useResourcesContext(), { wrapper })
```

### Testing Async Behavior

```tsx
await waitFor(() => {
  expect(screen.getByText('Expected text')).toBeInTheDocument()
})
```

### Testing Error Boundaries

```tsx
const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {})

expect(() => {
  render(<ComponentThatShouldThrow />)
}).toThrow('Expected error message')

consoleSpy.mockRestore()
```

## Debugging Tests

### Run Single Test File

```bash
npm test -- SwitchRole.test.tsx
```

### Run Tests Matching Pattern

```bash
npm test -- --testNamePattern="search"
```

### Debug Mode

```bash
npm test -- --verbose
```

### Update Snapshots

```bash
npm test -- --updateSnapshot
```
