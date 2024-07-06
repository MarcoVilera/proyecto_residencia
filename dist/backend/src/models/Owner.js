"use strict";
// import { Role } from "../Role";
// import { User } from "../User";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// class Owner extends User {
//     private ownerId: number;
//     private apartment: Apartment;
//     //Nombre de usuario por definir
//     private user: string;
//     constructor(name: string, lastname: string, id: string, email: string, role: Role, ownerId: number, apartment: Apartment) {
//         super(name, lastname, id, email, role);
//         this.ownerId = ownerId;
//         this.apartment = apartment;
//     }
// }
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = __importDefault(require("./User"));
const Apartment_1 = __importDefault(require("./Apartment"));
const Quota_1 = __importDefault(require("./Quota"));
let Owners = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: 'owners',
            timestamps: false
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _owner_id_decorators;
    let _owner_id_initializers = [];
    let _owner_id_extraInitializers = [];
    let _user_decorators;
    let _user_initializers = [];
    let _user_extraInitializers = [];
    let _apartment_decorators;
    let _apartment_initializers = [];
    let _apartment_extraInitializers = [];
    let _Quotas_decorators;
    let _Quotas_initializers = [];
    let _Quotas_extraInitializers = [];
    let _Apartment_decorators;
    let _Apartment_initializers = [];
    let _Apartment_extraInitializers = [];
    var Owners = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.owner_id = __runInitializers(this, _owner_id_initializers, void 0);
            this.user = (__runInitializers(this, _owner_id_extraInitializers), __runInitializers(this, _user_initializers, void 0));
            this.apartment = (__runInitializers(this, _user_extraInitializers), __runInitializers(this, _apartment_initializers, void 0));
            this.Quotas = (__runInitializers(this, _apartment_extraInitializers), __runInitializers(this, _Quotas_initializers, void 0));
            this.Apartment = (__runInitializers(this, _Quotas_extraInitializers), __runInitializers(this, _Apartment_initializers, void 0));
            __runInitializers(this, _Apartment_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Owners");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _owner_id_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            })];
        _user_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => User_1.default), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false
            })];
        _apartment_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => Apartment_1.default), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false
            })];
        _Quotas_decorators = [(0, sequelize_typescript_1.HasMany)(() => Quota_1.default, { onDelete: 'NO ACTION', sourceKey: 'user' })];
        _Apartment_decorators = [(0, sequelize_typescript_1.HasOne)(() => Apartment_1.default, { onDelete: 'NO ACTION', sourceKey: 'user' })];
        __esDecorate(null, null, _owner_id_decorators, { kind: "field", name: "owner_id", static: false, private: false, access: { has: obj => "owner_id" in obj, get: obj => obj.owner_id, set: (obj, value) => { obj.owner_id = value; } }, metadata: _metadata }, _owner_id_initializers, _owner_id_extraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: obj => "user" in obj, get: obj => obj.user, set: (obj, value) => { obj.user = value; } }, metadata: _metadata }, _user_initializers, _user_extraInitializers);
        __esDecorate(null, null, _apartment_decorators, { kind: "field", name: "apartment", static: false, private: false, access: { has: obj => "apartment" in obj, get: obj => obj.apartment, set: (obj, value) => { obj.apartment = value; } }, metadata: _metadata }, _apartment_initializers, _apartment_extraInitializers);
        __esDecorate(null, null, _Quotas_decorators, { kind: "field", name: "Quotas", static: false, private: false, access: { has: obj => "Quotas" in obj, get: obj => obj.Quotas, set: (obj, value) => { obj.Quotas = value; } }, metadata: _metadata }, _Quotas_initializers, _Quotas_extraInitializers);
        __esDecorate(null, null, _Apartment_decorators, { kind: "field", name: "Apartment", static: false, private: false, access: { has: obj => "Apartment" in obj, get: obj => obj.Apartment, set: (obj, value) => { obj.Apartment = value; } }, metadata: _metadata }, _Apartment_initializers, _Apartment_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Owners = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Owners = _classThis;
})();
exports.default = Owners;
