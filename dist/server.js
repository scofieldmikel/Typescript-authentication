"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
const app_1 = __importDefault(require("./app"));
/**
 * Starts the server by connecting to MongoDB and then listening on the specified port.
 *
 * @async
 * @function startServer
 * @throws Will throw an error if the server fails to start.
 * @returns {Promise<void>} A promise that resolves when the server is successfully started.
 */
const startServer = async () => {
    try {
        await mongoose_1.default.connect(config_1.config.mongodb.uri);
        console.log('Connected to MongoDB');
        app_1.default.listen(config_1.config.port, () => {
            console.log(`Server running on port ${config_1.config.port}`);
        });
    }
    catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};
startServer();
//# sourceMappingURL=server.js.map