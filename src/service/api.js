import { BASE_URl } from "./constant/api-constant";

// ✅ Common Header Builder
function buildHeaders(token, isFormData = false) {
  const headers = {
    "Cache-Control": "no-store",
    Pragma: "no-cache",
  };

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
}

// ✅ GET Request
export async function get(endpoint, token = localStorage.getItem("t")) {
  try {
    const headers = buildHeaders(token);

    const url = `${BASE_URl}${endpoint}${endpoint.includes("?") ? "&" : "?"}_=${Date.now()}`;
    const response = await fetch(url, {
      headers,
      cache: "no-store",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("GET Error:", error);
    return { noData: true, data: [] };
  }
}

// ✅ POST Request
export async function post(endpoint, body, formdata = false, token = localStorage.getItem("t")) {
  try {
    const url = `${BASE_URl}${endpoint}`;
    const headers = buildHeaders(token, formdata);

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: formdata ? body : JSON.stringify(body),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("POST Error Response:", errorText);
      throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error in POST request:", error);
    return { success: false, error: error.message };
  }
}

// ✅ DELETE Request
export async function del(endpoint, token = localStorage.getItem("t")) {
  try {
    const headers = buildHeaders(token);

    const response = await fetch(`${BASE_URl}${endpoint}`, {
      method: "DELETE",
      headers,
      cache: "no-store",
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData };
    }
  } catch (error) {
    console.error("DELETE Error:", error);
    return { success: false, error: error.message };
  }
}
