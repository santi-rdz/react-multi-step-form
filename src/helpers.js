export const isValidName = (name) => name !== "" && name.split(" ").length >= 2;
export const isValidEmail = (email) => email !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const isValidPhone = (phone) => phone !== "" && /^\+?[\d\s\-()]{7,}$/.test(phone);
export const allValid = (name, email, phone) => isValidName(name) && isValidEmail(email) && isValidPhone(phone);
export const formatedPrice = (price, isYearly) => `${price}/${isYearly ? "yr" : "mo"}`;
