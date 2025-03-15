import { Attribute, User } from "./definitions";


export const formatDateToLocal = (
    dates: string[],
    locale: string = 'en-US',
  ) => {
    const parsedDates = dates.map(date => {
      if (date !== null) return new Date(date)
    });
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    const formatter = new Intl.DateTimeFormat(locale, options);
    return parsedDates.map(date => date !== undefined ? formatter.format(date) : null);
};
  

export const sortUsers = (users: User[], attribute: Attribute, isDescending: boolean = false): User[] => {
  const sortedUsers = users.sort((a, b) => {
    if (attribute === 'created_at' || attribute === 'last_login') {
      return Date.parse(a[attribute] as string) - Date.parse(b[attribute] as string);
    } else if (attribute === 'is_blocked') {
      return Number(a[attribute]) - Number(b[attribute])
    } else if (typeof a[attribute] === 'string') {
      return a[attribute].localeCompare(b[attribute]);
    } else {
      return 0;
    }
  });

  return isDescending ? sortedUsers.reverse() : sortedUsers;
};