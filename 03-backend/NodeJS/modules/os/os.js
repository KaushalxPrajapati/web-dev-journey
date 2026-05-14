const os = require('os');

console.log('==========================================');
console.log('           OS MODULE DETAILS');
console.log('==========================================\n');

// ==========================================
// HELPER FUNCTION
// ==========================================

// Converts bytes into GB format with 2 decimal places
function convertBytesToGB(bytes) {
    return (bytes / (1024 * 1024 * 1024)).toFixed(2);
}

// ==========================================
// BASIC OPERATING SYSTEM INFORMATION
// ==========================================

console.log('==========================================');
console.log('   BASIC OPERATING SYSTEM INFORMATION');
console.log('==========================================\n');

console.log('🖥️ Platform:', os.platform());

// Returns the platform of the operating system

// Examples:
// win32   -> Windows
// linux   -> Linux
// darwin  -> macOS

// Example Output:
// Platform: win32

console.log('\n------------------------------------------\n');

console.log('💻 OS Type:', os.type());

// Returns the operating system name or type

// Example:
// Windows_NT

// Example Output:
// OS Type: Windows_NT

console.log('\n------------------------------------------\n');

console.log('🏗️ Architecture:', os.arch());

// Returns processor architecture of the system

// Examples:
// x64   -> 64-bit processor
// x32   -> 32-bit processor
// arm64 -> ARM processor

// Example Output:
// Architecture: x64

console.log('\n------------------------------------------\n');

console.log('📦 OS Version:', os.version());

// Returns detailed operating system version information

// Example Output:
// OS Version: Windows 11 Home Single Language

// ==========================================
// CPU INFORMATION
// ==========================================

console.log('\n==========================================');
console.log('             CPU INFORMATION');
console.log('==========================================\n');

const cpuInfo = os.cpus();

console.log('🧠 Total CPU Cores:', cpuInfo.length);

// Returns total logical CPU cores

// Example Output:
// Total CPU Cores: 16

console.log('\n------------------------------------------\n');

console.log('⚡ CPU Model:', cpuInfo[0].model);

// Returns processor model name

// Example Output:
// AMD Ryzen 7 7435HS

console.log('\n------------------------------------------\n');

console.log('🚀 CPU Speed:', `${cpuInfo[0].speed} MHz`);

// Returns CPU speed in MHz

// Example Output:
// CPU Speed: 3100 MHz

console.log('\n------------------------------------------\n');

console.log('📌 First CPU Core Full Details:\n');
console.log(cpuInfo[0]);

// Gives complete details of first CPU core

// Includes:
// - model
// - speed
// - times (CPU usage timings)

// times contains:
// - user   -> time spent running user processes
// - nice   -> priority process time (Linux/macOS)
// - sys    -> system/kernel process time
// - idle   -> idle CPU time
// - irq    -> interrupt request time

// Example Output:
/*
{
  model: 'AMD Ryzen 7 7435HS',
  speed: 3100,
  times: {
    user: 123456,
    nice: 0,
    sys: 98765,
    idle: 543210,
    irq: 1234
  }
}
*/

// ==========================================
// MEMORY INFORMATION
// ==========================================

console.log('\n==========================================');
console.log('           MEMORY INFORMATION');
console.log('==========================================\n');

const freeMemory = os.freemem();

console.log(`🟢 Free Memory: ${convertBytesToGB(freeMemory)} GB`);

// Returns available/free RAM in bytes
// Converted into GB for readability

// Example Output:
// Free Memory: 12.45 GB

console.log('\n------------------------------------------\n');

const totalMemory = os.totalmem();

console.log(`🔵 Total Memory: ${convertBytesToGB(totalMemory)} GB`);

// Returns total installed RAM in bytes
// Converted into GB for readability

// Example Output:
// Total Memory: 23.35 GB

console.log('\n------------------------------------------\n');

// ==========================================
// MEMORY USAGE CALCULATION
// ==========================================

// Used Memory = Total Memory - Free Memory
const usedMemory = totalMemory - freeMemory;

// Convert memory usage into percentage
const memoryUsagePercentage = (usedMemory / totalMemory) * 100;

// Keep only 2 digits after decimal
const finalMemoryUsage = memoryUsagePercentage.toFixed(2);

console.log(`📊 Memory Usage: ${finalMemoryUsage}% Used`);

// Example Output:
// Memory Usage: 46.78% Used

// ==========================================
// USER & SYSTEM INFORMATION
// ==========================================

console.log('\n==========================================');
console.log('          USER / SYSTEM INFO');
console.log('==========================================\n');

console.log('🏠 Home Directory:', os.homedir());

// Returns current user's home directory

// Example Output:
// C:\Users\Kaushal Prajapati

console.log('\n------------------------------------------\n');

console.log('🌐 Hostname:', os.hostname());

// Returns device/computer name

// Example Output:
// DESKTOP-ABC123

console.log('\n------------------------------------------\n');

console.log('👤 User Information:\n');
console.log(os.userInfo());

// Returns object containing current user details

// Includes:
// - username
// - homedir
// - shell (Linux/macOS)
// - uid/gid (Linux/macOS)

// Example Output:
/*
{
  uid: -1,
  gid: -1,
  username: 'Kaushal Prajapati',
  homedir: 'C:\\Users\\Kaushal Prajapati',
  shell: null
}
*/

// ==========================================
// SYSTEM UPTIME
// ==========================================

console.log('\n==========================================');
console.log('             SYSTEM UPTIME');
console.log('==========================================\n');

const uptimeSeconds = os.uptime();

// Convert uptime into minutes
const uptimeMinutes = (uptimeSeconds / 60).toFixed(2);

// Convert uptime into hours
const uptimeHours = (uptimeSeconds / 3600).toFixed(2);

console.log(`⏳ Uptime: ${uptimeSeconds} Seconds`);

console.log('\n------------------------------------------\n');

console.log(`⏳ Uptime: ${uptimeMinutes} Minutes`);

console.log('\n------------------------------------------\n');

console.log(`⏳ Uptime: ${uptimeHours} Hours`);

// Returns how long the system
// has been ON since last boot

// ==========================================
// NETWORK INFORMATION
// ==========================================

console.log('\n==========================================');
console.log('          NETWORK INFORMATION');
console.log('==========================================\n');

console.log('🛜 Network Interfaces:\n');
console.log(os.networkInterfaces());

// Returns all network adapters and IP details

// Includes:
// - IPv4 address
// - IPv6 address
// - MAC address
// - internal/external status

// Example Output:
/*
{
  Wi-Fi: [
    {
      address: '192.168.1.5',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: 'xx:xx:xx:xx',
      internal: false
    }
  ]
}
*/

// ==========================================
// EXTRA USEFUL METHODS
// ==========================================

console.log('\n==========================================');
console.log('            EXTRA METHODS');
console.log('==========================================\n');

console.log('📍 Temp Directory:', os.tmpdir());

// Returns temporary files folder path

// Example Output:
// C:\Users\Kaushal\AppData\Local\Temp

console.log('\n------------------------------------------\n');

console.log('📡 Machine Type:', os.machine());

// Returns hardware architecture of the machine

// Examples:
// x86_64 -> 64-bit machine
// arm64   -> ARM-based machine

console.log('\n------------------------------------------\n');

console.log('⚖️ Load Average:', os.loadavg());

// Mainly useful in Linux/macOS

// Shows CPU load average for:
// - 1 minute
// - 5 minutes
// - 15 minutes

// Windows usually returns:
// [0, 0, 0]

// Example Output:
// [0.45, 0.32, 0.20]
