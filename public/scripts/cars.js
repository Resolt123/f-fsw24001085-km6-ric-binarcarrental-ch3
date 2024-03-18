const getCarsData = async () => {
  const res = await fetch(`/cars`);
  const { data, message } = await res.json();
  return data;
};

export default {getCarsData};