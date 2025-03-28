import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};
console.log('firebaseConfig: ', firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
debugger;
// Get a list of cities from your database
async function getCities(db: any) {
  console.log('getcities');
  const col = collection(db, 'tasks');
  const snapshot = await getDocs(col);
  const list = snapshot.docs.map((doc) => doc.data());
  return list;
}

const x = await getCities(db);
console.log('returns', x);

console.log('Firebase initialized and Firestore connected');

document.getElementById('flip')?.addEventListener('click', () => workOrPlay());

function workOrPlay() {
  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(4);
  // The maximum is inclusive and the minimum is inclusive
  const x = Math.floor(
    Math.random() * (maxFloored - minCeiled + 1) + minCeiled
  );

  let answer = false;
  if (x == 1) {
    answer = true;
  }

  // Retrieve play and work counts from localStorage
  let playCount = parseInt(localStorage.getItem('play_count') ?? '0') || 0;
  let workCount = parseInt(localStorage.getItem('work_count') ?? '0') || 0;

  // Update the respective count based on the answer
  if (answer) {
    playCount++;
    localStorage.setItem('play_count', playCount.toString());
  } else {
    workCount++;
    localStorage.setItem('work_count', workCount.toString());
  }

  // Calculate percentage of play vs work
  const total = playCount + workCount;
  const per = total > 0 ? (playCount / total) * 100 : 0; // Avoid division by 0

  // Update the count display
  const countDiv = document.getElementById('count');
  if (countDiv) {
    countDiv.innerHTML = `${playCount}/${total} = ${per.toFixed(2)}%`; // Use toFixed for better precision}
  }

  // Update the coin image based on the result
  const coin = document.getElementById('coin');
  if (coin) {
    coin.innerHTML += answer
      ? '<img src="coin_glaceon.png">'
      : '<img src="coin_glaceon.png" class="grey">';
  }
}
