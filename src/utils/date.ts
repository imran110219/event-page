export const toDateAtLocalMidnight = (dateInput: string): Date => {
  const [year, month, day] = dateInput.split('-').map(Number);
  return new Date(year, month - 1, day);
};

export const isFutureDate = (dateInput: string): boolean => {
  const today = new Date();
  const todayAtMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  return toDateAtLocalMidnight(dateInput).getTime() >= todayAtMidnight.getTime();
};

export const formatEventDate = (dateInput: string): string =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(toDateAtLocalMidnight(dateInput));

export const formatEventDateLong = (dateInput: string): string =>
  new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(toDateAtLocalMidnight(dateInput));

export const getEventDateParts = (dateInput: string): { day: string; month: string } => {
  const date = toDateAtLocalMidnight(dateInput);

  return {
    day: new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(date),
    month: new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date)
  };
};
