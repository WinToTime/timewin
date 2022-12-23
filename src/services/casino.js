import { collection, getDocs } from 'firebase/firestore/lite';

export async function getCasino(db) {
  const casinoCol = collection(db, 'casino');
  console.log(casinoCol);
  const casinoSnapshot = await getDocs(casinoCol);
  console.log(casinoSnapshot);
  const casinoList = casinoSnapshot.docs.map(doc => doc.data());
  console.log(casinoList);
  return casinoList;
}
