export class LateCheckinValidatetionError extends Error{
    constructor() {
        super('⚠️ The check-in ca only be validated until 20 minutes.')
    }
} 