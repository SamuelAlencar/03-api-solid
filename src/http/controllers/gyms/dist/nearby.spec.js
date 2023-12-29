"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var supertest_1 = require("supertest");
var app_1 = require("@/app");
var vitest_1 = require("vitest");
var create_and_authenticate_user_1 = require("@/utils/test/create-and-authenticate-user");
vitest_1.describe('Nearby Gyms (e2e)', function () {
    vitest_1.beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, app_1.app.ready()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    vitest_1.afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, app_1.app.close()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    vitest_1.it('should be able list nearby gyms', function () { return __awaiter(void 0, void 0, void 0, function () {
        var token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, create_and_authenticate_user_1.createAndAuthenticateUser(app_1.app)];
                case 1:
                    token = (_a.sent()).token;
                    return [4 /*yield*/, supertest_1["default"](app_1.app.server)
                            .post('/gyms')
                            .set('Authorization', "Bearer " + token)
                            .send({
                            title: 'JavaScript Gym',
                            description: 'Some description.',
                            phone: '1199999999',
                            latitude: -27.2092052,
                            longitude: -49.6401091
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, supertest_1["default"](app_1.app.server)
                            .post('/gyms')
                            .set('Authorization', "Bearer " + token)
                            .send({
                            title: 'TypeScript Gym',
                            description: 'Some description.',
                            phone: '1199999999',
                            latitude: -27.0610928,
                            longitude: -49.5229501
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, supertest_1["default"](app_1.app.server)
                            .get('/gyms/nearby')
                            .query({
                            latitude: -27.2092052,
                            longitude: -49.6401091
                        })
                            .set('Authorization', "Bearer " + token)
                            .send()];
                case 4:
                    response = _a.sent();
                    vitest_1.expect(response.statusCode).toEqual(200);
                    vitest_1.expect(response.body.gyms).toHaveLength(1);
                    vitest_1.expect(response.body.gyms).toEqual([
                        vitest_1.expect.objectContaining({
                            title: 'JavaScript Gym'
                        }),
                    ]);
                    return [2 /*return*/];
            }
        });
    }); });
});