export const seedBranches = [
  { branch_id: 1, ifsc_code: "SBIN0000300", branch_name: "Nariman Point Branch", city: "Mumbai", state: "Maharashtra" },
  { branch_id: 2, ifsc_code: "SBIN0000691", branch_name: "Connaught Place Branch", city: "New Delhi", state: "Delhi" },
  { branch_id: 3, ifsc_code: "HDFC0000053", branch_name: "Indiranagar Branch", city: "Bengaluru", state: "Karnataka" },
  { branch_id: 4, ifsc_code: "ICIC0000007", branch_name: "FC Road Branch", city: "Pune", state: "Maharashtra" },
  { branch_id: 5, ifsc_code: "PUNB0001200", branch_name: "Anna Salai Branch", city: "Chennai", state: "Tamil Nadu" }
];

export const seedCustomers = [
  { customer_id: 1, pan_number: "ABCDE1234F", first_name: "Aarav", last_name: "Sharma", phone: "+919820112233", email: "aarav.sharma@example.com", address: "Flat 402, Sea Green Apts, Worli, Mumbai" },
  { customer_id: 2, pan_number: "BCDEF2345G", first_name: "Pooja", last_name: "Verma", phone: "+919811223344", email: "pooja.verma@example.com", address: "B-12, Green Park Extension, New Delhi" },
  { customer_id: 3, pan_number: "CDEFG3456H", first_name: "Rohan", last_name: "Iyer", phone: "+919845334455", email: "rohan.iyer@example.com", address: "74, 4th Cross, Indiranagar, Bengaluru" },
  { customer_id: 4, pan_number: "DEFGH4567I", first_name: "Sneha", last_name: "Patil", phone: "+919890445566", email: "sneha.patil@example.com", address: "15, Prabhat Road, Lane 3, Pune" },
  { customer_id: 5, pan_number: "EFGHI5678J", first_name: "Vikram", last_name: "Mehta", phone: "+919821556677", email: "vikram.mehta@example.com", address: "21, Marine Drive, Churchgate, Mumbai" },
  { customer_id: 6, pan_number: "FGHIJ6789K", first_name: "Ananya", last_name: "Reddy", phone: "+919840667788", email: "ananya.reddy@example.com", address: "88, TTK Road, Alwarpet, Chennai" }
];

export const seedAccounts = [
  { account_number: 1001000101, customer_id: 1, branch_id: 1, account_type: "Savings", balance: 85000.00, status: "Active", opened_at: "2025-01-15 10:30:00" },
  { account_number: 1001000102, customer_id: 1, branch_id: 1, account_type: "Current", balance: 250000.00, status: "Active", opened_at: "2025-02-01 11:15:00" },
  { account_number: 1001000201, customer_id: 2, branch_id: 2, account_type: "Savings", balance: 42000.50, status: "Active", opened_at: "2025-02-10 14:00:00" },
  { account_number: 1001000301, customer_id: 3, branch_id: 3, account_type: "Savings", balance: 195000.00, status: "Active", opened_at: "2025-03-05 09:45:00" },
  { account_number: 1001000302, customer_id: 3, branch_id: 3, account_type: "Fixed Deposit", balance: 500000.00, status: "Active", opened_at: "2025-03-06 16:20:00" },
  { account_number: 1001000401, customer_id: 4, branch_id: 4, account_type: "Savings", balance: 63500.00, status: "Active", opened_at: "2025-03-18 12:10:00" },
  { account_number: 1001000501, customer_id: 5, branch_id: 1, account_type: "Current", balance: 1250000.00, status: "Active", opened_at: "2025-04-02 15:30:00" },
  { account_number: 1001000601, customer_id: 6, branch_id: 5, account_type: "Savings", balance: 12000.00, status: "Dormant", opened_at: "2024-11-20 10:00:00" }
];

export const seedTransactions = [
  { transaction_id: 1, from_account: null, to_account: 1001000101, amount: 50000.00, transaction_type: "Deposit", status: "Success", date: "16-01-2025 11:00" },
  { transaction_id: 2, from_account: 1001000101, to_account: 1001000201, amount: 15000.00, transaction_type: "Transfer", status: "Success", date: "15-02-2025 14:30" },
  { transaction_id: 3, from_account: 1001000201, to_account: null, amount: 5000.00, transaction_type: "Withdrawal", status: "Success", date: "20-02-2025 16:45" },
  { transaction_id: 4, from_account: null, to_account: 1001000301, amount: 200000.00, transaction_type: "Deposit", status: "Success", date: "05-03-2025 10:00" },
  { transaction_id: 5, from_account: 1001000301, to_account: 1001000302, amount: 500000.00, transaction_type: "Transfer", status: "Success", date: "06-03-2025 16:00" },
  { transaction_id: 6, from_account: 1001000501, to_account: 1001000401, amount: 35000.00, transaction_type: "Transfer", status: "Success", date: "10-04-2025 11:20" },
  { transaction_id: 7, from_account: 1001000401, to_account: null, amount: 10000.00, transaction_type: "Withdrawal", status: "Success", date: "12-04-2025 18:05" },
  { transaction_id: 8, from_account: 1001000102, to_account: 1001000501, amount: 75000.00, transaction_type: "Transfer", status: "Success", date: "15-04-2025 13:40" }
];

export const seedLoans = [
  { loan_id: 1, customer_id: 1, branch_id: 1, loan_type: "Home", principal_amount: 4500000.00, interest_rate: 8.50, tenure_months: 240, status: "Active", sanctioned_at: "2025-02-15 12:00:00" },
  { loan_id: 2, customer_id: 3, branch_id: 3, loan_type: "Auto", principal_amount: 850000.00, interest_rate: 9.25, tenure_months: 60, status: "Active", sanctioned_at: "2025-03-12 15:45:00" },
  { loan_id: 3, customer_id: 4, branch_id: 4, loan_type: "Education", principal_amount: 1200000.00, interest_rate: 9.00, tenure_months: 84, status: "Active", sanctioned_at: "2025-04-01 10:30:00" },
  { loan_id: 4, customer_id: 5, branch_id: 1, loan_type: "Personal", principal_amount: 300000.00, interest_rate: 11.75, tenure_months: 36, status: "Active", sanctioned_at: "2025-04-18 17:15:00" }
];

export const seedAuditLogs = [
  { log_id: 1, account_number: 1001000101, action: "INITIAL_DEPOSIT", old_balance: 0.00, new_balance: 50000.00, date: "16-01-2025 11:00" },
  { log_id: 2, account_number: 1001000101, action: "TRANSFER_DEBIT", old_balance: 100000.00, new_balance: 85000.00, date: "15-02-2025 14:30" },
  { log_id: 3, account_number: 1001000201, action: "TRANSFER_CREDIT", old_balance: 27000.50, new_balance: 42000.50, date: "15-02-2025 14:30" },
  { log_id: 4, account_number: 1001000201, action: "ATM_WITHDRAWAL", old_balance: 47000.50, new_balance: 42000.50, date: "20-02-2025 16:45" }
];