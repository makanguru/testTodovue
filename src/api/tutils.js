export const getFromLocalStorage = (key, datarr) => {
  
  if (localStorage.getItem(key)) {
    try {
      datarr = JSON.parse(localStorage.getItem(key));
    } catch(e) {
      localStorage.removeItem(key);
    }
  }
  return datarr;
};

export const saveToLocalStorage = (key, datarr) => {
  const parsed = JSON.stringify(datarr);
  localStorage.setItem(key, parsed);

};


