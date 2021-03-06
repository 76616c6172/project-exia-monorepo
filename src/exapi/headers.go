package exapi

// Custom headers and cookies used by the API
const (
	HeaderJobStatusComplete  = "Job-Is-Complete"  // Header Key->value of "0" if not complete or "1" if complete
	HeaderJobIterationStatus = "Iteration-Status" // Header Key->value of "0" - "1000" depening on how many iterations
	HeaderJobAccepted        = "Job-Accepted"
	CookieWorkerTunnel       = "Worker-Tunnel"
)
