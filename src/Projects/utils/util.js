export function transFormProjectList(list) {
  return list.map((data) => {
    return {
      sNo: data["s.no"],
      amtPledged: data["amt.pledged"],
      percFunded: data["percentage.funded"],
    };
  });
}

export function delayMock() {
  return new Promise((res, rej) => {
    setTimeout(() => res(), 1000);
  });
}
