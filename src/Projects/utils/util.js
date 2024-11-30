import DATA from "../frontend-assignment.json";
export function transFormProjectList(list) {
  return list.map((data) => {
    return {
      sNo: data["s.no"],
      amtPledged: data["amt.pledged"],
      percFunded: data["percentage.funded"],
    };
  });
}

export function delayMockData({ page, limit }) {
  console.log({ page, limit });
  const data = DATA.slice(page * limit, (page + 1) * limit);
  return new Promise((res, rej) => {
    setTimeout(() => res(data), 1000);
  });
}
