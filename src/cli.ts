#!/usr/bin/env node

import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';

import { Logger } from './logger';
import messages from './constants';

/**
 * Returns path is file or not.
 * @param filePath Path of the file
 */
function isFile(filePath: string): boolean {
    if (filePath.endsWith(":file")) return true;
    if (!filePath.includes('.')) return false;
    filePath = path.normalize(filePath);
    if (filePath.includes('\\')) {
        const array = filePath.split('\\');
        const lastIndex = array[array.length - 1];
        if (!lastIndex.includes('.')) return false;
        const str = lastIndex.split('.');
        if (str[0] && str[1]) return true;
        else return false;
    } else {
        const str = filePath.split('.');
        if (str[0] && str[1]) return true;
        else return false;
    }
}

const [, , ...args] = process.argv;
args.forEach(arg => {
    const logger = new Logger(arg);
    const normalizedPath = path.normalize(arg);
    const joinedPath = path.join(process.cwd(), normalizedPath);
    const acceptedPath = joinedPath.includes(":file") ? joinedPath.replace(/:file/g, "") : joinedPath;

    if (normalizedPath.includes('\\')) {
        if (isFile(joinedPath)) return fs.access(acceptedPath, err => {
            if (!err) return logger.error(messages.file.exist);

            const array = acceptedPath.split('\\');
            const folderPath = acceptedPath.slice(0, -(array[array.length - 1].length));

            const Continue = () => {
                fs.writeFile(acceptedPath, "", err => {
                    if (!err) return logger.successful(messages.file.created);
                    else return console.error(`${messages.error}}\n\n${err}`);
                });
            };

            if (fs.existsSync(folderPath)) return Continue();
            else mkdirp(folderPath).then(() => Continue()).catch(err => logger.error(`${messages.error}\n\n${err}`));
        });
        else return fs.access(joinedPath, err => {
            if (!err) return logger.error(messages.folder.exist);
            mkdirp(joinedPath).then(() => logger.successful(messages.folder.created)).catch(err => logger.error(`${messages.error}\n\n${err}`));
        });
    }
    else {
        if (isFile(joinedPath)) return fs.access(acceptedPath, err => {
            if (!err) return logger.error(messages.file.exist);
            return fs.writeFile(acceptedPath, "", (err) => {
                if (!err) return logger.successful(messages.file.created);
                else return logger.error(`${messages.error}\n\n${err}`);
            });
        });
        else return fs.mkdir(joinedPath, err => {
            if (!err) return logger.successful(messages.folder.created);
            if (err.code == "EEXIST") return logger.error(messages.folder.exist);
            else return logger.error(`${messages.error}\n\n${err}`);
        });
    }
});