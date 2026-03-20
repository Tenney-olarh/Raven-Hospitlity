export function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const firstName = "Adaeze";
      const lastName = "Okonkwo";

      resolve({
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`,
        point: "42,850",
        remainingPoint: "7,150",
        tier: "GOLD",
        nextTier: "PLATINUM",
        confirmationID: "RVN8829-24",
      });
    }, 1000);
  });
}
