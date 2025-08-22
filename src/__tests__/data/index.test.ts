import { RESOURCES, TResource } from '@/data'

describe('Data Module', () => {
  describe('RESOURCES array', () => {
    it('contains valid resource objects', () => {
      expect(Array.isArray(RESOURCES)).toBe(true)
      expect(RESOURCES.length).toBeGreaterThan(0)
    })

    it('has resources with required properties', () => {
      RESOURCES.forEach((resource: TResource) => {
        expect(resource).toHaveProperty('id')
        expect(resource).toHaveProperty('title')
        expect(resource).toHaveProperty('description')
        expect(resource).toHaveProperty('type')
        expect(resource).toHaveProperty('tags')
        
        expect(typeof resource.id).toBe('number')
        expect(typeof resource.title).toBe('string')
        expect(typeof resource.description).toBe('string')
        expect(['link', 'video', 'pdf']).toContain(resource.type)
        expect(Array.isArray(resource.tags)).toBe(true)
      })
    })

    it('has unique resource IDs', () => {
      const ids = RESOURCES.map(resource => resource.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })

    it('contains resources of different types', () => {
      const types = RESOURCES.map(resource => resource.type)
      expect(types).toContain('link')
      expect(types).toContain('video')
      expect(types).toContain('pdf')
    })

    it('has resources with valid tags', () => {
      RESOURCES.forEach((resource: TResource) => {
        expect(resource.tags.length).toBeGreaterThan(0)
        resource.tags.forEach(tag => {
          expect(typeof tag).toBe('string')
          expect(tag.length).toBeGreaterThan(0)
        })
      })
    })

    it('contains expected sample resources', () => {
      const workplaceChatResources = RESOURCES.filter(resource => 
        resource.title.includes('Workplace Chat')
      )
      expect(workplaceChatResources.length).toBeGreaterThan(0)
      
      const mentalHealthResources = RESOURCES.filter(resource => 
        resource.title.includes('mental health')
      )
      expect(mentalHealthResources.length).toBeGreaterThan(0)
    })

    it('has consistent data structure', () => {
      const firstResource = RESOURCES[0]
      const resourceKeys = Object.keys(firstResource).sort()
      
      RESOURCES.forEach(resource => {
        const keys = Object.keys(resource).sort()
        expect(keys).toEqual(resourceKeys)
      })
    })
  })

  describe('TResource type', () => {
    it('should match the actual resource structure', () => {
      const sampleResource: TResource = {
        id: 999,
        title: 'Test Resource',
        description: 'Test Description',
        type: 'link',
        tags: ['Test Tag'],
      }
      
      expect(sampleResource.id).toBe(999)
      expect(sampleResource.title).toBe('Test Resource')
      expect(sampleResource.description).toBe('Test Description')
      expect(sampleResource.type).toBe('link')
      expect(sampleResource.tags).toEqual(['Test Tag'])
    })
  })
})
