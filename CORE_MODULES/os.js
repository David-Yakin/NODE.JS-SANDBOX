// /* https://nodejs.org/dist/latest-v16.x/docs/api/os.html */
const OperatingSystem = require("os");

/***** computer memory *****/
// const totalMemoryInGB = `${OperatingSystem.totalmem() / 1073741824} GB`;
// const freeMemory = `${OperatingSystem.freemem() / 1073741824} GB`;
// const memoryInfo = { total: totalMemoryInGB, free: freeMemory };

// console.table(memoryInfo);

/***** OS Info*****/
// console.log(OperatingSystem.platform()); // מערכת הפעלה
// console.log(OperatingSystem.version()); // operating system version
// console.log(OperatingSystem.type()); // Returns the operating system name as returned by uname(3). For example, it returns 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.
// console.log(OperatingSystem.hostname()); // Returns the host name of the operating system as a string.
// console.log(OperatingSystem.arch());

/***** other info *****/
// console.log(OperatingSystem.cpus()); //Returns an array of objects containing information about each logical CPU core.
// console.log(OperatingSystem.homedir()); // Returns the string path of the current user's home directory.
// console.log(OperatingSystem.networkInterfaces()); // Returns an object containing network interfaces that have been assigned a network address.
// console.log(OperatingSystem.tmpdir()); // Returns the operating system's default directory for temporary files as a string.
/* */
// console.log(OperatingSystem.userInfo());

/* משימת מערכת הפעלה */
// const name = `${OperatingSystem.platform()}`;
// const version = `${OperatingSystem.version()}`;
// const type = `${OperatingSystem.type()}`;
// const host = `${OperatingSystem.hostname()}`;
// const architecture = `${OperatingSystem.arch()}`;

// const osInfo = { name, version, type, host, architecture };

// console.table(osInfo);
