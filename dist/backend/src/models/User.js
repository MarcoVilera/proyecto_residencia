"use strict";
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
const CommonArea_Reserve_1 = __importDefault(require("./CommonArea_Reserve"));
const Owner_1 = __importDefault(require("./Owner"));
const Role_1 = __importDefault(require("./Role"));
const sequelize_typescript_1 = require("sequelize-typescript");
const MaintenanceRequest_1 = __importDefault(require("./MaintenanceRequest"));
const Notification_1 = __importDefault(require("./Notification"));
const Resident_1 = __importDefault(require("./Resident"));
const Payment_1 = __importDefault(require("./Payment"));
let Users = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: 'users',
            timestamps: false
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _user_id_decorators;
    let _user_id_initializers = [];
    let _user_id_extraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _ci_decorators;
    let _ci_initializers = [];
    let _ci_extraInitializers = [];
    let _email_decorators;
    let _email_initializers = [];
    let _email_extraInitializers = [];
    let _password_decorators;
    let _password_initializers = [];
    let _password_extraInitializers = [];
    let _user_role_decorators;
    let _user_role_initializers = [];
    let _user_role_extraInitializers = [];
    let _role_decorators;
    let _role_initializers = [];
    let _role_extraInitializers = [];
    let _owner_decorators;
    let _owner_initializers = [];
    let _owner_extraInitializers = [];
    let _resident_decorators;
    let _resident_initializers = [];
    let _resident_extraInitializers = [];
    let _common_area_reserve_decorators;
    let _common_area_reserve_initializers = [];
    let _common_area_reserve_extraInitializers = [];
    let _maintenance_request_decorators;
    let _maintenance_request_initializers = [];
    let _maintenance_request_extraInitializers = [];
    let _notification_decorators;
    let _notification_initializers = [];
    let _notification_extraInitializers = [];
    let _payment_decorators;
    let _payment_initializers = [];
    let _payment_extraInitializers = [];
    var Users = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.user_id = __runInitializers(this, _user_id_initializers, void 0);
            this.name = (__runInitializers(this, _user_id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
            this.ci = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _ci_initializers, void 0));
            this.email = (__runInitializers(this, _ci_extraInitializers), __runInitializers(this, _email_initializers, void 0));
            this.password = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _password_initializers, void 0));
            this.user_role = (__runInitializers(this, _password_extraInitializers), __runInitializers(this, _user_role_initializers, void 0));
            this.role = (__runInitializers(this, _user_role_extraInitializers), __runInitializers(this, _role_initializers, void 0));
            this.owner = (__runInitializers(this, _role_extraInitializers), __runInitializers(this, _owner_initializers, void 0));
            this.resident = (__runInitializers(this, _owner_extraInitializers), __runInitializers(this, _resident_initializers, void 0));
            this.common_area_reserve = (__runInitializers(this, _resident_extraInitializers), __runInitializers(this, _common_area_reserve_initializers, void 0));
            this.maintenance_request = (__runInitializers(this, _common_area_reserve_extraInitializers), __runInitializers(this, _maintenance_request_initializers, void 0));
            this.notification = (__runInitializers(this, _maintenance_request_extraInitializers), __runInitializers(this, _notification_initializers, void 0));
            this.payment = (__runInitializers(this, _notification_extraInitializers), __runInitializers(this, _payment_initializers, void 0));
            __runInitializers(this, _payment_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Users");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _user_id_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            })];
        _name_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false
            })];
        _ci_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false
            }), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false
            })];
        _email_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false
            })];
        _password_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false
            })];
        _user_role_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => Role_1.default), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false
            })];
        _role_decorators = [(0, sequelize_typescript_1.BelongsTo)(() => Role_1.default)];
        _owner_decorators = [(0, sequelize_typescript_1.HasOne)(() => Owner_1.default, { onDelete: 'NO ACTION', sourceKey: 'name' })];
        _resident_decorators = [(0, sequelize_typescript_1.HasOne)(() => Resident_1.default, { onDelete: 'NO ACTION', sourceKey: 'name' })];
        _common_area_reserve_decorators = [(0, sequelize_typescript_1.HasOne)(() => CommonArea_Reserve_1.default, { onDelete: 'NO ACTION', sourceKey: 'name' })];
        _maintenance_request_decorators = [(0, sequelize_typescript_1.HasOne)(() => MaintenanceRequest_1.default, { onDelete: 'NO ACTION', sourceKey: 'name' })];
        _notification_decorators = [(0, sequelize_typescript_1.HasMany)(() => Notification_1.default, { onDelete: 'NO ACTION', sourceKey: 'name' })];
        _payment_decorators = [(0, sequelize_typescript_1.HasMany)(() => Payment_1.default, { onDelete: 'NO ACTION', sourceKey: 'name' })];
        __esDecorate(null, null, _user_id_decorators, { kind: "field", name: "user_id", static: false, private: false, access: { has: obj => "user_id" in obj, get: obj => obj.user_id, set: (obj, value) => { obj.user_id = value; } }, metadata: _metadata }, _user_id_initializers, _user_id_extraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
        __esDecorate(null, null, _ci_decorators, { kind: "field", name: "ci", static: false, private: false, access: { has: obj => "ci" in obj, get: obj => obj.ci, set: (obj, value) => { obj.ci = value; } }, metadata: _metadata }, _ci_initializers, _ci_extraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: obj => "email" in obj, get: obj => obj.email, set: (obj, value) => { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: obj => "password" in obj, get: obj => obj.password, set: (obj, value) => { obj.password = value; } }, metadata: _metadata }, _password_initializers, _password_extraInitializers);
        __esDecorate(null, null, _user_role_decorators, { kind: "field", name: "user_role", static: false, private: false, access: { has: obj => "user_role" in obj, get: obj => obj.user_role, set: (obj, value) => { obj.user_role = value; } }, metadata: _metadata }, _user_role_initializers, _user_role_extraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: obj => "role" in obj, get: obj => obj.role, set: (obj, value) => { obj.role = value; } }, metadata: _metadata }, _role_initializers, _role_extraInitializers);
        __esDecorate(null, null, _owner_decorators, { kind: "field", name: "owner", static: false, private: false, access: { has: obj => "owner" in obj, get: obj => obj.owner, set: (obj, value) => { obj.owner = value; } }, metadata: _metadata }, _owner_initializers, _owner_extraInitializers);
        __esDecorate(null, null, _resident_decorators, { kind: "field", name: "resident", static: false, private: false, access: { has: obj => "resident" in obj, get: obj => obj.resident, set: (obj, value) => { obj.resident = value; } }, metadata: _metadata }, _resident_initializers, _resident_extraInitializers);
        __esDecorate(null, null, _common_area_reserve_decorators, { kind: "field", name: "common_area_reserve", static: false, private: false, access: { has: obj => "common_area_reserve" in obj, get: obj => obj.common_area_reserve, set: (obj, value) => { obj.common_area_reserve = value; } }, metadata: _metadata }, _common_area_reserve_initializers, _common_area_reserve_extraInitializers);
        __esDecorate(null, null, _maintenance_request_decorators, { kind: "field", name: "maintenance_request", static: false, private: false, access: { has: obj => "maintenance_request" in obj, get: obj => obj.maintenance_request, set: (obj, value) => { obj.maintenance_request = value; } }, metadata: _metadata }, _maintenance_request_initializers, _maintenance_request_extraInitializers);
        __esDecorate(null, null, _notification_decorators, { kind: "field", name: "notification", static: false, private: false, access: { has: obj => "notification" in obj, get: obj => obj.notification, set: (obj, value) => { obj.notification = value; } }, metadata: _metadata }, _notification_initializers, _notification_extraInitializers);
        __esDecorate(null, null, _payment_decorators, { kind: "field", name: "payment", static: false, private: false, access: { has: obj => "payment" in obj, get: obj => obj.payment, set: (obj, value) => { obj.payment = value; } }, metadata: _metadata }, _payment_initializers, _payment_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Users = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Users = _classThis;
})();
exports.default = Users;
