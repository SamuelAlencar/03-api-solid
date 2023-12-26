import { FastifyRequest, FastifyReply } from 'fastify';
export async function verifyJWT (
    requst: FastifyRequest,
    reply: FastifyReply,
) {
    try {
        await requst.jwtVerify()
    } catch (errr) {
        return reply.status(401).send({message: 'Unauthorized.' })
    }
}