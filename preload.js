const {contextBridge} = require('electron');
const os = require('os');

contextBridge.exposeInMainWorld('electron',
    {
        homeDir: () => os.homedir(),
        os: () => {
            return {
                platform: os.platform(),
                release: os.release(),
                arch: os.arch(),
                hostname: os.hostname()
            };
        }
    }
);