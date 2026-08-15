export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function calculateMonthlyMortgage(
  principal: number,
  annualInterestRate: number,
  years: number
): number {
  if (principal <= 0) return 0;
  const monthlyRate = annualInterestRate / 100 / 12;
  const totalPayments = years * 12;
  if (monthlyRate === 0) return principal / totalPayments;
  return (
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1)
  );
}
