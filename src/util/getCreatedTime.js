export const getCreatedTime = (element) => {
  const now = new Date();
  const before = new Date(element.createdAt);
  const time = now - before;
  const timeDifferenceInSeconds = Math.floor(time / 1000);
  // 초를 시, 분, 초로 변환
  const hours = Math.floor((timeDifferenceInSeconds % 86400) / 3600);
  const day = Math.floor(timeDifferenceInSeconds / 86400);
  return { day: day, hours: hours };
};

