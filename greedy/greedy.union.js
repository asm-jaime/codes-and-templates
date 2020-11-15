((states_needed, stations) => {
  const union = (setA, setB) => {
    const _union = new Set(setA);
    for(let elem of setB) {
      _union.add(elem);
    }
    return _union;
  };

  const res = {};
  let unions = new Set();
  for(const station in stations) {
    if(states_needed.size === unions.size) break;
    unions = union(unions, stations[station]);
    res[station] = true;
  }

  return Object.keys(res);
})(
  new Set([ "mt", "wa", "or", "id", "nv", "ut","ca","az"]),
  {"kone": new Set(["id", "nv", "ut"]),
   "ktwo": new Set(["wa", "id", "mt"]),
   "kthree": new Set(["or", "nv", "ca"]),
   "kfour": new Set(["nv", "ut"]),
   "kfive": new Set(["ca", "az"]),
   "huivez": new Set(["or", "az"])}
)
