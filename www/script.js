const API_BASE = "https://btc-worker.soccer710a.workers.dev/api";

async function fetchCoincheck() {
  try {
    const res = await fetch(`${API_BASE}/coincheck`);
    const data = await res.json();

    const price = Number(data.last);
    const bid = Number(data.bid);
    const ask = Number(data.ask);
    const ts = Number(data.timestamp) * 1000;

    document.getElementById("cc-price").textContent = `BTC/JPY: ¥${price.toLocaleString()}`;
    document.getElementById("cc-bidask").textContent = `Bid: ¥${bid.toLocaleString()} / Ask: ¥${ask.toLocaleString()}`;
    document.getElementById("cc-lasttime").textContent = `最終更新: ${new Date(ts).toLocaleString()}`;
  } catch (e) {
    document.getElementById("cc-price").textContent = "取得エラー";
    console.error(e);
  }
}

// 初回取得
fetchCoincheck();

// 手動更新ボタン
document.getElementById("refresh").addEventListener("click", fetchCoincheck);
