export function cutString(str, maxLength) {
  if (maxLength <= str.length) {
    str = str.substring(0, maxLength - 3);
    if (str[str.length - 1] === ' ') {
      str = str.substring(0, maxLength - 4);
    }
    str += '...';
  }
  return str;
}
export function getTimeStringByMinute(minutes) {
  if (minutes === 0) return '0분';
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;

  let timeString = '';
  if (hour > 0) {
    timeString = `${hour}시간 `;
  } else return `${minutes}분`;

  if (minute > 0) {
    timeString += `${minute}분`;
  }
  return timeString;
}
