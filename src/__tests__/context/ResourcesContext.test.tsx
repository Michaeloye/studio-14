import { renderHook } from '@testing-library/react'
import { ResourcesProvider, useResourcesContext } from '@/context/ResourcesContext'
import { RESOURCES } from '@/data'

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <ResourcesProvider>{children}</ResourcesProvider>
)

describe('ResourcesContext', () => {
  it('provides initial values', () => {
    const { result } = renderHook(() => useResourcesContext(), { wrapper })
    
    expect(result.current.searchQuery).toBe('')
    expect(result.current.allResources).toEqual(RESOURCES)
    expect(result.current.filteredResources).toEqual(RESOURCES)
    expect(result.current.hasActiveFilters).toBe(false)
    expect(result.current.hasSearchQuery).toBe(false)
  })

  it('has correct initial resultsCount', () => {
    const { result } = renderHook(() => useResourcesContext(), { wrapper })
    expect(result.current.resultsCount).toBe(RESOURCES.length)
  })
})
