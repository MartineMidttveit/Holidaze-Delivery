import storage from "../helpers/storage";

export default async function createBooking(body) {
  const token = storage.get("auth_token");
  const url = `https://v2.api.noroff.dev/holidaze/bookings`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": "178b8358-4af8-4391-a4f1-072a66e27f03",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return data.data;
}
