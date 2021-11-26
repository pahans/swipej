import { API_URL, ENDPOINT_ACCEPT, ENDPOINT_JOB_MATCHES, ENDPOINT_REJECT, ENDPOINT_USER } from "../constants";

export const fetchJobMatches = (userId: string) => fetch(`${API_URL}/${userId}/${ENDPOINT_JOB_MATCHES}`).then((res) => res.json());
export const fetchUser = (userId: string) => fetch(`${API_URL}/${userId}/${ENDPOINT_USER}`).then((res) => res.json());

export const acceptJob = (userId: string, jobId: string) => fetch(`${API_URL}/${userId}/job/${jobId}/${ENDPOINT_ACCEPT}`).then((res) => res.json());
export const rejectJob = (userId: string, jobId: string) => fetch(`${API_URL}/${userId}/job/${jobId}/${ENDPOINT_REJECT}`).then((res) => res.json());