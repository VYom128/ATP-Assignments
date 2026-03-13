// 1.Exam portal simulator:
// -----------------------------
// When a student submits an exam:

//         Immediately show: “Exam submitted successfully”
//         After 2 seconds → show: “Evaluating answers…”
//         After 4 seconds → show: “Result: Pass”

console.log("Exam submitted successfully");

// after 2 seconds
setTimeout(() => {
  console.log("Evaluating answers...");
}, 2000);

// after 4 seconds
setTimeout(() => {
  console.log("Result: Pass");
}, 4000);



// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”
        
//         Start 10-second countdown
        
//         Allow resend only after countdown ends

console.log("OTP Sent Successfully");
let seconds = 10;
const countdown = setInterval(() => {
  console.log(`Resend OTP in ${seconds} seconds`);
  seconds--;
  if (seconds < 0) {
    clearInterval(countdown);
    console.log("Resend otp now");
  }
}, 1000);