import request from 'supertest'
import { app } from '@/app'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { randomUUID } from 'node:crypto'

describe('Register (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to register', async () => {
        const acronycEmail = randomUUID()

        const response = await request(app.server).post('/users').send({
            name: 'John Doe',
            email: `${acronycEmail}@example.com`,
            password: '123456',
        })

        expect(response.statusCode).toEqual(201)
    })
})