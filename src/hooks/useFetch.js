import { useEffect, useState } from "react";


export default function useFetch(url) {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
const controller = new AbortController();
setLoading(true);
fetch(url, { signal: controller.signal })
.then((res) => {
if (!res.ok) throw new Error("Network response was not ok");
return res.json();
})
.then((d) => setData(d))
.catch((err) => {
if (err.name !== "AbortError") setError(err);
})
.finally(() => setLoading(false));


return () => controller.abort();
}, [url]);


return { data, loading, error };
}