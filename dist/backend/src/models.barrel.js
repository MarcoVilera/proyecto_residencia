"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
//BARREL FILE FOR MODELS
__exportStar(require("./models/Apartment"), exports);
__exportStar(require("./models/Cash"), exports);
__exportStar(require("./models/CommonArea_Reserve"), exports);
__exportStar(require("./models/CommonArea"), exports);
__exportStar(require("./models/MaintenanceRequest"), exports);
__exportStar(require("./models/Notification"), exports);
__exportStar(require("./models/Owner"), exports);
__exportStar(require("./models/Payment"), exports);
__exportStar(require("./models/Quota"), exports);
__exportStar(require("./models/Resident"), exports);
__exportStar(require("./models/Role"), exports);
__exportStar(require("./models/ServicePayment"), exports);
__exportStar(require("./models/User"), exports);
