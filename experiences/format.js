/**
 * Calculates total duration from an array of experiences and returns a formatted string.
 *
 * @param {Array<{startDate: string, endDate?: string}>} experiences
 * @param {Object} labels Translation object containing duration keys (yearSingular, yearPlural, monthSingular, monthPlural, and)
 * @returns {string} Formatted string
 */
export function formatTotalExperience(experiences, labels) {
  if (!Array.isArray(experiences) || experiences.length === 0 || !labels) {
    return `0 ${labels?.monthPlural || 'meses'}`;
  }

  let totalMonths = 0;

  for (const exp of experiences) {
    if (!exp.startDate) continue;

    const [startYear, startMonth] = exp.startDate.split("-").map(Number);
    let endYear;
    let endMonth;

    if (!exp.endDate || exp.endDate.toLowerCase() === "present") {
      const now = new Date();
      endYear = now.getFullYear();
      endMonth = now.getMonth() + 1;
    } else {
      [endYear, endMonth] = exp.endDate.split("-").map(Number);
    }

    const months = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
    if (months > 0) {
      totalMonths += months;
    }
  }

  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  const parts = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? labels.yearSingular : labels.yearPlural}`);
  }

  if (remainingMonths > 0) {
    parts.push(`${remainingMonths} ${remainingMonths === 1 ? labels.monthSingular : labels.monthPlural}`);
  }

  if (parts.length === 0) {
    return `0 ${labels.monthPlural}`;
  }

  return parts.join(` ${labels.and} `);
}