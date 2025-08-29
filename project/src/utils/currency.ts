const USD_TO_INR = 83; // simple static conversion; adjust as needed

export const toINR = (usd: number) => Math.round(usd * USD_TO_INR);

export const formatINR = (value: number) => {
  try {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
  } catch {
    return `₹${value}`;
  }
};


