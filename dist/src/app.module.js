"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const jobs_module_1 = require("./jobs/jobs.module");
const api_key_middleware_1 = require("./common/middleware/api-key.middleware");
const rate_limit_middleware_1 = require("./common/middleware/rate-limit.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(api_key_middleware_1.ApiKeyMiddleware, rate_limit_middleware_1.RateLimitMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [jobs_module_1.JobsModule],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map