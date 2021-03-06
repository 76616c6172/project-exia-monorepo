package exapi

// Job for internal use by gpu-worker + scheduler
//type Job struct {
//	Jobid            string `json:"jobid"`
//	Prompt           string `json:"prompt"`
//	Job_status       string `json:"job_status"`
//	Job_params       string `json:"job_params"`
//	Iteration_status int    `json:"iteration_status"`
//	Iteration_max    int    `json:"iteration_max"`
//}

// Form sent by gpu-workers to register with the scheduler
type WorkerRegistrationForm struct {
	Secret string `json:"secret"` // TODO: Authenticate better
}

// Sent back to the scheduler after receiving a job posting
type WorkerResponse struct {
	Job_accepted bool `json:"job_accepted"`
}
