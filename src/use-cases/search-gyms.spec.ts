import { SearchGymsUseCase } from './search-gyms';
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { expect, describe, it, beforeEach } from 'vitest'

let gymsRepository: InMemoryGymsRepository
let sut: SearchGymsUseCase

describe('Fetch User Check-in History Use Case', () => {
    beforeEach(async () => {
        gymsRepository = new InMemoryGymsRepository()
        sut = new SearchGymsUseCase(gymsRepository)
    })

    it('should be able to fetch search for gyms', async () => {
        await gymsRepository.create({
            title: 'Javascript Academy',
            description: null,
            phone: null,
            latitude: -27.0747279,
            longitude: -49.4889672,            

        })

        await gymsRepository.create({
            title: 'Typescript Academy',
            description: null,
            phone: null,
            latitude: -28.0747279,
            longitude: -49.4889672,            

        })

        const { gyms } = await sut.execute({
            query: 'Javascript',
            page: 1
        })

        expect(gyms).toHaveLength(1)
        expect(gyms).toEqual([
            expect.objectContaining({ title: 'Javascript Academy' }),
        ])
    })

    it('should be able to fetch paginated gyms search', async () => {
        for (let i = 1; i <= 22; i++) {
            await gymsRepository.create({
                title: `Javascript Gym ${i}`,
                description: null,
                phone: null,
                latitude: -28.0747279,
                longitude: -49.4889672,    
            })
        }

        const { gyms } = await sut.execute({
            query: 'Javascript',
            page: 2,
        })

        expect(gyms).toHaveLength(2)
        expect(gyms).toEqual([
            expect.objectContaining({ title: 'Javascript Gym 21' }),
            expect.objectContaining({ title: 'Javascript Gym 22' }),
        ])
    })
})