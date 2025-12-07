// ========================================
// CREATING DATE OBJECTS
// ========================================

// Current date and time
let myDate = new Date();
console.log(`Current Date and Time: ${myDate.toString()}`);

// Specific date with string
let specificDate = new Date("2001-10-20");
console.log(`Specific Date: ${specificDate.toDateString()}`);

// Specific date with parameters (year, month, day, hours, minutes, seconds)
// Note: Month is zero-indexed (0 = January, 11 = December)
let dateWithParams = new Date(2001, 9, 20, 14, 30, 0);
console.log(`Date with Parameters: ${dateWithParams.toString()}`);

// Date from timestamp (milliseconds since January 1, 1970)
let dateFromTimestamp = new Date(1609459200000);
console.log(`Date from Timestamp: ${dateFromTimestamp.toString()}`);

// ========================================
// COMMON DATE FORMATTING
// ========================================

// toString() - Full date and time string
console.log(`toString(): ${myDate.toString()}`);

// toDateString() - Human-readable date only
console.log(`toDateString(): ${myDate.toDateString()}`);

// toISOString() - ISO 8601 format (used in APIs and databases)
console.log(`toISOString(): ${myDate.toISOString()}`);

// toLocaleString() - Locale-specific date and time
console.log(`toLocaleString(): ${myDate.toLocaleString()}`);

// toLocaleTimeString() - Locale-specific time format
console.log(`toLocaleTimeString(): ${myDate.toLocaleTimeString()}`);

// ========================================
// FREQUENTLY USED GET METHODS
// ========================================

// getFullYear() - Four-digit year
console.log(`Year: ${myDate.getFullYear()}`);

// getMonth() - Month (0-11, add 1 for human-readable)
console.log(`Month: ${myDate.getMonth() + 1}`);

// getDate() - Day of the month (1-31)
console.log(`Date: ${myDate.getDate()}`);

// getDay() - Day of the week (0-6, Sunday = 0)
console.log(`Day of Week: ${myDate.getDay()}`);

// getHours() - Hour (0-23)
console.log(`Hours: ${myDate.getHours()}`);

// getMinutes() - Minutes (0-59)
console.log(`Minutes: ${myDate.getMinutes()}`);

// getSeconds() - Seconds (0-59)
console.log(`Seconds: ${myDate.getSeconds()}`);

// getMilliseconds() - Milliseconds (0-999)
console.log(`Milliseconds: ${myDate.getMilliseconds()}`);

// getTime() - Timestamp in milliseconds (most commonly used for comparisons)
console.log(`Time (ms since Jan 1, 1970): ${myDate.getTime()}`);

// ========================================
// FREQUENTLY USED SET METHODS
// ========================================

let modifiableDate = new Date();

// setFullYear() - Change year
modifiableDate.setFullYear(2025);
console.log(`After setFullYear: ${modifiableDate.toDateString()}`);

// setMonth() - Change month (0-11)
modifiableDate.setMonth(11);
console.log(`After setMonth: ${modifiableDate.toDateString()}`);

// setDate() - Change day of month
modifiableDate.setDate(25);
console.log(`After setDate: ${modifiableDate.toDateString()}`);

// setHours() - Change hours
modifiableDate.setHours(18);
console.log(`After setHours: ${modifiableDate.toString()}`);

// setTime() - Set using timestamp (useful for date calculations)
modifiableDate.setTime(Date.now() + 86400000); // Add 1 day
console.log(`After setTime: ${modifiableDate.toString()}`);

// ========================================
// STATIC METHODS (VERY COMMON)
// ========================================

// Date.now() - Current timestamp (fastest way to get current time)
let timestamp = Date.now();
console.log(`Current Timestamp: ${timestamp}`);

// Date.parse() - Parse date string to timestamp
let parsedTimestamp = Date.parse("2024-12-07");
console.log(`Parsed Timestamp: ${parsedTimestamp}`);

// ========================================
// COMMON DATE OPERATIONS
// ========================================

// Adding days to a date
let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 7);
console.log(`7 Days Later: ${futureDate.toDateString()}`);

// Subtracting days from a date
let pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 30);
console.log(`30 Days Ago: ${pastDate.toDateString()}`);

// Difference between two dates (in days)
let date1 = new Date("2024-01-01");
let date2 = new Date("2024-12-31");
let diffInMs = date2 - date1;
let diffInDays = diffInMs / (1000 * 60 * 60 * 24);
console.log(`Difference: ${diffInDays} days`);

// Comparing dates
let compareDate1 = new Date("2024-06-01");
let compareDate2 = new Date("2024-12-01");
console.log(`Date1 < Date2: ${compareDate1 < compareDate2}`);
console.log(
  `Dates equal: ${compareDate1.getTime() === compareDate2.getTime()}`
);

// ========================================
// TYPE CHECKING
// ========================================

console.log(`typeof myDate: ${typeof myDate}`); // "object"
console.log(`instanceof Date: ${myDate instanceof Date}`); // true

// ========================================
// PRACTICAL EXAMPLES
// ========================================

// Format date as YYYY-MM-DD (common for inputs and APIs)
function formatDate(date) {
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
console.log(`Formatted Date: ${formatDate(myDate)}`);

// Check if date is today
function isToday(date) {
  let today = new Date();
  return date.toDateString() === today.toDateString();
}
console.log(`Is today: ${isToday(myDate)}`);

// Get start of day (00:00:00)
function startOfDay(date) {
  let newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
}
console.log(`Start of Day: ${startOfDay(myDate).toString()}`);

// Get end of day (23:59:59)
function endOfDay(date) {
  let newDate = new Date(date);
  newDate.setHours(23, 59, 59, 999);
  return newDate;
}
console.log(`End of Day: ${endOfDay(myDate).toString()}`);

// Calculate age from birthdate
function calculateAge(birthdate) {
  let today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  let monthDiff = today.getMonth() - birthdate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthdate.getDate())
  ) {
    age--;
  }
  return age;
}
let birthdate = new Date("1990-05-15");
console.log(`Age: ${calculateAge(birthdate)} years`);
