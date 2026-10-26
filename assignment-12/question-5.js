// Try different combinations to check the home security status.
const securityChecks = [
  { isDoorLocked: true, isWindowClosed: true, isAlarmOn: true, isOwnerInside: true },
  { isDoorLocked: true, isWindowClosed: false, isAlarmOn: true, isOwnerInside: true },
  { isDoorLocked: true, isWindowClosed: true, isAlarmOn: false, isOwnerInside: false }
];

for (const checks of securityChecks) {
  const isSecure = checks.isAlarmOn && checks.isDoorLocked && checks.isWindowClosed && checks.isOwnerInside;
  const isUnsafe = !checks.isAlarmOn || !checks.isDoorLocked || !checks.isWindowClosed || !checks.isOwnerInside;
  const status = isSecure && !isUnsafe ? "Secure" : "Unsafe";

  console.log(`Security checks ${JSON.stringify(checks)} => ${status}`);
}