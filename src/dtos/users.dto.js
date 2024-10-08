import { logger } from "../utils/logger.js";

export default class UserDto {
    constructor(user) {
        // this.first_name = first.name;
        // this.last_name = last_name;
        this.email = user.email;
        this.fullname = `${user.first_name || ''} ${user.last_name || ''}`.trim();
        this.role = user.role,
        this.id = `${user._id}`

        logger.info('Fullname generado en DTO - Log de /src/dtos/users.dto.js:', this.fullname);
    }
}