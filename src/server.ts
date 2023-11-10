import { server } from "@config/index";
import logger from "@middlewares/logger";
import express from "./app";

express.app.listen(server.port, () => {
    logger.info("Service started", { port: server.port, mode: server.env })
})