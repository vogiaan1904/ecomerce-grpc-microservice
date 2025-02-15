"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const rxjs_1 = require("rxjs");
const token_service_1 = require("../token/token.service");
const user_pb_1 = require("./proto-buffers/user.pb");
let AuthService = class AuthService {
    onModuleInit() {
        this.userService =
            this.userServiceClient.getService(user_pb_1.USER_SERVICE_NAME);
    }
    constructor(jwtService, configService, tokenService) {
        this.jwtService = jwtService;
        this.configService = configService;
        this.tokenService = tokenService;
        this.SALT_ROUND = 10;
    }
    async register(dto) {
        const { email, password, firstName, lastName, gender } = dto;
        const existingUserWithEmail = await (0, rxjs_1.firstValueFrom)(this.userService.findOne({ email }));
        console.log(existingUserWithEmail);
        if (existingUserWithEmail.status >= common_1.HttpStatus.NOT_FOUND) {
            return {
                status: common_1.HttpStatus.CONFLICT,
                error: ['Email already exists'],
            };
        }
        const hashedPassword = await bcrypt.hash(password, this.SALT_ROUND);
        const createUserData = {
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName,
            gender: gender,
        };
        const response = await (0, rxjs_1.firstValueFrom)(this.userService.createUser(createUserData));
        return {
            status: response.status,
            error: response.error,
        };
    }
    async validate({ token, }) {
        try {
            const secret = this.configService.get('JWT_ACCESS_SECRET_KEY');
            const decoded = await this.jwtService.verifyAsync(token, {
                secret,
            });
            const user = await (0, rxjs_1.firstValueFrom)(this.userService.findOne({ id: decoded.userId }));
            if (!user) {
                return {
                    status: common_1.HttpStatus.CONFLICT,
                    error: ['User not found'],
                    userId: null,
                };
            }
            return { status: common_1.HttpStatus.OK, error: null, userId: decoded.userId };
        }
        catch (error) {
            const status = error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError'
                ? common_1.HttpStatus.FORBIDDEN
                : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            return {
                status,
                error: [error.message],
                userId: null,
            };
        }
    }
    generateAccessToken(payload) {
        return this.jwtService.sign(payload, {
            algorithm: 'HS256',
            secret: this.configService.get('JWT_ACCESS_SECRET_KEY'),
            expiresIn: `${this.configService.get('JWT_ACCESS_TOKEN_EXPIRATION_TIME')}s`,
        });
    }
    generateRefreshToken(payload) {
        return this.jwtService.sign(payload, {
            algorithm: 'HS256',
            secret: this.configService.get('JWT_REFRESH_SECRET_KEY'),
            expiresIn: `${this.configService.get('JWT_REFRESH_TOKEN_EXPIRATION_TIME')}s`,
        });
    }
};
exports.AuthService = AuthService;
__decorate([
    (0, common_1.Inject)(user_pb_1.USER_SERVICE_NAME),
    __metadata("design:type", Object)
], AuthService.prototype, "userServiceClient", void 0);
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService,
        token_service_1.TokenService])
], AuthService);
//# sourceMappingURL=auth.service.js.map