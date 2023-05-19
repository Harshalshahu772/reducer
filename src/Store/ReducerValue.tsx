export type stateObje = { value: number; name: string };
export type stateType = {
  BP: stateObje;
  HR: stateObje;
  SBP: stateObje;
  DBP: stateObje;
};

export type actionType={
  payload:{value:number},
  type:string
}

